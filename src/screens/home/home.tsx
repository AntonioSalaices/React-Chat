import { useMemo, useState } from 'react';

import Message from '@Components/basics/Message/Message';
import Spinner from '@Components/basics/Spinner/Spinner';
import {MemoizedList} from '@Components/composed/List/List';

import { DOTENV } from '@Constans/constants';
import { PURPLE } from '@Utils/colors';
import Formatter from '@Utils/formatter';
import Form from './components/Form/Form';
import { FormState } from '@Utils/types';

import useFetch from '@Hooks/useFetch/useFetch';
import Helper from '@Utils/helper';
import { ReadError } from '@Utils/Error';

const { getFormatedData } = Formatter;
const { readInputs } = Helper;

const Home = (): React.ReactElement => {
  const [values, setValues] = useState<FormState>({
    search: '',
    pagination:'10'
  });
  
  const url: string = `${DOTENV.API_URL}${DOTENV.API_SEARCH}}`
        .replace("{key}", DOTENV.API_KEY)
        .replace("{search}", values.search)
        .replace("{pagination}", values.pagination);


  const { data, loading } = useFetch(url);
  const latestData = useMemo(() => getFormatedData(data), [data]);
  const hasData: boolean = data?.length > 0;
  const isShownNoFoundMessage: boolean = (!hasData && Boolean(values.search));


  //We can reuse this function for another inputs
  const handleCurried = (fieldName: string) => {
    return ({target: {value}} : React.ChangeEvent<HTMLInputElement>) => {
       setValues((prev: FormState) => ({
        ...prev,
        [fieldName]: value
       })) 
    }
  }

  const onChange = () => {
    try {
      readInputs('{ "age": 25, "name": "Antonio" }');
    } catch (e) {
      if (e instanceof ReadError) {
        alert(e);
        alert("Original error: " + e.cause);
      } else {
        throw e;
      }
    }
  }

  return (
    <div className="container">
      <Form search={values.search} handleCurried={handleCurried} pagination={values.pagination}  />
        <button onClick={onChange}>Test Error</button>
        {loading ? <Spinner singleColor={PURPLE} /> : <></>}
        {hasData ? <MemoizedList data={latestData} /> : <></>}
        {isShownNoFoundMessage ? <Message message={`No gifs found for ${values.search}`} /> : <></>}
    </div>
  );
}

export default Home; 
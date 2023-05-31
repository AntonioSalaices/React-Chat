import { useCallback, useMemo, useState } from 'react';

import useFetch from '../../hooks/useFetch/useFetch';

import Message from '../../components/basics/Message/Message';
import Container from '../../components/basics/Container/Container';
import {MemoizedInput} from '../../components/basics/InputField/InputField';
import Spinner from '../../components/basics/Spinner/Spinner';
import List from '../../components/composed/List/List';

import { DOTENV } from '../../utils/constants';
import { PURPLE } from '../../utils/colors';
import Formatter from '../../utils/formatter';

const { getFormatedData } = Formatter;

const Home = (): React.ReactElement => {
  const [search, setSearch] = useState<string>('');
  const url: string = `${DOTENV.API_URL}${DOTENV.API_SEARCH}}`.replace("{key}", DOTENV.API_KEY).replace("{search}", search);
  const { data, loading } = useFetch(url);

  const latestData = useMemo(() => getFormatedData(data), [data]);

  const hasData: boolean = data?.length > 0;
  const isShownNoFoundMessage: boolean = (!hasData && Boolean(search));

  const handleChange = useCallback(({target: {value}} : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  },[])

  return (
      <>
       <div className='search-container'>
          <MemoizedInput
              value={search}
              type='text'
              placeholder='Search...'
              onChange={handleChange}
          />
       </div>
       <Container>
          {loading ? <Spinner singleColor={PURPLE} /> : <></>}
          {hasData ? <List data={latestData} /> : <></>}
          {isShownNoFoundMessage ? <Message message={`No gifs found for ${search}`} /> : <></>}
       </Container>
      </>
  );
}

export default Home; 
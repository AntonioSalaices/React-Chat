import { useMemo, useState } from 'react';

import useFetch from 'hooks/useFetch/useFetch';

import Message from 'components/basics/Message/Message'
import Container from 'components/basics/Container/Container';
import Search from 'components/composed/Search/Search';
import Pagination from 'components/composed/Pagination/Pagination';
import Spinner from 'components/basics/Spinner/Spinner';
import List from 'components/composed/List/List';

import { DOTENV } from 'utils/constants';
import { PURPLE } from 'utils/colors';
import Formatter from 'utils/formatter';

const { getFormatedData } = Formatter;

const Home = (): React.ReactElement => {
  const [search, setSearch] = useState<string>('');
  const [pagination, setPagination] = useState<string>('10')
  const url: string = `${DOTENV.API_URL}${DOTENV.API_SEARCH}}`
        .replace("{key}", DOTENV.API_KEY)
        .replace("{search}", search)
        .replace("{pagination}", pagination);


  const { data, loading } = useFetch(url);
  const latestData = useMemo(() => getFormatedData(data), [data]);
  const hasData: boolean = data?.length > 0;
  const isShownNoFoundMessage: boolean = (!hasData && Boolean(search));


  //We can reuse this function for another inputs
  const handleCurried = (functionNumber: number) => {
    return ({target: {value}} : React.ChangeEvent<HTMLInputElement>) => functionNumber === 1 
          ? setSearch(value) 
          : setPagination(value);
  }

  return (
      <div className="container-fluid">
        <Search search={search} handleChange={handleCurried(1)}  />
        <Pagination pagination={pagination} handleChange={handleCurried(2)} />
        {loading ? <Spinner singleColor={PURPLE} /> : <></>}
        {hasData ? <List data={latestData} /> : <></>}
        {isShownNoFoundMessage ? <Message message={`No gifs found for ${search}`} /> : <></>}
      </div>
  );
}
export default Home; 
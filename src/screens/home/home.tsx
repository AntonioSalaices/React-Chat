import { useState } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Formatter from '../../utils/utils';
import { PURPLE } from '../../utils/colors';
import InputField from '../../components/basics/InputField/InputField';
import Spinner from '../../components/basics/Spinner/Spinner';
import List from '../../components/composed/List/List';
import '../../styles/Home.css';
import Container from '../../components/basics/Container/Container';

const { getUriGifs } = Formatter;

const Home = (): React.ReactElement => {
  const [search, setSearch] = useState<string>('');
  const { data, loading } = useFetch(getUriGifs(search));
  const hasData: boolean = data?.length > 0;

  const handleChange = ({target: {value}} : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  }

  return (
      <>
       <div className='search-container'>
          <InputField
              value={search}
              type='text'
              placeholder='Search...'
              onChange={handleChange}
          />
       </div>
       <Container>
          {loading && <Spinner singleColor={PURPLE} />}
          {hasData && <List data={data} />}
          {(!hasData && Boolean(search) ) && (<div> <p>No gifs found for {search}</p> </div>)}
       </Container>
      </>
  );
}

export default Home;

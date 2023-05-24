import { useState } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Formatter from '../../utils/utils';
import { PURPLE } from '../../utils/colors';
import InputField from '../../components/basics/InputField/InputField';
import Spinner from '../../components/basics/Spinner/Spinner';
import List from '../../components/composed/List/List';

const { getUriGifs } = Formatter;

const Home = (): React.ReactElement => {
  const [search, setSearch] = useState<string>('');
  const { data, loading, error } = useFetch(getUriGifs(search));
  const hasData: boolean = data?.length > 0;

  const handleChange = ({target: {value}} : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  }

  return (
      <div className='home-container' >
        <InputField
          label='Search'
          value={search}
          type='text'
          placeholder='Search...'
          onChange={handleChange}
        />
        {loading && <Spinner singleColor={PURPLE} />}
        {hasData && <List data={data} />}
      </div> 
  );
}

export default Home;

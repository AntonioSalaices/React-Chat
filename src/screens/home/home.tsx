import React, { useDeferredValue, useEffect, useMemo, useState } from 'react';

import MemoizedList from '@Components/composed/List';
import Container from '@Components/composed/Container';
import Form from './components/Form/Form';

import useFetch from '@Hooks/useFetch/useFetch';
import useDebounce from '@Hooks/useDebounce/useDebounce';

import { OnChangeType } from '@Constans/htmlConstants';
import Formatter from '@Utils/formatter';

const { VITE_BASE_URL, VITE_API_SEARCH, VITE_API_KEY } = import.meta.env;

const { getFormatedData } = Formatter;

const Home = (): React.ReactElement => {
  const [search, setSearch] = useState<string>('');
  const deferredQuery = useDeferredValue(search);

  const url: string = `${VITE_BASE_URL}${VITE_API_SEARCH}}`
    .replace('{key}', VITE_API_KEY)
    .replace('{search}', deferredQuery);

  const { data, isLoading } = useFetch(url);
  const latestData = useMemo(() => getFormatedData(data), [data]);
  const hasData: boolean = latestData?.length > 0;
  const isShownNoFoundMessage: boolean = !hasData && Boolean(search);

  const debouncedSearch = useDebounce(
    ({ target: { value } }: OnChangeType) => {
      setSearch(value);
    },
    300,
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  });

  return (
    <Container>
      <Form handleSearch={debouncedSearch} />
      <MemoizedList isShownNoFoundMessage={isShownNoFoundMessage} isLoading={isLoading} data={latestData} />
    </Container>
  );
};

export default Home;

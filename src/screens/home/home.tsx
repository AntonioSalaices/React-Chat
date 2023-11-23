import React, { useDeferredValue, useEffect, useMemo, useState } from 'react';

import { List, Container, Card, Section } from '@Components/Core';
import Form from './components/Form/Form';

import useFetch from '@Hooks/useFetch/useFetch';
import useDebounce from '@Hooks/useDebounce/useDebounce';

import { OnChangeType } from '@Constants/Core';
import Formatter from '@Utils/formatter';
import { GifData } from 'ApiData';

const { VITE_BASE_URL, VITE_API_SEARCH, VITE_API_KEY } = import.meta.env;

const { getFormatedData, getFontSize } = Formatter;

const renderGifImages = ({ id, ...rest }: Partial<GifData>) => {
  return <Card key={id} {...rest} />;
};

const Home = (): React.ReactElement => {
  const [search, setSearch] = useState<string>('');
  const deferredQuery = useDeferredValue(search);

  const url: string = `${VITE_BASE_URL}${VITE_API_SEARCH}}`
    .replace('{key}', VITE_API_KEY)
    .replace('{search}', deferredQuery);

  const { data, isLoading } = useFetch<GifData>(url);

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

  const handleResize = ({ target: { value } }: OnChangeType) => {
    const container = document.getElementById('main-container') as HTMLElement;
    container.style.fontSize = getFontSize(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  });

  return (
    <Container>
      <Form handleSearch={debouncedSearch} handleFontResize={handleResize} />
      <List
        renderItem={renderGifImages}
        isShownNoFoundMessage={isShownNoFoundMessage}
        isRow
        isLoading={isLoading}
        data={latestData}
      />
      <Section />
    </Container>
  );
};

export default Home;

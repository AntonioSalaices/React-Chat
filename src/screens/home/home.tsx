import React, { useDeferredValue, useEffect, useMemo, useState } from "react";

import MemoizedList from "@Components/composed/List";
import Container from "@Components/basics/Container/Container";
import Form from "./components/Form/Form";

import useFetch from "@Hooks/useFetch/useFetch";
import useThrottle from "@Hooks/useThrottle/useThrottle";
import useDebounce from "@Hooks/useDebounce/useDebounce";

import { Events } from "@Constans/eventConstants";
import { OnChangeType } from "@Utils/types";
import Formatter from "@Utils/formatter";

const { VITE_BASE_URL, VITE_API_SEARCH, VITE_API_KEY } = import.meta.env;

const { getFormatedData, sizeToRange } = Formatter;

const Home = (): React.ReactElement => {
  const [range, setRange] = useState(sizeToRange(window.innerWidth));
  const [pagination, setPagination] = useState<string>("10");
  const [search, setSearch] = useState<string>("");
  const deferredQuery = useDeferredValue(search);

  const url: string = `${VITE_BASE_URL}${VITE_API_SEARCH}}`
    .replace("{key}", VITE_API_KEY)
    .replace("{search}", deferredQuery)
    .replace("{pagination}", pagination);

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

  const debouncedPagination = useDebounce(
    ({ target: { value } }: OnChangeType) => {
      setPagination(value);
    },
    300,
    []
  );

  const handleWindowResize = useThrottle(
    () => {
      setRange(sizeToRange(window.innerWidth));
    },
    100,
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
      debouncedPagination.cancel();
    };
  });

  useEffect(() => {
    window.addEventListener(Events.RESIZE, handleWindowResize);

    return () => {
      window.removeEventListener(Events.RESIZE, handleWindowResize);
    };
  }, []);

  return (
    <Container>
      <Form
        handleSearch={debouncedSearch}
        handlePagination={debouncedPagination}
      />
      <p>{range}</p>
      <MemoizedList
        isShownNoFoundMessage={isShownNoFoundMessage}
        isLoading={isLoading}
        data={latestData}
      />
    </Container>
  );
};

export default Home;

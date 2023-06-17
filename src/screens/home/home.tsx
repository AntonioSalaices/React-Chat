import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import Search from "@Components/composed/Search";
import Pagination from "@Components/composed/Pagination";
import MemoizedList from "@Components/composed/List";
import Formatter from "@Utils/formatter";

import useFetch from "@Hooks/useFetch/useFetch";
import useThrottle from "@Hooks/useThrottle/useThrottle";
import { Events } from "@Constans/eventConstants";
import useDebounce from "@Hooks/useDebounce/useDebounce";
import { OnChangeType } from "@Utils/types";

const { getFormatedData, sizeToRange } = Formatter;

const { VITE_BASE_URL, VITE_API_SEARCH, VITE_API_KEY } = import.meta.env;

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

  //We can reuse this function for another inputs [CURRYING]
  // const handleCurried = (fieldName: string) => {
  //   return ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
  //     setValues((prev: FormState) => ({
  //       ...prev,
  //       [fieldName]: value,
  //     }));
  //   };
  // };

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
    <>
      <div className="container">
        <Search handleChange={debouncedSearch} />
        <Pagination handleChange={debouncedPagination} />
      </div>
      <div className="container">
        <p>{range}</p>
        <MemoizedList
          isShownNoFoundMessage={isShownNoFoundMessage}
          isLoading={isLoading}
          data={latestData}
        />
      </div>
    </>
  );
};

export default Home;

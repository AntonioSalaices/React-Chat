import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

import Message from "@Components/basics/Message";
import Spinner from "@Components/basics/Spinner";
import Search from "@Components/composed/Search";
import Pagination from "@Components/composed/Pagination";
import MemoizedList from "@Components/composed/List";
import { PURPLE } from "@Utils/colors";
import Formatter from "@Utils/formatter";

import useFetch from "@Hooks/useFetch/useFetch";
import useThrottle from "@Hooks/useThrottle/useThrottle";
import { Events } from "@Constans/eventConstants";

const { getFormatedData, sizeToRange } = Formatter;

const { VITE_BASE_URL, VITE_API_SEARCH, VITE_API_KEY } = import.meta.env;

const Home = (): React.ReactElement => {
  const [range, setRange] = useState(sizeToRange(window.innerWidth));
  const [pagination, setPagination] = useState<string>("10");
  const [search, setSearch] = useState<string>("");
  const deferredQuery = useDeferredValue(search);

  const areDifferentValues: boolean = search !== deferredQuery;

  const url: string = `${VITE_BASE_URL}${VITE_API_SEARCH}}`
    .replace("{key}", VITE_API_KEY)
    .replace("{search}", deferredQuery)
    .replace("{pagination}", pagination);

  const { data, loading } = useFetch(url);
  const latestData = useMemo(() => getFormatedData(data), [data]);

  const hasData: boolean = data?.length > 0;
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

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  };

  const handlePagination = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setPagination(value);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  const debouncedPagination = useMemo(() => {
    return debounce(handlePagination, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
      debouncedPagination.cancel();
    };
  });

  const handleWindowResize = useThrottle(
    () => {
      setRange(sizeToRange(window.innerWidth));
    },
    100,
    []
  );

  useEffect(() => {
    window.addEventListener(Events.RESIZE, handleWindowResize);

    return () => {
      window.removeEventListener(Events.RESIZE, handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="main">
        <Search handleChange={debouncedSearch} />
        <Pagination handleChange={debouncedPagination} />
      </div>
      <div className="container">
        <p>{range}</p>
        {loading ? <Spinner singleColor={PURPLE} size={50} /> : <></>}
        {hasData ? (
          <MemoizedList isStale={areDifferentValues} data={latestData} />
        ) : (
          <></>
        )}
        {isShownNoFoundMessage ? (
          <Message message={`No gifs found for ${search}`} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Home;

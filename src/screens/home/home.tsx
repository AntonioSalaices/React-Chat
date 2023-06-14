import React, { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

import Message from "@Components/basics/Message";
import Spinner from "@Components/basics/Spinner";
import Search from "@Components/composed/Search";
import Pagination from "@Components/composed/Pagination";
import MemoizedList from "@Components/composed/List";

import { DOTENV } from "@Constans/constants";
import { PURPLE } from "@Utils/colors";
import Formatter from "@Utils/formatter";

import useFetch from "@Hooks/useFetch/useFetch";

const { getFormatedData } = Formatter;

const Home = (): React.ReactElement => {
  const [pagination, setPagination] = useState<string>("10");
  const [search, setSearch] = useState<string>("");

  const url: string = `${DOTENV.API_URL}${DOTENV.API_SEARCH}}`
    .replace("{key}", DOTENV.API_KEY)
    .replace("{search}", search)
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
  console.log("ENV", import.meta.env.__NAME__);
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

  return (
    <>
      <div className="main">
        <Search handleChange={debouncedSearch} />
        <Pagination handleChange={debouncedPagination} />
      </div>
      <div className="container">
        {/* <svg>
            <circle cx="50" cy="50" r="40" stroke="red" fill="yellow" />
          </svg> */}
        {loading ? <Spinner singleColor={PURPLE} /> : <></>}
        {hasData ? <MemoizedList data={latestData} /> : <></>}
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

import React, { memo } from "react";
import { isEqual } from "lodash";
import Card from "@Components/basics/Card/Card";
import Container from "@Components/basics/Container/Container";
import { ListProps } from "./List.props";

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <Container>
      {data?.map(({ id, ...rest }) => (
        <Card key={id} {...rest} />
      ))}
    </Container>
  );
};

export const MemoizedList = memo(List, (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps);
});

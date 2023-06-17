import React, { memo } from "react";
import { isEqual } from "lodash";
import Card from "@Components/basics/Card/Card";
import Container from "@Components/basics/Container/Container";
import { ListProps } from "./List.props";
import withLoadingLogic from "@Hocs/withLoadingLogic/withLoadingLogic";
import { GenericObject } from "@Utils/types";
import { CommonProps } from "@Hocs/withLoadingLogic/withLoadingLogic.props";

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <Container>
      {data?.map(({ id, ...rest }) => (
        <Card key={id} {...rest} />
      ))}
    </Container>
  );
};

const ImprovementList = withLoadingLogic<CommonProps<GenericObject>>(List);

const MemoizedList = memo(ImprovementList, (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps);
});

export default MemoizedList;

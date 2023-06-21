import React, { memo } from 'react';
import { isEqual } from 'lodash';
import Card from '@Components/basics/Card/Card';
import { ListProps } from './List.props';
import withLoadingLogic from '@Hocs/withLoadingLogic/withLoadingLogic';

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div className="row gap-2 justify-center">
      {data?.map(({ id, ...rest }) => (
        <Card key={id} {...rest} />
      ))}
    </div>
  );
};

const ListWithLoading = withLoadingLogic(List);

const MemoizedList = memo(ListWithLoading, (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps);
});

export default MemoizedList;

import React, { memo } from 'react';
import { isEqual } from 'lodash';
import Card from '@Components/basics/Card/Card';
import Container from '@Components/basics/Container/Container';
import {ListProps} from './List.props';

const List: React.FC<ListProps> = ({data}) => {

  return (
    <Container>
        {data?.map((item) => (
            <Card
              key={item.id}
              {...item}
            />
        ))}
    </Container>
  )
}

export const MemoizedList = memo(List, (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps);
});
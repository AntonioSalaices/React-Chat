import React from 'react';
import {CardMemo} from '@Components/basics/Card/Card';
import Container from '@Components/basics/Container/Container';
import {ListProps} from './List.props';

const List: React.FC<ListProps> = ({data}) => {

  return (
    <Container>
        {data?.map((item) => (
            <CardMemo
              key={item.id}
              {...item}
            />
        ))}
    </Container>
  )
}

export default List;
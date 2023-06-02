import React from 'react';
import {CardMemo} from '../../basics/Card/Card';
import {ListProps} from './List.props';
import Container from 'components/basics/Container/Container';

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
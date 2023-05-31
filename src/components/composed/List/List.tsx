import React from 'react';
import Card from '../../basics/Card/Card';
import {ListProps} from './List.props';

const List: React.FC<ListProps> = ({data}) => {

  return (
    <React.Fragment>
        {data?.map((item) => (
            <Card
              key={item.id}
              imgSource={item.url}
            />
        ))}
    </React.Fragment>
  )
}

export default List;
import { memo } from 'react';
import { isEqual } from 'lodash';
import { Card } from '@Components/Core';
import { ListProps } from './List.props';
import withLoadingLogic from '../../../Hocs/withLoadingLogic/withLoadingLogic';

export function List<TItem>(props: ListProps<TItem>) {
  const { data } = props;

  return (
    <ul className="row gap-2 justify-center">
      {data?.map(({ id, ...rest }) => (
        <li key={id}>
          <Card {...rest} />
        </li>
      ))}
    </ul>
  );
}

const ListWithLoading = withLoadingLogic(List);

const MemoizedList = memo(ListWithLoading, (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps);
});

export { MemoizedList };

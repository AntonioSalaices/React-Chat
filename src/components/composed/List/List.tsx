import { MemoExoticComponent, memo } from 'react';
import { isEqual } from 'lodash';
import { ListProps } from './List.props';
import withLoadingLogic from '../../../Hocs/withLoadingLogic/withLoadingLogic';

function GenericList<T>(props: ListProps<T>) {
  const { data, renderItem } = props;

  return <div className="row gap-2 justify-center">{data?.map((d: T, k: number) => renderItem(d, k))}</div>;
}

const ListWithLoading = withLoadingLogic(GenericList);

const List: MemoExoticComponent<T> = memo(ListWithLoading, (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps);
});

export { List };

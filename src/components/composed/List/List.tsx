import Card from '../../basics/Card/Card';
import {ListProps} from './List.props';

const List: React.FC<ListProps> = ({data}) => {

  return (
    <div>
        {data?.map((gif) => (
            <Card
              key={gif.id}
              imgSource={gif.images.fixed_height.url}
            />
        ))}
    </div>
  )
}

export default List;
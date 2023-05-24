import Card from '../../basics/Card/Card';
import {ListProps} from './List.props';

const List: React.FC<ListProps> = ({data}) => {

  return (
    <div className='grid-row'>
        {data?.map((gift) => (
            <Card
              key={gift.id}
              imgSource={gift.images.fixed_height.url}
            />
        ))}
    </div>
  )
}

export default List;
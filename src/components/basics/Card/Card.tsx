import {CardProps} from '../Card/Card.props';

const Card: React.FC<CardProps> = ({imgSource}) => {

  return (
    <div className='card'>
        <img src={imgSource} />
    </div>
  );
}
export default Card;
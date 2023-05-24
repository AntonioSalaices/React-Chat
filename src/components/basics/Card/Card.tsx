import {CardProps} from '../Card/Card.props';
import '../../../styles/Card.css';

const Card: React.FC<CardProps> = ({imgSource}) => {

  return (
    <div className='card'>
        <img src={imgSource} />
    </div>
  );
}
export default Card;
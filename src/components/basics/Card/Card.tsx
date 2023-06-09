import {CardProps} from '../Card/Card.props';

const Card: React.FC<CardProps> = ({url, title, rating}) => {

  return (
    <div className="card">
      <img src={url} />
      <h5>{title}</h5>
      <p>Rating: {rating}</p>
    </div>
  );
}
export default Card;
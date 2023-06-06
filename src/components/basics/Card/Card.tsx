import {CardProps} from '../Card/Card.props';

const Card: React.FC<CardProps> = ({url, title, date, rating}) => {

  return (
    <div className="card">
      <img  className="card-img-top" src={url} />
      <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Rating: {rating}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{date.toString()}</small>
      </div>
    </div>
  );
}
export default Card;
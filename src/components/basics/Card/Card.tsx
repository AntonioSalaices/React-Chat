import { CardProps } from "../Card/Card.props";

const Card: React.FC<CardProps> = ({ url }) => {
  return (
    <div className="col-12-xs col-5-sm col-3-xl">
      <div className="card">
        <img src={url} />
      </div>
    </div>
  );
};
export default Card;

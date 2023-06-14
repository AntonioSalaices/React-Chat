import { CardProps } from "../Card/Card.props";

const Card: React.FC<CardProps> = ({ url }) => {
  return (
    <div className="card">
      <img src={url} />
    </div>
  );
};
export default Card;

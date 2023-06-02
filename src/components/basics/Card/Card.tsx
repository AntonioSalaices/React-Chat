import { memo } from 'react';
import {CardProps} from '../Card/Card.props';
import Formatter from '@Utils/formatter';

const { getRelativeTime } = Formatter;

const Card: React.FC<CardProps> = ({url, title, date, rating}) => {

  return (
    <div className="card">
      <img  className="card-img-top" src={url} />
      <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Rating: {rating}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{getRelativeTime(date.getTime())}</small>
      </div>
    </div>
  );
}
export const CardMemo = memo(Card);
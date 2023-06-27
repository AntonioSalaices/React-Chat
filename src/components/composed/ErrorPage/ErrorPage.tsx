import { ErrorPageProps } from './ErrorPage.props';
import { translate } from '@Translate/translate';

const ErrorPage: React.FC<ErrorPageProps> = ({ error, tx, txOptions, text, subTx, subText }) => {
  const i18Text = tx && translate(tx, txOptions);
  const content = i18Text || text;
  const i18SubText = subTx && translate(subTx, txOptions);
  const subContent = i18SubText || subText;

  return (
    <div className="container">
      <h1>{content}</h1>
      <span data-testid="error-message">{error ? error.message : subContent}</span>
    </div>
  );
};

export { ErrorPage };

import { translate } from '@Translate/translate';
import { Container } from '@Components/Core';
import { NotFoundProps } from './NotFound.props';

const NotFound: React.FC<NotFoundProps> = ({ tx, txOptions, text }) => {
  const i18Text = tx && translate(tx, txOptions);
  const content = i18Text || text;

  return (
    <Container>
      <div className="row justify-center align-center">
        <h4 className="text-primary font-bold font-xxl">{content}</h4>
      </div>
    </Container>
  );
};

export { NotFound };

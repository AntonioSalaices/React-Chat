import { translate } from '../../../i18n';
import { FooterProps } from './Footer.props';

const Footer: React.FC<FooterProps> = ({ tx, txOptions, text }) => {
  const i18Text = tx && translate(tx, txOptions);
  const content = i18Text || text;

  return (
    <footer className="bg-secondary-light-7 pt-3 pb-3 mt-5">
      <div className="container">{content}</div>
    </footer>
  );
};
export default Footer;

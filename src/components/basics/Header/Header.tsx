import { translate } from "../../../i18n"

const Header: React.FC = () => {

  return (
    <nav>
      <h1>{translate('header.title')}</h1>
    </nav>
  );
}
export default Header;
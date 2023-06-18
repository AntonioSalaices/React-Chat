import { Theme } from "@Constans/Theme";
import { translate } from "../../../i18n";
import { HeaderProps } from "./Header.props";

const Header: React.FC<HeaderProps> = ({ onChange, theme }) => {
  const selectedTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

  return (
    <nav className="navbar-primary text-white mb-4">
      <div className="container">
        <h2 className="site-title">{translate("header.title")}</h2>
        <button
          className="btn-light text-dark"
          onClick={() => onChange(selectedTheme)}
        >
          {theme}
        </button>
      </div>
    </nav>
  );
};
export default Header;

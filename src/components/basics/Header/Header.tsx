import { Theme } from "@Constans/Theme";
import { translate } from "../../../i18n";
import { HeaderProps } from "./Header.props";

const Header: React.FC<HeaderProps> = ({ onChange, theme, icon }) => {
  const selectedTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

  return (
    <nav className="navbar-primary text-white mb-4 justify-between">
      <div className="container">
        <h2 className="site-title">{translate("header.title")}</h2>
        <ul className="display-f justify-center align-center gap-2">
          <li>{icon}</li>
          <li>
            <button
              className="btn-light text-dark font-md"
              onClick={() => onChange(selectedTheme)}
            >
              {theme}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;

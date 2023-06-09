import { Theme } from "@Constans/Theme";
import { translate } from "../../../i18n";
import { HeaderProps } from "./Header.props";

const Header: React.FC<HeaderProps> = ({ onChange, theme }) => {
  const selectedTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

  return (
    <nav className="header">
      <h1>{translate("header.title")}</h1>
      <button onClick={() => onChange(selectedTheme)}>{theme}</button>
    </nav>
  );
};
export default Header;

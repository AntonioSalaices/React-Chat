import Header from "@Components/basics/Header/Header";
import { LayoutProps } from "./Layout.props";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { Theme } from "@Constans/Theme";
import Footer from "@Components/basics/Footer";
import Section from "../Section";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleOnChange = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    localStorage.setItem(Theme.THEME, selectedTheme);
  };

  return (
    <div className={theme}>
      <Header theme={theme} onChange={handleOnChange} />
      {children}
      <Section />
      <Footer />
    </div>
  );
};

export default Layout;

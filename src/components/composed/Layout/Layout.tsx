import { useContext } from 'react';

import Header from '@Components/basics/Header/Header';
import Footer from '@Components/basics/Footer';
import Section from '../Section';

import { ThemeContext } from 'context/ThemeContext';
import { Theme } from '@Constans/Theme';
import { LayoutProps } from './Layout.props';

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
      <Footer tx="footer.message" />
    </div>
  );
};

export default Layout;

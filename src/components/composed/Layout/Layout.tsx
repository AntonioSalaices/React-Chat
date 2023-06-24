import { useContext } from 'react';

import Header from '@Components/composed/Header/Header';
import Footer from '@Components/composed/Footer';
import Section from '../Section';

import { ThemeContext } from 'context/ThemeContext';
import { Theme } from '@Constans/Theme';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleOnChange = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    localStorage.setItem(Theme.THEME, selectedTheme);
  };

  return (
    <div className={theme}>
      <Header theme={theme} onChange={handleOnChange} />
      <Outlet />
      <Section />
      <Footer tx="footer.message" />
    </div>
  );
};

export default Layout;

import { useContext, useState } from 'react';

import { Section, Header, Footer } from '@Components/Core';

import { ThemeContext } from 'context/ThemeContext';
import { Theme } from '@Constans/Theme';
import { Outlet } from 'react-router-dom';
import { AuthModal } from 'screens/auth/auth';

const Layout: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isShownLoginModal, setIsShownLoginModal] = useState<boolean>(false);

  const handleOnChange = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    localStorage.setItem(Theme.THEME, selectedTheme);
  };

  const onClickLoginNavigation = () => {
    setIsShownLoginModal((prev) => !prev);
  };

  return (
    <div className={theme}>
      <Header onClickLoginNavigation={onClickLoginNavigation} theme={theme} onChange={handleOnChange} />
      <Outlet />
      <Section />
      <Footer tx="footer.message" />
      <AuthModal isShown={isShownLoginModal} />
    </div>
  );
};

export { Layout };

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

  return (
    <div className={theme}>
      <Header
        onClickLoginNavigation={() => setIsShownLoginModal(!isShownLoginModal)}
        theme={theme}
        onChange={handleOnChange}
      />
      <Outlet />
      <Section />
      <Footer tx="footer.message" />
      <AuthModal onClose={() => setIsShownLoginModal(!isShownLoginModal)} isShown={isShownLoginModal} />
    </div>
  );
};

export { Layout };

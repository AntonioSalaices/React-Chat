import { useContext, useEffect, useState } from 'react';

import { Section, Header, Footer } from '@Components/Core';

import { Outlet } from 'react-router-dom';
import { AuthModal } from 'screens/auth/auth';
import { AuthContext } from 'auth/AuthContext';

const Layout: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const [isShownLoginModal, setIsShownLoginModal] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      setIsShownLoginModal(false);
    }
  }, [user]);

  return (
    <div>
      <Header
        onClickLoginNavigation={() => setIsShownLoginModal(!isShownLoginModal)}
        logged={!!user}
        onClickLogout={logout}
      />
      <Outlet />
      <Section />
      <Footer tx="footer.message" />
      <AuthModal onClose={() => setIsShownLoginModal(!isShownLoginModal)} isShown={isShownLoginModal} />
    </div>
  );
};

export { Layout };

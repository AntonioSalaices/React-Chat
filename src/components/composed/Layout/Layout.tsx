import { useContext, useEffect, useState } from 'react';

import { Section, Header, Footer } from '@Components/Core';

import { Outlet } from 'react-router-dom';
import { AuthModal } from 'screens/auth/auth';
import { AuthContext } from 'auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [isShownLoginModal, setIsShownLoginModal] = useState<boolean>(false);

  const logged = !!user;

  useEffect(() => {
    if (user) {
      setIsShownLoginModal(false);
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div>
      <Header
        onClickLoginNavigation={() => setIsShownLoginModal(!isShownLoginModal)}
        logged={logged}
        onClickLogout={logout}
      />
      <Outlet />
      {!logged && <Footer tx="footer.message" />}
      <AuthModal onClose={() => setIsShownLoginModal(!isShownLoginModal)} isShown={isShownLoginModal} />
    </div>
  );
};

export { Layout };

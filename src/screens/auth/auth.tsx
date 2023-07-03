import AuthForm from './AuthForm';
import { Modal } from '@Components/Core';
import usePortal from '@Hooks/usePortal/usePortal';
import { Func } from '@Utils/types';

interface AuthModalProps {
  isShown: boolean;
  onClose: Func;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isShown, onClose }) => {
  const Portal = usePortal(document.getElementById('portal-root') as HTMLElement);

  return (
    <>
      {isShown && (
        <Portal>
          <Modal onClose={onClose}>
            <AuthForm />
          </Modal>
        </Portal>
      )}
    </>
  );
};
AuthModal.displayName = 'AuthModal';

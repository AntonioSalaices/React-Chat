import usePortal from '@Hooks/usePortal/usePortal';
import styles from './auth.module.scss';
import classNames from 'classnames';

interface AuthModalProps {
  isShown: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isShown }) => {
  const Portal = usePortal(document.getElementById('portal-root') as HTMLElement);

  const modalBackground = classNames(styles.modalBackground);
  const modalPosition = classNames(styles.centered);
  const modalStyle = classNames(styles.modal);
  return (
    <>
      {isShown && (
        <Portal>
          <div className={modalBackground}>
            <div className={modalPosition}>
              <div className={modalStyle}></div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
AuthModal.displayName = 'AuthModal';

import { AppIcon, AppIcons } from '@Constants/Core';
import { ModalProps } from './Modal.props';

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="modalBackground">
      <div className="centered">
        <div className="modal-white">
          <div className="modal-close" onClick={onClose}>
            {AppIcons[AppIcon.Close]}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };

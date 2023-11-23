import { AppIcon, AppIcons, OnClickType } from '@Constants/Core';
import classNames from 'classnames';
import style from './ChatIcon.module.scss';
interface ChatIconProps {
  onClickChatIcon: OnClickType<HTMLDivElement>;
}

const ChatIcon: React.FC<ChatIconProps> = ({ onClickChatIcon }) => {
  const chatContainerStyle = classNames(style.chatContainer);

  return (
    <button onClick={onClickChatIcon} className={chatContainerStyle}>
      {AppIcons[AppIcon.Chat]}
    </button>
  );
};

export default ChatIcon;

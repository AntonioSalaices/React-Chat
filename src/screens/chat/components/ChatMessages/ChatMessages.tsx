import { List } from '@Components/Core';
import classNames from 'classnames';
import style from './ChatMessages.module.scss';
interface ChatMessagesProps {
  data: string[];
}

const renderMessages = (message: string) => {
  console.log('message', message);
  return <div className="row btn-light text-dark font-md">{message}</div>;
};

const ChatMessages: React.FC<ChatMessagesProps> = ({ data }) => {
  const chatContainerStyle = classNames(' mr-1 ml-1', style.chatMessagesContainer);
  return (
    <div className={chatContainerStyle}>
      <div className="row">{data.map((item) => renderMessages(item))}</div>
    </div>
  );
};

export default ChatMessages;

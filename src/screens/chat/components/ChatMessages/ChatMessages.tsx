import classNames from 'classnames';
import style from './ChatMessages.module.scss';
import { useEffect, useRef } from 'react';
interface ChatMessagesProps {
  data: string[];
}

const renderMessages = (message: string, index: number) => {
  return (
    <p key={index.toString()} className="row btn-complement-secondary text-dark font-md m-1">
      {message}
    </p>
  );
};

const ChatMessages: React.FC<ChatMessagesProps> = ({ data }) => {
  const messagesEndRef = useRef(null);
  const chatContainerStyle = classNames('mr-1 ml-1', style.chatMessagesContainer);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  return (
    <div className={chatContainerStyle}>
      <div className="col">{data.map((item, index) => renderMessages(item, index))}</div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;

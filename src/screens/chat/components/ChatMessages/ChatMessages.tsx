import classNames from 'classnames';
import style from './ChatMessages.module.scss';
import { useEffect } from 'react';
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
  const chatContainerStyle = classNames('mr-1 ml-1', style.chatMessagesContainer);

  const scrollToBottom = () => {
    const ref = document.getElementById('ref');

    setTimeout(() => {
      ref.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  return (
    <div onClick={() => scrollToBottom()} className={chatContainerStyle}>
      <div className="col">{data.map((item, index) => renderMessages(item, index))}</div>
      <div id="ref" />
    </div>
  );
};

export default ChatMessages;

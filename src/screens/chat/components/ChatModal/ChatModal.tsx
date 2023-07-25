import classNames from 'classnames';
import style from './ChatModal.module.scss';
import ChatInput from '../ChatInput/ChatInput';
import { useState } from 'react';
import ChatMessages from '../ChatMessages/ChatMessages';

interface ChatModalProps {}

const ChatModal: React.FC<ChatModalProps> = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const chatModalContainer = classNames(style.chatModalContainer);

  const handleNewMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <div className={chatModalContainer}>
      <ChatMessages data={messages} />
      <ChatInput onSubmitMessage={handleNewMessage} />
    </div>
  );
};

export default ChatModal;

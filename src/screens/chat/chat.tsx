import { Container } from '@Components/Core';
import ChatIcon from './components/ChatIcon/chatIcon';
import { useState } from 'react';
import ChatModal from './components/ChatModal/ChatModal';

export const Chat: React.FC = () => {
  const [isOpenModalChat, setIsOpenModalChat] = useState<boolean>(false);

  return (
    <Container>
      <>{isOpenModalChat && <ChatModal />}</>
      <ChatIcon onClickChatIcon={() => setIsOpenModalChat((prev) => !prev)} />
    </Container>
  );
};

Chat.displayName = 'Chat';

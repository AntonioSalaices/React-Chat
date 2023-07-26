import { useState } from 'react';
import { Container } from '@Components/Core';
import ChatIcon from './components/ChatIcon/chatIcon';
import ChatModal from './components/ChatModal/ChatModal';
import useAudio from '@Hooks/useAudio/useAudio';
import notification from '../../assets/audios/notification.mp3';

export const Chat: React.FC = () => {
  const [playing, toggle] = useAudio(notification);
  const [isOpenModalChat, setIsOpenModalChat] = useState<boolean>(false);

  const onClickChatIcon = () => {
    setIsOpenModalChat((prev) => !prev);
    toggle();
  };

  return (
    <Container>
      <>{isOpenModalChat && <ChatModal />}</>
      <ChatIcon
        onClickChatIcon={() => {
          onClickChatIcon();
        }}
      />
    </Container>
  );
};

Chat.displayName = 'Chat';

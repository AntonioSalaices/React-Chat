import { FormField } from '@Components/Core';
import { HTMLType } from '@Constans/htmlConstants';
import { Func } from '@Utils/types';
import { useRef } from 'react';

interface ChatInputProps {
  onSubmitMessage: Func;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmitMessage }) => {
  const message = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message?.current?.value) {
      onSubmitMessage(message?.current?.value);
      event.target.reset();
    }
  };

  return (
    <form className="col" onSubmit={onSubmit}>
      <div className="col justify-center align-center mr-2 ml-2">
        <FormField ref={message} type={HTMLType.text} testID="chatMessageInput" />
      </div>
    </form>
  );
};

export default ChatInput;

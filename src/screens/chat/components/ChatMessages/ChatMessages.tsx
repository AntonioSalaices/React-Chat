import { List } from '@Components/Core';

interface ChatMessagesProps {
  data: string[];
}

const renderMessages = (message: string) => {
  console.log('message', message);
  return <div className="col btn-light text-dark font-md ">{message}</div>;
};

const ChatMessages: React.FC<ChatMessagesProps> = ({ data }) => {
  return (
    <div className="row justify-center align-center">
      <List renderItem={renderMessages} data={data} />
    </div>
  );
};

export default ChatMessages;

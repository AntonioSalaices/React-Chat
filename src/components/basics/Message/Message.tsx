import { MessageProps } from "./Message.props";

const Message: React.FC<MessageProps> = ({message = ''}) => {
  return (
    <div>
        <p>{message}</p>
    </div>
  );
}
export default Message;
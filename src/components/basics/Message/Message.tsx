import React from "react";
import { MessageProps } from "./Message.props";

const Message: React.FC<MessageProps> = ({ message = "" }) => {
  return <div>{React.createElement("p", null, message)}</div>;
};
export default Message;

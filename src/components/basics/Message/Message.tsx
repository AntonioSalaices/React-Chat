import React from "react";
import { MessageProps } from "./Message.props";
import { translate } from "@Translate/translate";

const Message: React.FC<MessageProps> = ({ tx, txOptions, text = "" }) => {
  const i18Text = tx && translate(tx, txOptions);
  const content = i18Text || text;

  return (
    <div>
      <h1 className="text-primary font-bold font-size-lg">{content}</h1>
    </div>
  );
};
export default Message;

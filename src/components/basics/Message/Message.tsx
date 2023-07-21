import React from 'react';
import { MessageProps } from './Message.props';
import { translate } from '@Translate/translate';
import classNames from 'classnames';

const Message: React.FC<MessageProps> = ({ tx, txOptions, text = '', isError }) => {
  const i18Text = tx && translate(tx, txOptions);
  const content = i18Text || text;

  const messageContainerStyle = classNames('bg-primary-light-7 p-2 justify-center br', {
    ['bg-danger-light-7']: isError,
  });

  const messageTextStyle = classNames('text-primary font-bold font-size-lg', {
    ['text-danger font-bold font-size-lg']: isError,
  });

  return (
    <div className={messageContainerStyle}>
      <h1 data-testid="messageTestId" className={messageTextStyle}>
        {content}
      </h1>
    </div>
  );
};
export { Message };

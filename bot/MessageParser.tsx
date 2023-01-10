import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const MessageParser = ({
  children,
  actions,
}: {
  children?: any;
  actions?: any;
}) => {
  const parse = (message: string) => {
    if (message.includes('안녕')) {
      console.log(message);
      return createChatBotMessage('안녕하세요.', {});
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {
            ...actions,
          },
        });
      })}
    </div>
  );
};

export default MessageParser;

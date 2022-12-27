// Config starter code
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage(`안녕하세요! 우원봇입니다. 현재 준비 중입니다.`, {
      widget: 'helloWorld',
    }),
  ],
};

export default config;

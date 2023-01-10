// Config starter code
import { createChatBotMessage } from 'react-chatbot-kit';
import BotChatMessage from '../components/BotChatMessage';

const config = {
  initialMessages: [
    createChatBotMessage(`안녕하세요👏👏 우원입니다. 준비중입니다.`, {
      loading: true,
    }),
  ],
  botName: '우원',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#5BC0F8',
    },
    chatButton: {
      backgroundColor: '#FFC93C',
    },
    userMessageBox: {
      backgroundColor: '#FFC93C',
    },
    userMessageText: {
      color: '#5BC0F8',
    },
  },
  customComponents: {
    botAvatar: () => (
      <img
        src="https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/9745aadd-c575-44d0-ac20-941ee25c9f00/public"
        alt=""
      ></img>
    ),
    userAvatar: () => (
      <img
        src="https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/208166dd-613d-430e-1046-7b908069a300/public"
        alt=""
      ></img>
    ),
  },
};

export default config;

// Config starter code
import { createChatBotMessage } from 'react-chatbot-kit';
import MyCustomBotChatMessage from '../components/MyCustomBotChatMessage';
import MyCustomUserChatMessage from '../components/MyCustomUserChatMessage';

const config = {
  initialMessages: [
    createChatBotMessage(`안녕하세요👏👏 우원입니다.`, {
      loading: true,
    }),
  ],
  botName: '우원',
  customStyles: {
    botMessageBox: {
      color: '#000000',
      backgroundColor: '#000000',
    },
    chatButton: {
      color: '#000000',
      backgroundColor: '#000000',
    },
    chatInput: {
      color: '#000000',
      backgroundColor: '#000000',
    },
    userMessageBox: {
      color: '#000000',
      backgroundColor: '#000000',
    },
    userMessageText: {
      color: '#000000',
    },
  },
  customComponents: {
    header: () => (
      <div className="flex justify-center items-center py-5 bg-gray-900">
        저와 함께 대화해요
      </div>
    ),
    botChatMessage: (props: { message: string }) => (
      <MyCustomBotChatMessage {...props} />
    ),
    botAvatar: () => (
      <div className="h-full flex items-center" style={{ minWidth: '50px' }}>
        <img
          className="rounded-full"
          src="https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/9745aadd-c575-44d0-ac20-941ee25c9f00/public"
          alt=""
        ></img>
      </div>
    ),
    userAvatar: () => (
      <div className="h-full flex items-center" style={{ minWidth: '50px' }}>
        <img
          className="rounded-full"
          src="https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/208166dd-613d-430e-1046-7b908069a300/public"
          alt=""
        ></img>
      </div>
    ),
    userChatMessage: (props: { message: string }) => (
      <MyCustomUserChatMessage {...props} />
    ),
  },
};

export default config;

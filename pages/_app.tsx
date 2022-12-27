import type { AppProps } from 'next/app';
import '../styles/carousel.css';
import '../styles/util.css';
import '../styles/globals.css';
//import '../styles/tailwind.css';
import '../styles/card.css';
import { MdxComponentsProvider } from '../context/mdxContext';
import 'prismjs/themes/prism-tomorrow.css';
import '../public/static/fonts/style.css';
import { MDXProvider } from '@mdx-js/react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from '../bot/config';
import MessageParser from '../bot/MessageParser';
import ActionProvider from '../bot/ActionProvider';
import 'react-chatbot-kit/build/main.css';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  });
  const [toggle, setToggle] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <MdxComponentsProvider>
        <MDXProvider>
          <Component {...pageProps} />
          <Toaster></Toaster>
          {toggle ? (
            <div className="z-30 sticky bottom-10 mr-10 flex justify-end items-center">
              <div className="flex flex-col">
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
                <div className="flex justify-end mt-5">
                  <Image
                    onClick={() => setToggle(!toggle)}
                    src={'/images/tb_logo_rounded.svg'}
                    className="cursor-pointer hover:opacity-90"
                    width={80}
                    height={70}
                  ></Image>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-bounce z-30 sticky bottom-10 mr-10 flex justify-end items-center">
              <div className="bg-white px-4 py-2">안녕하세요.</div>
              <Image
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer hover:opacity-90"
                src={'/images/tb_logo_rounded.svg'}
                width={80}
                height={70}
              ></Image>
            </div>
          )}
        </MDXProvider>
      </MdxComponentsProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

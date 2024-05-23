import type { AppProps } from 'next/app';
import '../styles/carousel.css';
import '../styles/util.css';
//import '../styles/globals.css';
import '../styles/tailwind.css';
import '../styles/card.css';
import { MdxComponentsProvider } from '../context/mdxContext';
import 'prismjs/themes/prism-tomorrow.css';
import '../public/static/fonts/style.css';
import { MDXProvider } from '@mdx-js/react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from '../bot/config';
import MessageParser from '../bot/MessageParser';
import ActionProvider from '../bot/ActionProvider';
import 'react-chatbot-kit/build/main.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  });

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const [toggle, setToggle] = useState(false);
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <MdxComponentsProvider>
          <MDXProvider>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
            <Component {...pageProps} />
            <Toaster />
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
                      src={'/images/tb_logo_abstract.png'}
                      className="cursor-pointer hover:opacity-90"
                      width={80}
                      height={70}
                      alt="logo"
                    ></Image>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-bounce z-30 sticky bottom-10 mr-10 flex justify-end items-center">
                <div className="bg-white dark:text-black px-4 py-2 mr-2 rounded-lg shadow-lg">
                  안녕하세요. 우원봇입니다.
                </div>
                <Image
                  onClick={() => setToggle(!toggle)}
                  className="cursor-pointer hover:opacity-90"
                  src={'/images/tb_logo_abstract.png'}
                  width={80}
                  height={70}
                  alt="logo"
                ></Image>
              </div>
            )}
          </MDXProvider>
        </MdxComponentsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;

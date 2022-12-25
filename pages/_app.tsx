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
import { useContext } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <MdxComponentsProvider>
        <MDXProvider>
          <Component {...pageProps} />
          <Toaster></Toaster>
        </MDXProvider>
      </MdxComponentsProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

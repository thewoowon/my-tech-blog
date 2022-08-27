import type { AppProps } from 'next/app';
import '../styles/carousel.css';
import '../styles/util.css';
import '../styles/globals.css';
import '../styles/card.css';
import { MdxComponentsProvider } from '../context/mdxContext';
import 'prismjs/themes/prism-tomorrow.css';
import '../public/static/fonts/style.css';
import { MDXProvider } from '@mdx-js/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <MdxComponentsProvider>
        <MDXProvider>
           <Component {...pageProps} />
        </MDXProvider>
      </MdxComponentsProvider>
  )
}

export default MyApp

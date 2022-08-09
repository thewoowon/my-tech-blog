import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/carousel.css';
import '../styles/util.css';
import { MdxComponentsProvider } from '../context/mdxContext';
import 'prismjs/themes/prism-tomorrow.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MdxComponentsProvider>
      <Component {...pageProps} />
    </MdxComponentsProvider>
  )
}

export default MyApp

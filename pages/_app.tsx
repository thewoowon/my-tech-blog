import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/carousel.css';
import { MdxComponentsProvider } from '../context/mdxContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MdxComponentsProvider>
      <Component {...pageProps} />
    </MdxComponentsProvider>
  )
}

export default MyApp

import '../styles/globals.scss'
import QuizContextProvider from '../scripts/context';

function MyApp({ Component, pageProps }) {
  return <QuizContextProvider><Component {...pageProps} /></QuizContextProvider>
}

export default MyApp

import '../styles/globals.css'
import {ChatProvider} from '../context/context'

import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {
  return (
    <ChatProvider>
      <Component {...pageProps} />
    </ChatProvider> 
  )

}

export default MyApp

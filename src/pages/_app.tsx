import { UserProvider } from '@/@core/context/UserContext'
import store from '@/@core/store'
import '@/@core/styles/globals.css'
import { AppTheme } from '@/@core/theme'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import { Provider } from 'react-redux'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
      </Head>
      <UserProvider>
        <AppTheme>
          <main className={`${roboto.className}`}>
            <Component {...pageProps} />
          </main>
        </AppTheme>
      </UserProvider>
    </Provider>
  )
}

// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import FallbackSpinner from '@/@core/components/spinner'
import useCheckAuth from '@/@core/hooks/useCheckAuth'
import Head from 'next/head'
import { useRouter } from 'next/router'

export const getHomeRoute = (route: string) => {
  return route
}

const Home = () => {
  //** Hooks */
  const router = useRouter()
  const { checkAuth } = useCheckAuth()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    const timeoutId = setTimeout(() => {
      checkAuth()
    }, 1000)

    return () => clearTimeout(timeoutId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return (
    <>
      <Head>
        <title>Ray Fullstack Test</title>
        <meta name='description' content='Ray Fullstack Test Descripción' />
      </Head>
      <FallbackSpinner />
    </>
  )
}

export default Home

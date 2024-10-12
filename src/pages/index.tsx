// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import FallbackSpinner from '@/@core/components/spinner'
import Head from 'next/head'
import { useRouter } from 'next/router'

// ** Spinner Import

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (route: string) => {
  return route
}

const Home = () => {
  //** Hooks */
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    const timeoutId = setTimeout(() => {
      /* if (HOME_ROUTE) {
        router.replace(HOME_ROUTE.toString())
        } */
      router.replace('/home')
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

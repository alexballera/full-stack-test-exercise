import { Grid2 } from '@mui/material'
import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
  description: string
}

const LayoutPage = (props: Props) => {
  const { children, title, description } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Grid2
        container
        spacing={0}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ minHeight: '100vh', p: 4, backgroundColor: 'primary.dark' }}
      >
        <Grid2 size={{ xs: 12, sm: 8, md: 4 }}>{children}</Grid2>
      </Grid2>
    </>
  )
}
export default LayoutPage

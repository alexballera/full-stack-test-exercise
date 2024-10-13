import { Grid2, Typography } from '@mui/material'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ray Home Fullstack Test</title>
        <meta name='description' content='Ray Home Fullstack Test Descripción' />
      </Head>
      <Grid2
        container
        spacing={0}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ minHeight: '100vh', p: 4, backgroundColor: 'primary.dark' }}
      >
        <Typography variant='h1'>HomePage</Typography>
      </Grid2>
    </>
  )
}

import { Grid2, Typography } from '@mui/material'
import Head from 'next/head'
import { redirect } from 'next/navigation'

export default function DashboardPage() {
  // Logic to determine if a redirect is needed
  const accessDenied = false
  if (accessDenied) {
    redirect('/login')
  }

  // Define other routes and logic

  return (
    <>
      <Head>
        <title>Ray DashboardPage Fullstack Test</title>
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
        <Typography variant='h1'>DashboardPage</Typography>
      </Grid2>
    </>
  )
}

import LayoutPage from '@/@core/components/layouts/LayoutPage'
import { Typography } from '@mui/material'
import { redirect } from 'next/navigation'

export default function DashboardPage() {
  // Logic to determine if a redirect is needed
  const accessDenied = false
  if (accessDenied) {
    redirect('/login')
  }

  // Define other routes and logic

  return (
    <LayoutPage
      title='Ray DashboardPage Fullstack Test'
      description='Ray DashboardPage Fullstack Test Descripción'
    >
      <Typography variant='h1'>DashboardPage</Typography>
    </LayoutPage>
  )
}

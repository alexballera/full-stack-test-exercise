import LayoutPage from '@/@core/components/layouts/LayoutPage'
import useCheckAuth from '@/@core/hooks/useCheckAuth'
import { Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { checkAuth } = useCheckAuth()

  useEffect(() => {
    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutPage
      title='Ray DashboardPage Fullstack Test'
      description='Ray DashboardPage Fullstack Test Descripción'
      size={{ xs: 12, sm: 8 }}
    >
      <Card>
        <CardMedia
          component='img'
          height='200'
          image='/images/RAY-Brand-Black.png'
          alt='Ray Brand'
          sx={{ mt: 4 }}
        />
        <CardContent sx={{ px: 4 }}>
          <Grid2 size={{ xs: 12 }}>
            <Typography variant='h2'>Página pública</Typography>
          </Grid2>
        </CardContent>
      </Card>
    </LayoutPage>
  )
}

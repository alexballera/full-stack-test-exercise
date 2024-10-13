import LayoutPage from '@/@core/components/layouts/LayoutPage'
import { Card, CardContent, CardHeader, Grid2, Typography } from '@mui/material'
import Link from 'next/link'

export default function HomePage() {
  return (
    <LayoutPage
      title='Ray Home Fullstack Test'
      description='Ray Home Fullstack Test Descripción'
      size={{ xs: 12, sm: 8 }}
    >
      <Card>
        <CardHeader title='HomePage' sx={{ color: 'primary.dark', p: 4, pb: 0 }} />
        <CardContent sx={{ px: 4 }}>
          <Grid2 size={{ xs: 12 }}>
            <Typography variant='h2'>Página pública</Typography>
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center', mt: 5 }}>
            <Typography component='span' sx={{ mr: 1, color: 'primary.light' }}>
              ¿Ya tienes cuenta?
            </Typography>
            <Link href='/login'>Ingresa aquí</Link>

            <Typography component='span' sx={{ ml: 2, mr: 1, color: 'primary.light' }}>
              Si no tienes cuenta
            </Typography>
            <Link href='/register'>Regístrate aquí</Link>
          </Grid2>
        </CardContent>
      </Card>
    </LayoutPage>
  )
}

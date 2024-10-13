import LayoutPage from '@/@core/components/layouts/LayoutPage'
import { Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import Link from 'next/link'

export default function HomePage() {
  return (
    <LayoutPage
      title='Ray Home Fullstack Test'
      description='Ray Home Fullstack Test Descripción'
      size={{ xs: 12, sm: 8 }}
    >
      <Card className='animate__animated animate__fadeIn animate__faster'>
        <CardMedia
          component='img'
          height='200'
          image='/images/RAY-Brand-Red-01.svg'
          alt='Ray Brand'
          sx={{ mt: 4 }}
        />
        <CardContent sx={{ px: 4 }}>
          <Grid2 size={{ xs: 12 }}>
            <Typography variant='h2'>Home con información pública</Typography>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <Typography sx={{ mb: 2 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aut magni, illum
              numquam suscipit iste cum vitae enim dolorem id? Nemo sit ullam libero quod dolorem
              facere ducimus voluptatibus doloribus.
            </Typography>
            <Typography sx={{ my: 2 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aut magni, illum
              numquam suscipit iste cum vitae enim dolorem id? Nemo sit ullam libero quod dolorem
              facere ducimus voluptatibus doloribus.
            </Typography>
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

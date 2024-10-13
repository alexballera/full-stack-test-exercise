import LayoutPage from '@/@core/components/layouts/LayoutPage'
import useCheckAuth from '@/@core/hooks/useCheckAuth'
import { useDispatch, useSelector } from '@/@core/store'
import { startLogOut } from '@/@core/store/auth'
import LogoutOutlined from '@mui/icons-material/LogoutOutlined'
import { LoadingButton } from '@mui/lab'
import { Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { checkAuth } = useCheckAuth()
  const {
    AUTH: { displayName, photoURL, email }
  } = useSelector(state => state)

  useEffect(() => {
    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogout = () => {
    dispatch(startLogOut())
    setLoading(true)
    setTimeout(() => {
      checkAuth()
      setLoading(false)
    }, 2000)
  }

  return (
    <LayoutPage
      title='Ray DashboardPage Fullstack Test'
      description='Ray DashboardPage Fullstack Test Descripción'
      size={{ xs: 12, sm: 8 }}
    >
      <Card sx={{ p: 3 }} className='animate__animated animate__fadeIn animate__faster'>
        <CardMedia
          component='img'
          height='90%'
          width='90px'
          image={photoURL || '/images/RAY-Brand-Black.png'}
          alt='Ray Brand'
        />
        <CardContent sx={{ p: 0, pt: 3 }}>
          <Grid2 size={{ xs: 12 }}>
            <Typography variant='h4'>Bienvenido {displayName || ''}</Typography>
          </Grid2>
          {email ? (
            <Grid2 size={{ xs: 12 }}>
              <Typography>{email}</Typography>
            </Grid2>
          ) : (
            <></>
          )}
          <Grid2 container justifyContent='flex-end'>
            <Grid2 size={{ xs: 3 }}>
              <LoadingButton
                fullWidth
                size='large'
                type='button'
                loading={loading}
                color={'primary'}
                variant={'outlined'}
                loadingPosition={'end'}
                endIcon={<LogoutOutlined />}
                onClick={handleLogout}
              >
                Logout
              </LoadingButton>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </LayoutPage>
  )
}

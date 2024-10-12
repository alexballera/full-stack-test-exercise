import { Card, CardContent, CardHeader, Grid2 } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
}

const AuthLayout = ({ children, title }: Props) => {
  return (
    <Grid2
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ minHeight: '100vh', p: 4, backgroundColor: 'primary.dark' }}
    >
      <Grid2 size={{ xs: 12, sm: 8, md: 4 }}>
        <Card>
          <CardHeader title={title} sx={{ color: 'primary.dark', p: 4, pb: 0 }} />
          <CardContent>{children}</CardContent>
        </Card>
      </Grid2>
    </Grid2>
  )
}
export default AuthLayout

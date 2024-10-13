import LayoutPage from '@/@core/components/layouts/LayoutPage'
import { Card, CardContent, CardHeader } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
  metaTitle: string
  metaDescription: string
}

const AuthLayout = (props: Props) => {
  const { children, title, metaTitle, metaDescription } = props

  return (
    <LayoutPage title={metaTitle} description={metaDescription}>
      <Card>
        <CardHeader title={title} sx={{ color: 'primary.dark', p: 4, pb: 0 }} />
        <CardContent>{children}</CardContent>
      </Card>
    </LayoutPage>
  )
}
export default AuthLayout

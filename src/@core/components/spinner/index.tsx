// ** MUI Import
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Image from 'next/image'

const FallbackSpinner = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Image
        src='/images/RAY-Brand-Red-01.svg'
        alt='Picture of the author'
        loading='lazy'
        width={300}
        height={200}
      />
      <CircularProgress color='secondary' disableShrink sx={{ mt: 1 }} />
    </Box>
  )
}

export default FallbackSpinner

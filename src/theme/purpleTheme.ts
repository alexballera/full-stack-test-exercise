import { createTheme } from '@mui/material'
import { blue, red } from '@mui/material/colors'
import {
  contrastText,
  primaryDark,
  primaryLight,
  primaryMain,
  secondaryDark,
  secondaryLight,
  secondaryMain
} from '../shared'

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
      light: primaryLight,
      dark: primaryDark,
      contrastText: contrastText
    },
    secondary: {
      main: secondaryMain,
      light: secondaryLight,
      dark: secondaryDark,
      contrastText: contrastText
    },
    error: {
      main: red.A400
    },
    info: {
      main: blue.A400
    },
    text: {
      primary: `rgba(${primaryMain}, 0.87)`,
      secondary: `rgba(${primaryMain}, 0.68)`,
      disabled: `rgba(${primaryMain}, 0.38)`
    }
  }
})

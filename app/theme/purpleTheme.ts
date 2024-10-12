import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { primaryMain, secondaryMain } from "../shared";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
      light: '#484c8c',
      dark: '#262254',
      contrastText: '#FFF'
      
    },
    secondary: {
      main: secondaryMain,
      light: '#664593',
      dark: '#3c2868',
      contrastText: '#FFF'
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
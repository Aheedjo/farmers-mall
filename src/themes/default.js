import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#008036',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#E0FFDD',
      white: '#FBFBFE',
    },
  },

  typography: {
    fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif",
  },

  appBar: {
    background: 'white',
    color: '#1E1E1E',
  },
  colors: {
    textLight: '#FCFCFC',
    textDark: '#000000',
    primaryVariant: '#1A874A'
  }
});

export default theme;
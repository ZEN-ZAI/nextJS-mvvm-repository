import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "#222831"
    },
    primary: {
      main: '#00ADB5',
    },
    secondary: {
      main: '#FFD369',
    },
    text: {
      primary: '#EEEEEE'
    }
  },
});

export default theme;

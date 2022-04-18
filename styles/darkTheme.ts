import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#393E46',
    },
    text: {
      primary: '#EEEEEE'
    }
  },
});

export default theme;

import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// investigate, probably not required
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;

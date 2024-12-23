import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#E94709',
    },
    secondary: {
      main: '#000',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
        elevation: 0,
      },
    },
  },
});

export default theme;

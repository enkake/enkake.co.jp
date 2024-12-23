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
        sx: {
          boxShadow: 'none',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
        elevation: 0,
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
});

export default theme;

import { createTheme } from '@material-ui/core';
import { lightGreen, yellow, teal } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[400],
    },
    secondary: {
      main: yellow[200],
    },
    info: {
      main: teal[300],
    },
  },
});

export default theme;

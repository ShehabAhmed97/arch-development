import { createTheme } from '@mui/material/styles';

const archBlue = "#0B72b9"
const archOrange = "#FFBA60"
export default createTheme({
    palette: {
      common: {
        blue: `${archBlue}`,
        orange: `${archOrange}`
      },  
      primary: {
        main: `${archBlue}`,
      },
      secondary: {
        main: `${archOrange}`,
      },
      text: {
        primary: "#fff"
      },
      action: {
      }
    },
    typography: {
        h3: {
            fontWeight: 300
        },
    },
    zIndex: {
      appBar: 1500,
    }
  });
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0069B1",
      dark: "#041E42",
    },
    secondary: {
      //main: "#EE5340", // orange
      main: "#B7BF10", // green
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

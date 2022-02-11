import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EFEFEF",
    },
    secondary: {
      main: "#E35044",
    },
    sub: "#577F95"
    
    
  },

  typography: {
    color: "#FFFFFF",

    h1: {
      fontSize: "3.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 900,
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "0.9rem",
      fontWeight: "600",
    },
    h6: {
      color: "#969493",
      fontSize: "0.7rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "0.8rem",
      fontWeight: "600",
    },
    body2: {
      color: "#247185",
      fontSize: "0.7rem",
      fontWeight: 700,
    },
    caption: {
      color: "#969493",
      fontSize: "0.8rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "0.8rem",
      fontWeight: "600",
    },
    subtitle2: {
      fontSize: "0.7rem",
      fontWeight: "600",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },

});


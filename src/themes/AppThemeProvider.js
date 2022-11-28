import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Open Sans",
      textTransform: "none",
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: "#424242",
    },
    secondary: {
      main: "#ff395c",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
        p: 0,
        disableRipple: true,
      },
      variant: "text",
    },
    MuiTypography: {
      defaultProps: {
        sx: {
          px: 1,
        },
        variant: "subtitle2",
      },
    },
    MuiStack: {
      defaultProps: {
        sx: {
          px: 2,
          py: 1,
        },
        spacing: 2,
        direction: "row",
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: "(theme) => theme.palette.primary.main",
        },
        underline: "none",
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        color: "#f04a58",
      },
    },
  },
});

function AppThemeProvider(prop) {
  return <ThemeProvider theme={theme}> {prop.children} </ThemeProvider>;
}

export default AppThemeProvider;

const theme = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#0060AF",
    },
    secondary: {
      main: "#25d9a5",
    },
    error: {
      main: "#D32F2F",
      border: "#F44336",
      label: "#B71C1C",
    },
    header: {
      primary: "#0060AF",
      secondary: "#919192",
      mainPost: "#4D4F5C",
    },
    text: {
      primary: "#4D4F5C",
      secondary: "#7C7C91",
      subs: "#919192",
      header: "#FFFFFF",
    },
    border: {
      icon: "#707070",
    },
  },
  spacing: 8,
  typography: {
    useNextVariants: true,
    htmlFontSize: 16,
    fontFamily: '"Roboto", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    titleFontSize: 18,
    titleFontWeight: 800,
    h3: {
      fontSize: "28px",
      "@media (min-width:600px)": {
        fontSize: "20px",
      },
    },
  },
};

export default {
  ...theme,
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        color: theme.palette.text.primary,
      },
      colorError: {
        color: theme.palette.error.main,
      },
    },
    MuiDrawer: {
      paper: {
        minWidth: "180px",
        padding: "20px",
      },
    },
  },
};

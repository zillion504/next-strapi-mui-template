import { createTheme, type ThemeOptions } from "@mui/material/styles"
import { deepmerge } from "@mui/utils"
import { Catamaran, Josefin_Sans } from "@next/font/google"

const catamaran = Catamaran({ subsets: ["latin"] })
const josefinSans = Josefin_Sans({ subsets: ["latin"] })

const themeBase: ThemeOptions = {
  typography: {
    fontFamily: [
      catamaran.style.fontFamily,
      "-apple-system",
      "BlinkMacSystemFont",
      "\"Segoe UI\"",
      "\"Roboto\"",
      "\"Helvetica\"",
      "\"Arial\"",
      "sans-serif",
      "\"Apple Color Emoji\"",
      "\"Segoe UI Emoji\"",
      "\"Segoe UI Symbol\""
    ].join(","),
    h1: {
      fontFamily: josefinSans.style.fontFamily,
      fontSize: 32,
      lineHeight: "64px",
      fontWeight: 700
    },
    h2: {
      fontFamily: josefinSans.style.fontFamily,
      fontSize: 48,
      lineHeight: "48px",
      fontWeight: 700
    },
    h3: {
      fontFamily: josefinSans.style.fontFamily,
      fontSize: 32,
      fontWeight: 600,
      textTransform: "uppercase"
    },
    h4: {
      fontSize: 36,
      fontWeight: 500
    },
    h5: {
      fontSize: 30,
      fontWeight: 500
    },
    h6: {
      fontSize: 26,
      fontWeight: 500
    },
    body1: {
      fontSize: 20,
      fontWeight: 400
    },
    body2: {
      fontSize: 18,
      fontWeight: 400
    },
    button: {
      fontSize: 20,
      fontWeight: 400,
      textTransform: "none"
    }
  },
  // shadows: Array(25).fill("none"),
  shape: {
    borderRadius: 0
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: ({ ownerState }) => {
          if (ownerState.variant === "text") {
            return {
              backgroundColor: "transparent",
              ":hover": {
                backgroundColor: "transparent"
              }
            }
          } else {
            return {}
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecoration: "none"
        }
      }
    }
  }
}

const palette: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "hsl(120, 50%, 40%)",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ccc",
      contrastText: "#000"
    },
    text: {
      primary: "#070707",
      secondary: "#222"
    },
    common: {
      white: "#FFF",
      black: "#020202"
    },
    background: {
      paper: "#EFEFEF",
      default: "#FAFAFA"
    }
  }
}

const theme = createTheme(deepmerge(themeBase, palette))

export { theme }

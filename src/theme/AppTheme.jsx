import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./purple";

// Componente que utiliza el tema creado y adicionalmente utiliza dicho tema para todos sus children
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}

import { createTheme } from "@mui/material"; // Función que posee un tema por defecto, que se puede modificar de acuerdo a lo deseado
import { red } from "@mui/material/colors"; // Colores predefinidos

// Tema creado con los colores para todo el aplicativo
export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400 // Intensidad del color
        }
    }
})
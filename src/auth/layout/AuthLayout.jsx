import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title='' }) => {
  return (
    /* Contenedor principal */
    <Grid
     container // tipo container
     spacing={ 0 } // No hay espacio entre hijos
     direction="column" // similar a flexbox
     alignItems="center" // Alínea los elementos al centro
     justifyContent="center"  // Justifica los elementos al centro
     sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }} // Sobreescribe los estilos, se puede ver como una serie de estilos extra
   >

        {/* Caja que se encuentra en el medio */}
        <Grid 
        item // Tipo item
        className='box-shadow' // Clase definida por el usuario en styles.css
        xs={3} // tamaño de la caja, pantallas pequeñas 3 posiciones
        sx={{  width: { sm: 450 }, backgroundColor: 'white', padding: 3, borderRadius: 2 }} // Sobreescribe los estilos, se puede ver como una serie de estilos extra
        >
            <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography> {/* Título de la caja */}

            {/* Children */}
            { children }

        </Grid>
    </Grid>
  )
}

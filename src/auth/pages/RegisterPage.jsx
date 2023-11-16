import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link } from "@mui/material"
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (    
    <AuthLayout title='Create an account'>
        <form action="">
          {/* Contenedor del formulario */}
          <Grid container>  
            
            {/* Primer campo de datos */}
            {/* Cada espacio es de 12 posiciones, se indica que el item tome el ancho máximo permitido dentro del container, para pantallas pequeñas. */}
            {/* Como en este caso no hay definiciones para otros tamaños de pantalla, pone el tamaño indicado para todas las pantallas */}
            <Grid item xs={ 12 } sx={{ mt: 2 }}> 
              <TextField 
                label="Name" 
                type="text"
                placeholder="Write your name"
                fullWidth="true"  
              />
            </Grid>
            
            <Grid item xs={ 12 } sx={{ mt: 2 }}> 
              <TextField 
                label="Email" 
                type="email"
                placeholder="jucramireza@gmail.com"
                fullWidth="true"  
              />
            </Grid>
            
            {/* Segundo campo de datos */}
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Password" 
                type="password"
                placeholder="Password"
                fullWidth="true"  
              />
            </Grid>
            
            {/* Contenedor para los botónes */}
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              
              <Grid item xs={ 12 }>
                <Button variant='contained' fullWidth> {/* FullWidth implica que se expande a todo el tamaño que tenga el padre, en este caso item */}
                  Create an account 
                </Button>
              </Grid>
              
              {/* Link que redirige al registro */}
              <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>
                <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
                {/* Para que sea un link con React-router-dom se debe utilizar la propiedad componente para llamar el componente que se va a utilizar */}
                <Link component={RouterLink} color='inherit' to='/auth/login'> {/* Sin el componente solo existe el estilo */}
                  Login
                </Link>
              </Grid>

            </Grid>

          </Grid>
        </form>

    </AuthLayout>
  )
}

import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {
  return (
    <Grid
     container // tipo container
     spacing={ 0 } // No hay espacio entre hijos
     direction="column" // similar a flexbox
     alignItems="center" // Alínea los elementos al centro
     justifyContent="center"  // Justifica los elementos al centro
     sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }} // Sobreescribe los estilos, se puede ver como una serie de estilos extra
    >
        <Grid item xs={ 12 }>
            <StarOutline sx={{ fontSize: 100, color: 'white' }} />
        </Grid>
        <Grid item xs={ 12 }>
            <Typography color="white" variant='h5'>Select or create a note</Typography>
        </Grid>
    </Grid>
  )
}

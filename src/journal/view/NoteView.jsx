import { Grid, Typography, Button, TextField } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid 
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ marginBottom: 1 }}    
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >12 de noviembre del 2023</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, marginRight: 1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth={ true }
                placeholder='Enter a title'
                label='Title'
                sx={{ border: 'none', mb: 1}}
            >
            </TextField>
            <TextField
                type='text'
                variant='filled'
                fullWidth={ true }
                multiline
                placeholder='What happens today?'
                minRows={ 5 }
            >
            </TextField>    

            {/* Images gallery */}
            <ImageGallery />
        </Grid>

    </Grid>
  )
}

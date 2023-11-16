import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material"
import { MenuOutlined, LogoutOutlined } from "@mui/icons-material"


export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar 
        position='fixed' // Fijo en pantalla
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)`},
            marginLeft: { sm: `${drawerWidth}px` }
        }}    
    >

        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                sx={{ marginRight: 2, display: { sm: 'none' } }} // En pantallas grandes desaparece el simblo de menú del NavBar
            >
                <MenuOutlined />
            </IconButton>

            <Grid 
                container
                direction= 'row'
                justifyContent='space-between'
                alignItems='center'
            >   
                <Typography variant='h6' noWrap component='div' >Journal App</Typography>
                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>

    </AppBar>
  )
}

import { Box, Grid, Toolbar, Divider, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from '@mui/icons-material';

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        // Tamaño del contenedor completo
        <Box
            component='nav'
            sx={{ width:{ sm: drawerWidth }, flexShrink: { sm: 0 }} }
        >
            <Drawer
                variant='permanent' // Siempre se va a mostrar
                open={ true }
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>Camilo Ramirez</Typography>
                </Toolbar>
                <Divider />

                {/* Permite crear listas que tienen la posibilidad de hacer scroll */}
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton> {/* Permite hacer click sobre el elemento */}
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'asdasdasdas'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem> 
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}

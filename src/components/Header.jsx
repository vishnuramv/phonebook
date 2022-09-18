import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Box px={15}>

                    <Toolbar >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            PhoneBook
                        </Typography>
                        <Button color="inherit">Add Contact</Button>
                    </Toolbar>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Header
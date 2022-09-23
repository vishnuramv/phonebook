import { Box, AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material'
import React, { useState } from 'react'


const AddDialog = ({ open, state, contact }) => {
    const handleClose = () => state(false);
    const [contactDetail, setContactDetail] = useState({
        id: '',
        name: '',
        number: ''
    });
    return <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
    >
        <DialogTitle id="dialog-title">
            Add New Contact
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="dialog-description">
                <TextField
                    margin="dense"
                    className="login__input"
                    required
                    label="Name"
                    value={contactDetail.name}
                    onChange={(e) => setContactDetail({ ...contactDetail, name: e.target.value })}
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    className="login__input"
                    required
                    label="Phone Number"
                    value={contactDetail.number}
                    onChange={(e) => setContactDetail({ ...contactDetail, number: e.target.value })}
                    type="number"
                    defaultValue={contact?.number}
                    variant="standard"
                />
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
                Add
            </Button>
        </DialogActions>
    </Dialog>
}

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Box px={15}>

                    <Toolbar >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            PhoneBook
                        </Typography>
                        <Button color="inherit" onClick={handleOpen}>Add Contact</Button>
                        <AddDialog open={open} state={setOpen} />
                    </Toolbar>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Header
import { Box, AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material'
import React, { useState } from 'react'
import { addContact } from '../apiClient/contactApi';
import { contactStore } from '../store';


const AddDialog = ({ open, state, contact }) => {
    const handleClose = () => state(false);
    const [contactDetail, setContactDetail] = useState({
    });
    const handleAdd = () => {
        addContact(contactDetail).then(res => {
            contactStore.update(s => {
                s.contacts = [...s.contacts, res]
            })
            handleClose()
        }).catch(err => {
            console.log(err)
        })
    }
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
                    value={contactDetail.phone}
                    onChange={(e) => setContactDetail({ ...contactDetail, phone: e.target.value })}
                    type="number"
                    variant="standard"
                />
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAdd} autoFocus>
                Add
            </Button>
        </DialogActions>
    </Dialog>
}

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleLogin = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Box px={15}>

                    <Toolbar >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            PhoneBook
                        </Typography>
                        <Button color="inherit" onClick={handleOpen}>Add Contact</Button>
                        <Button color="inherit" onClick={handleLogin}>Logout</Button>
                        <AddDialog open={open} state={setOpen} />
                    </Toolbar>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Header
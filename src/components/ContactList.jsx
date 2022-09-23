import React, { Fragment, useState } from 'react'
import { Box, List, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from "@mui/material"
import ContactItem from './ContactItem'
import { contactStore } from '../store'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const DeleteDialog = ({ open, state, contact }) => {
    const handleClose = () => state(false);
    return <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            Delete Contact
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {`Do you want to delete ${contact?.name} ?`}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
                Delete
            </Button>
        </DialogActions>
    </Dialog>
}

const EditDialog = ({ open, state, contact, setContact }) => {
    const handleClose = () => state(false);
    return <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
    >
        <DialogTitle id="dialog-title">
            Edit Contact
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="dialog-description">
                <TextField
                    margin="dense"
                    className="login__input"
                    required
                    label="Name"
                    defaultValue={contact?.name}
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    className="login__input"
                    required
                    label="Phone Number"
                    type="number"
                    defaultValue={contact?.number}
                    value={contact.number}
                    onChange={(e) => setContact({ ...contact, number: e.target.value })}
                    variant="standard"
                />
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
                Edit
            </Button>
        </DialogActions>
    </Dialog>
}


const ContactList = () => {
    const contacts = contactStore.useState(s => s.contacts);
    const [contactDetail, setContactDetail] = useState({
        id: '',
        name: '',
        number: ''
    });
    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);

    console.log(contacts)
    return (
        <Box boxShadow={5} borderRadius={1}>
            <List>
                {
                    contacts.map((contact) => (
                        <Fragment key={contact?.id}>
                            <ContactItem id={contact?.id} name={contact?.name} number={contact?.number} onOpenDelete={handleOpenDelete} onOpenEdit={handleOpenEdit} setContact={setContactDetail} />
                            <Divider />
                        </Fragment>
                    ))
                }
                <DeleteDialog open={openDelete} state={setOpenDelete} contact={contactDetail} />
                <EditDialog open={openEdit} state={setOpenEdit} contact={contactDetail} setContact={setContactDetail} />
            </List>
        </Box>
    )
}

export default ContactList
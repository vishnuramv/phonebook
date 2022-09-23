import React, { Fragment, useEffect, useState } from 'react'
import { Box, List, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, Typography } from "@mui/material"
import ContactItem from './ContactItem'
import { contactStore } from '../store'
import { deleteContact, editContact, getContact } from '../apiClient/contactApi';

const DeleteDialog = ({ open, state, contact }) => {
    const handleClose = () => state(false);
    const handleDelete = () => {
        deleteContact(contact.id).then(res => {

            contactStore.update(s => {
                const temp = s.contacts.filter((val) => val._id !== contact.id)
                s.contacts = [...temp]
            })
            handleClose()
        })
    }
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
            <Button onClick={handleDelete} autoFocus>
                Delete
            </Button>
        </DialogActions>
    </Dialog>
}

const EditDialog = ({ open, state, contact, setContact }) => {
    const handleClose = () => state(false);
    const handleEdit = () => {
        editContact(contact).then(res => {

            contactStore.update(s => {
                const ind = s.contacts.findIndex((val) => val.id === res.id)
                const temp = [...s.contacts]
                temp[ind] = res
                s.contacts = [...temp]
            })
            handleClose()
        })
    }
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
                    defaultValue={contact?.phone}
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    variant="standard"
                />
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleEdit} autoFocus>
                Edit
            </Button>
        </DialogActions>
    </Dialog>
}


const ContactList = () => {
    const contacts = contactStore.useState(s => s.contacts);
    const [contactDetail, setContactDetail] = useState({});
    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);

    console.log(contacts)
    useEffect(() => {
        getContact().then(res => {
            contactStore.update(s => {
                s.contacts = res
            })
        }).catch(err => {
            console.log(err)
        })
    }, [contacts])

    return (
        <Box boxShadow={5} borderRadius={1}>
            <List>
                {contacts.length !== 0 ?
                    (contacts.map((contact) => (
                        <Fragment key={contact?._id}>
                            <ContactItem id={contact?._id} name={contact?.name} phone={contact?.phone} onOpenDelete={handleOpenDelete} onOpenEdit={handleOpenEdit} setContact={setContactDetail} />
                            <Divider />
                        </Fragment>
                    ))) : (
                        <Typography variant='h6' align='center'>No contacts found</Typography>
                    )
                }
                <DeleteDialog open={openDelete} state={setOpenDelete} contact={contactDetail} />
                <EditDialog open={openEdit} state={setOpenEdit} contact={contactDetail} setContact={setContactDetail} />
            </List>
        </Box>
    )
}

export default ContactList
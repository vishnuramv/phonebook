import React from 'react'
import { ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"

const ContactItem = ({ id, name, phone, onOpenDelete, onOpenEdit, setContact }) => {
    console.log("name")
    return (
        <ListItem
            secondaryAction={
                <>
                    <IconButton edge="end" aria-label="edit" onClick={() => {
                        onOpenEdit()
                        setContact({ id, name, phone })
                    }}>
                        <Edit />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => {
                        onOpenDelete()
                        setContact({ id, name, phone })
                    }}>
                        <Delete />
                    </IconButton>
                </>
            }
        >
            <ListItemAvatar>
                <Avatar>{name[0].toUpperCase()}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={phone}
            />
        </ListItem>
    )
}

export default ContactItem
import React from 'react'
import { ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"

const ContactItem = ({ id, name, number, onOpenDelete, onOpenEdit, setContact }) => {
    console.log("name")
    return (
        <ListItem
            secondaryAction={
                <>
                    <IconButton edge="end" aria-label="edit" onClick={() => {
                        onOpenEdit()
                        setContact({ id, name, number })
                    }}>
                        <Edit />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => {
                        onOpenDelete()
                        setContact({ id, name, number })
                    }}>
                        <Delete />
                    </IconButton>
                </>
            }
        >
            <ListItemAvatar>
                <Avatar>{name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={number}
            />
        </ListItem>
    )
}

export default ContactItem
import React from 'react'
import { ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"

const ContactItem = ({ id, imgUrl, name, number }) => {
    console.log("name")
    return (
        <ListItem
            secondaryAction={
                <>
                    <IconButton edge="end" aria-label="edit">
                        <Edit />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                        <Delete />
                    </IconButton>
                </>
            }
        >
            {/* <ListItemAvatar>
                <Avatar src={imgUrl && imgUrl} alt={name} />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={number}
            /> */}
        </ListItem>
    )
}

export default ContactItem
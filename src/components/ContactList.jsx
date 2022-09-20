import React, { Fragment } from 'react'
import { Box, List, Divider } from "@mui/material"
import ContactItem from './ContactItem'
import { contactStore } from '../store'
const ContactList = () => {
    const contacts = contactStore.useState(s => s.contacts);
    
    console.log(contacts)
    return (
        <Box boxShadow={5} borderRadius={1}>
            <List>
                {
                    contacts.map((contact) => (
                        <Fragment key={contact?.id}>
                         <ContactItem id={contact?.id} name={contact?.name} number={contact?.number} imgUrl={contact?.img} />
                            <Divider /> 
                            {/* // console.log(contact) */}
                        {/* // <h1>{contact.name}</h1> */}

                        </Fragment>
                    ))
                }
            </List>
        </Box>
    )
}

export default ContactList
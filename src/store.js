import { Store } from "pullstate";


export const contactStore = new Store({
    contacts: [
        {
            id: 1,
            img: null,
            name: "Vishnu",
            number: 1234567890
        },
        {
            id: 2,
            img: null,
            name: "Vis",
            number: 1234567890
        },
        {
            id: 3,
            img: null,
            name: "Vishnu ram",
            number: 1234567890
        },
        {
            id: 4,
            img: null,
            name: "Ram",
            number: 1234567890
        },
        {
            id: 5,
            img: null,
            name: "Vinu",
            number: 1234567890
        },
    ],
})

export const userStore = new Store({
    isLoggedIn: false,
    user: null,
})
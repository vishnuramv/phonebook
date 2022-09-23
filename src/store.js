import { Store } from "pullstate";


export const contactStore = new Store({
    contacts: [

    ],
})

export const userStore = new Store({
    isLoggedIn: false,
    token: null,
    user: null,
})
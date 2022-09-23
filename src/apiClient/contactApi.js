import axios from "axios"
import { BASE_URL } from "../config"



export const getContact = async () => {
    const response = await axios({
        url: `${BASE_URL}/contacts`,
        method: "get",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const addContact = async (data) => {
    const response = await axios({
        url: `${BASE_URL}/contacts`,
        method: "post",
        data: data,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const editContact = async (data) => {
    const response = await axios({
        url: `${BASE_URL}/contacts/${data.id}`,
        method: "put",
        data: data,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const deleteContact = async (data) => {
    const response = await axios({
        url: `${BASE_URL}/contacts/${data}`,
        method: "delete",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}
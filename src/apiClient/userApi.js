import axios from "axios";
import { BASE_URL } from "../config";


export const signup = async (data) => {
    const response = await axios.post(`${BASE_URL}/auth/register`, data);
    localStorage.setItem("token", response.data.token)
    return response.data.token;
}

export const login = async (data) => {
    const response = await axios.post(`${BASE_URL}/auth/login`, data);
    localStorage.setItem("token", response.data.token)
    return response.data.token;
}


export const getUser = async () => {
    const response = await axios({
        url: `${BASE_URL}/user`,
        method: "get",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}
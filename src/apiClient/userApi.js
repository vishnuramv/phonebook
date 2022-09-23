import axios from "axios";
import { BASE_URL } from "../config";


export const signup = async (data) => {
    const response = await axios.post(`${BASE_URL}/auth/register`, data);
    return response;
}
import axios from "axios";

const WTR_API = 'https://final-project-node-server-app-h4kv.onrender.com/api/want-tp-read';

export const findWantToRead = async () => {
    const response = await axios.get(WTR_API);
    console.log("User API Response: " , response)
    return response.data;
}

export const findWantToReadByUserId = async(id) => {
    const response = await axios.get(`${WTR_API}/${id}`);
    return response.data;
}

export const createWantToRead = async(newUser) => {
    const response = await axios.post(`${WTR_API}`, newUser)
    return response.status
}

export const deleteWantToRead = async(id) => {
    const response = await axios.delete(`${WTR_API}/${id}`)
    return response.status
}





import axios from 'axios';
const USERS_API = 'https://final-project-node-server-app-h4kv.onrender.com/api/users';

export const findUsers = async () => {
    const response = await axios.get(USERS_API);
    console.log("User API Response: " , response)
    return response.data;
}

export const findUsersByID = async(id) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
}

export const createUser = async(newUser) => {
    const response = await axios.post(`${USERS_API}`, newUser)
    return response.status
}

export const deleteUser = async(id) => {
    const response = await axios.delete(`${USERS_API}/${id}`)
    return response.status
}

export const updateUser = async(id, updatedUser) => {
    const response = await axios.put(`${USERS_API}/${id}`, updatedUser)
    return response.status
}




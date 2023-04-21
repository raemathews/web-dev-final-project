import axios from "axios";

const READ_API = 'https://final-project-node-server-app-h4kv.onrender.com/api';

/** all finished books in reading lists**/
export const findRead = async () => {
    const response = await axios.get(`${READ_API}/read`);
    return response.data;
}

/** all unfinished books in reading list**/
export const findWantToRead = async(id) => {
    const response = await axios.get(`${READ_API}/wantToRead`);
    return response.data;
}

export const findReadByUserId = async(uid) => {
    const response = await axios.post(`${READ_API}/read/${uid}`)
    return response.status
}

export const createRead = async(newRead) => {
    const response = await axios.create(`${READ_API}/read`, newRead)
    return response.status
}

export const deleteRead = async(id) => {
    const response = await axios.delete(`${READ_API}/${id}`)
    return response.status
}





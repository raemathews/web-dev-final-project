import axios from 'axios';
const USERS_API = 'https://final-project-node-server-app-h4kv.onrender.com/api/librarians';

export const findLibrarians = async () => {
    const response = await axios.get(USERS_API);
    return response.data;
}

export const findLibrarianByID = async(id) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
}

export const createLibrarian = async(newLibrarian) => {
    const response = await axios.post(`${USERS_API}`, newLibrarian)
    return response.status
}


export const updateLibrarian = async(id, updatedLibrarian) => {
    console.log(`updated librarian: ${JSON.stringify(updatedLibrarian)}`);
    const response = await axios.put(`${USERS_API}/${id}`, updatedLibrarian)
    return updatedLibrarian
}




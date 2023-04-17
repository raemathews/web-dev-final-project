import axios from 'axios';
const USERS_API = 'https://tuiter-node-server-app-1ro0.onrender.com/api/users';

export const findUsers = async () => {
    const response = await axios.get(USERS_API);
    // for(let key in response) {
    //     console.log(key + ":", response[key]);
    // }
    const users = response.data;
    return users;
}

export const findUsersByID = async(id) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    const user = response.data
    return user;
}

export const addUser = async({username, pw, email, phone}) => {
    const response = await axios.post(`${USERS_API}/${username}/${pw}/${email}/${phone}`)
    const status = response.status
    return status
}

export const updateUserFollow = async({followId}) => {
    const response = await axios.put(`${USERS_API}/${followId}`)
    return response.status
}




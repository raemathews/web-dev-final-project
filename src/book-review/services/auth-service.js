import axios from "axios";
const USERS_URL = 'https://final-project-node-server-app-h4kv.onrender.com/api';



export const login = async ({ username, password }) => {
    const response = await axios.post(`${USERS_URL}/login`, {
        username,
        password,
    });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await axios.post(`${USERS_URL}/logout`);
    return response.data;
};

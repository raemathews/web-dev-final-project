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


export const profile = async () => {
    const response = await axios.post(`${USERS_URL}/profile`);
    return response.data;
};


export const updateUser = async (user) => {
    const response = await axios.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};


export const register = async ({ username, password }) => {
    //const response = await api.put(`${USERS_URL}/${user._id}`, user);
    //return response.data;

    //const newUser = username.body;
    //newUser.username = username;
    //newUser.password = password.body;
    //const insertedTuit = await authThunks
    //    .registerThunk(newUser);
    //password.json(insertedTuit);
}


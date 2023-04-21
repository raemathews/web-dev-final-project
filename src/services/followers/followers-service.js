import axios from "axios";

const BASE_API = 'https://final-project-node-server-app-h4kv.onrender.com/api';

export const findFollows = async () => {
    const response = await axios.get(`${BASE_API}/follows`);
    // for(let key in response) {
    //     console.log(key + ":", response[key]);
    // }
    return response.data;
}

export const findFollowersByUserId = async (uid) => {
    const response = await axios.get(`${BASE_API}/followers/${uid}`);
    return response.data;
}

export const findFollowingByUserId = async (uid) => {
    const response = await axios.get(`${BASE_API}/following/${uid}`);
    return response.data;
}

export const createFollows = async (fid) => {
    const response = await axios.post(`${BASE_API}/follows/${fid}`);
    return response.data;
}

export const deleteFollows = async (fid) => {
    const response = await axios.delete(`${BASE_API}/follows/${fid}`);
    return response.data;
}

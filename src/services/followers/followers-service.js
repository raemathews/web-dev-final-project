import axios from "axios";
import React from "react";

const BASE_API = 'https://final-project-node-server-app-h4kv.onrender.com/api';


export const findAllFollows = async () => {
    const response = await axios.get(`${BASE_API}/follows`);
    return response.data;
}

export const findFollowingByUserId = async (uid) => {
    const response = await axios.get(`${BASE_API}/following/${uid}`);
    return response.data;
}

export const findFollowersByUserId = async (uid) => {
    const response = await axios.get(`${BASE_API}/followers/${uid}`);
    return response.data;
}

export const createFollows = async (follow) => {
    const response = await axios.post(`${BASE_API}/follows`, follow);
    console.log("THE RESPONSE DATA: ", response.data);
    return response.data;
}

export const deleteFollows = async (fid) => {
    const response = await axios.delete(`${BASE_API}/follows/${fid}`);
    return {response: response.data, deleted_id: fid};
}

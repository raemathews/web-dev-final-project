import axios from 'axios';
const REPLIES_API = 'https://final-project-node-server-app-h4kv.onrender.com/api/replies';

export const findReplies = async () => {
    const response = await axios.get(REPLIES_API);
    return response.data;
}

export const findRepliesByReviewId = async (id) => {
    const response = await axios.get(`${REPLIES_API}/${id}`);
    return response.data;
}

export const createReply = async (id, newReply) => {
    const response = await axios.post(`${REPLIES_API}/${id}`, newReply);
    return response.data;
}

export const deleteReply = async (id) => {
    const response = await axios.post(`${REPLIES_API}/${id}`);
    return response.data;
}


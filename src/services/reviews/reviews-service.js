import axios from 'axios';
const REVIEWS_API = 'https://final-project-node-server-app-h4kv.onrender.com/api/reviews';

export const findReviews = async () => {
    const response = await axios.get(REVIEWS_API);
    return response.data;
}

export const findReviewsByBookId = async (bid) => {
    const response = await axios.get(`${REVIEWS_API}/${bid}`)
    console.log(response.data);
    return response.data
}

export const findReviewsByUserId = async (uid) => {
    console.log("uid in service" + uid);
    const response = await axios.get(`${REVIEWS_API}/byUser/${uid}`)
    console.log("response" + response);
    console.log("response data" + response.data);
    return response.data
}

export const createReview = async (review) => {
    const response = await axios.post(`${REVIEWS_API}/create`, review);
    return response.data;
}

export const deleteReview = async (id) => {
    const response = await axios.delete(`${REVIEWS_API}/delete/${id}`);
    return response.data;
}

export const updateReview = async (review) => {
    const response = await axios
        .put(`${REVIEWS_API}/update/${review._id}`, review);
    return review;
}

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
    const response = await axios.get(`${REVIEWS_API}/byUser/${uid}`)
    return response.data
}

export const createReview = async (review) => {
    const response = await axios.post(`${REVIEWS_API}/create`, review);
    return response.data;
}

export const deleteReview = async (rid) => {
    console.log("deleting review with id " + rid);
    console.log(`${REVIEWS_API}/delete/${rid}`);
    const response = await axios.delete(`${REVIEWS_API}/delete/${rid}`);
    console.log(`response: ${JSON.stringify(response)}`);
    return rid;
}

export const updateReview = async (review) => {
    const response = await axios
        .put(`${REVIEWS_API}/update/${review._id}`, review);
    return review;
}

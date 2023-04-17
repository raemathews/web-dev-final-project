import axios from 'axios';
const POSTS_API = 'https://final-project-node-server-app-h4kv.onrender.com/api/reviews';

export const findPostsByBook = async ({bookId}) => {
    const response = await axios.get(`${POSTS_API}/${bookId}`);
    // for(let key in response) {
    //     console.log(key + ":", response[key]);
    // }
    const users = response.data;
    return users;
}

//I think this depends quite a bit on the structure of db ? this is just a filler for now
export const addPost = async({authorId, bookId, content,}) => {
    const response = await axios.post(`${POSTS_API}/${authorId}/${bookId}/${content}`)
    const status = response.status
    return status
}

export const deletePost = async({postId}) => {
    const response = await axios.delete(`${POSTS_API}/${postId}`)
    return response.status
}

export const addPostLike = async({postId, userId}) => {
    const response = await axios.delete(`${POSTS_API}/${postId}`)
    return response.status
}




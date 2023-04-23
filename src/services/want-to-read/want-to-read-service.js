import axios from "axios";

const WTR_API = 'https://final-project-node-server-app-h4kv.onrender.com/api/reads';

// app.get('/api/reads', findReads);
// app.get('/api/reads/:uid', findReadsByUserId);
// app.get('/api/reads/finishedRead', findFinishedReads);
// app.get('/api/reads/wantToRead', findWantToReads);
// app.get('/api/reads/finishedRead/:uid', findFinishedReadByUserId);
// app.get('/api/reads/wantToRead/:uid', findWantToReadByUserId);
// app.post('/api/reads', createRead);
// app.delete('/api/reads/:rid', deleteRead);
// app.put('/api/reads/:rid', updateRead);

export const findReads = async () => {
    const response = await axios.get(WTR_API);
    console.log("User API Response: " , response)
    return response.data;
}
export const findReadsByUserId = async (uid) => {
    const response = await axios.get(`${WTR_API}/${uid}`);
    return response.data;
}
export const findFinishedReads = async () => {
    const response = await axios.get(`${WTR_API}/finishedRead`);
    return response.data;
}
export const findWantToReads = async () => {
    const response = await axios.get(`${WTR_API}/wantToRead`);
    return response.data;
}
export const findFinishedReadsByUserId = async (uid) => {
    const response = await axios.get(`${WTR_API}/finishedRead/${uid}`);
    return response.data;
}
export const findWantToReadsByUserId = async (uid) => {
    const response = await axios.get(`${WTR_API}/wantToRead/${uid}`);
    return response.data;
}
export const createRead = async(read) => {
    // console.log(`In create read: ${JSON.stringify(read)}`)
    const response = await axios.post(`${WTR_API}`, read)
    // console.log(`response: ${JSON.stringify(response)}`)
    return response.data
}
export const deleteRead = async(id) => {
    // console.log("Trying to delete this id: " + id)
    const response = await axios.delete(`${WTR_API}/${id}`)
    // console.log(`delete read response ${response}`)
    return id
}
export const updateRead = async (read) => {
    const response = await axios
        .put(`${WTR_API}/${read._id}`, read);
    return read;
}





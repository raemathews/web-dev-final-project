import axios from 'axios';
const BOOKS_API = 'https://openlibrary.org/search.json?q=';
const BOOK_API = 'https://openlibrary.org/works/';
export const COVERS_API = 'https://covers.openlibrary.org/b/id/';

export const findBooks = async (q) => {
    q.replaceAll(" ", "+");
    const response = await axios.get(`${BOOKS_API}${q}`);
    // for(let key in response) {
    //     console.log(key + ":", response[key]);
    // }
    const books = response.data;
    return books;
}

export const findBookById = async (q) => {
    const response = await axios.get(`${BOOK_API}${q}.json`);
    const books = response.data;
    return books;
}

// export const findBookCover = async (bid) => {
//     const response = await axios
//         .get(`${COVERS_API}/${bid}-L.jpg`);
//     const coverUrl = response.data;
//     console.log("cover: ", coverUrl)
//     return {cover_id: bid,
//         cover: coverUrl};
// }

export const findBookCover = (bid) => {
    return `${COVERS_API}/${bid}-L.jpg`;
}


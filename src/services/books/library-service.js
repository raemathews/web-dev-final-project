import axios from 'axios';

const BOOKS_API = 'https://openlibrary.org/search.json?q=';
const BOOK_API = 'https://openlibrary.org/works/';
export const COVERS_API = 'https://covers.openlibrary.org/b/id/';

export const findBooks = async (q) => {
    q.replaceAll(" ", "+");
    const response = await axios.get(`${BOOKS_API}${q}`);
    const books = response.data;
    return books;
}

export const findBookById = async (q) => {
    const response = await axios.get(`${BOOK_API}${q}.json`);
    const books = response.data;
    return books;
}

export const accumulateBooksByIds = async (bids) => {
    const books = []
    for(let bid in bids) {
        const response = await axios.get(`${BOOKS_API}${bid}`);
        books.concat(response.data.docs)
    }
    return books
}

export const findBookCover = (bid) => {
    return `${COVERS_API}/${bid}-L.jpg`;
}


import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./library-service"

export const findBooksThunk = createAsyncThunk(
    'books/findBooks', async (q) =>
        await service.findBooks(q)
);

export const findBookByIdThunk = createAsyncThunk(
    'books/findBookById', async (q) =>
        await service.findBookById(q)
    );

export const findBookCoverThunk = createAsyncThunk(
    'books/findBookCover', async (bid) =>
        await service.findBookCover(bid)
)




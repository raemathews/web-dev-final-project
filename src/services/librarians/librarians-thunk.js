import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./librarians-service"

export const findLibrariansThunk = createAsyncThunk(
    'librarians/findLibrarians', async () =>
        await service.findLibrarians()
);

export const findLibrarianByIDThunk = createAsyncThunk(
    'librarians/findLibrariansByID', async (id) =>
        await service.findLibrarianByID(id)
);

export const createLibrarianThunk = createAsyncThunk(
    'librarians/createLibrarian', async (newLibrarian) =>
        await service.createLibrarian(newLibrarian)
);


export const updateLibrarianThunk = createAsyncThunk(
    'librarians/updateLibrarian', async (updatedLibrarian) =>
        await service.updateLibrarian(updatedLibrarian._id, updatedLibrarian)
);
import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./want-to-read-service.js"

export const findWantToReadThunk = createAsyncThunk(
    'wtr/findWantToRead', async () =>
        await service.findWantToRead()
);

export const findFollowersByUserIdThunk = createAsyncThunk(
    'wtr/findWantToReadByUserId', async (id) =>
        await service.findWantToReadByUserId(id)
);

export const createWantToReadThunk = createAsyncThunk(
    'wtr/createWantToRead', async (id) =>
        await service.createWantToRead(id)
);


export const deleteWantToReadThunk = createAsyncThunk(
    'wtr/deleteWantToRead', async (fid) =>
        await service.deleteWantToRead(fid)
);

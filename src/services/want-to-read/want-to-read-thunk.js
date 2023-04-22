import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./want-to-read-service.js"

export const findReadThunk = createAsyncThunk(
    'wtr/findRead', async () =>
        await service.findReads()
);

export const findReadByUserIdThunk = createAsyncThunk(
    'wtr/findReadsByUserId', async (id) =>
        await service.findReadsByUserId(id)
);

export const findFinishedReadThunk = createAsyncThunk(
    'wtr/findFinishedRead', async () =>
        await service.findFinishedReads()
);

export const findUnfinishedReadThunk = createAsyncThunk(
    'wtr/findUnfinishedRead', async () =>
        await service.findWantToReads()
);

export const findFinishedReadByUserIdThunk = createAsyncThunk(
    'wtr/findFinishedReadsByUserId', async (id) =>
        await service.findFinishedReadsByUserId(id)
);

export const findUnfinishedReadByUserIdThunk = createAsyncThunk(
    'wtr/findUnfinishedReadsByUserId', async (id) =>
        await service.findWantToReadsByUserId(id)
);

export const createReadThunk = createAsyncThunk(
    'wtr/create', async (read) =>
        await service.createRead(read)
);

export const deleteReadThunk = createAsyncThunk(
    'wtr/delete', async (id) =>
        await service.deleteRead(id)
);

export const updateReadThunk = createAsyncThunk(
    'wtr/update', async (read) =>
        await service.updateRead(read)
);



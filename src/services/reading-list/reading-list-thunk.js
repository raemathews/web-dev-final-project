import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./reading-list-service.js"

export const findReadThunk = createAsyncThunk(
    'read/findRead', async () =>
        await service.findRead()
);

export const findWantToReadThunk = createAsyncThunk(
    'read/findWantToRead', async () =>
        await service.findWantToRead()
);

export const findReadByUserIdThunk = createAsyncThunk(
    'read/findReadByUserId', async (id) =>
        await service.findReadByUserId(id)
);


export const createReadThunk = createAsyncThunk(
    'read/createRead', async (newRead) =>
        await service.createRead(newRead)
);


export const deleteReadThunk = createAsyncThunk(
    'read/deleteRead', async (rid) =>
        await service.deleteRead(rid)
)
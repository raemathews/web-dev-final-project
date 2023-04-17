import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./users-service"

export const findUsersThunk = createAsyncThunk(
    'users/findUsers', async () =>
        await service.findUsers()
);

export const findUsersByIDThunk = createAsyncThunk(
    'users/findUsersByID', async (id) =>
        await service.findUsersByID(id)
);




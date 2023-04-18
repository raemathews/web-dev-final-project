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

export const createUserThunk = createAsyncThunk(
    'users/createUser', async (newUser) =>
        await service.createUser(newUser)
);

export const deleteUserThunk = createAsyncThunk(
    'users/deleteUser', async (newUser) =>
        await service.createUser(newUser)
);

export const updateUserThunk = createAsyncThunk(
    'users/deleteUser', async (updatedUser) =>
        await service.createUser(updatedUser)
);
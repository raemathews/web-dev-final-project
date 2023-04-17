import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./followers-service"

export const findFollows = createAsyncThunk(
    'followers/findFollows', async () =>
        await service.findFollows()
);

export const findFollowersByUserIdThunk = createAsyncThunk(
    'followers/findFollowersByUserId', async (id) =>
        await service.findFollowersByUserId(id)
);

export const findFollowingByUserIdThunk = createAsyncThunk(
    'followers/findFollowingByUserId', async (id) =>
        await service.findFollowingByUserId(id)
);

export const createFollowsThunk = createAsyncThunk(
    'follows/createFollow', async (fid) =>
        await service.createFollows(fid)
);

export const deleteFollowsThunk = createAsyncThunk(
    'follows/deleteFollow', async (fid) =>
        await service.deleteFollows(fid)
);

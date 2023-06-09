import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./followers-service"


export const findFollowingByUserIdThunk = createAsyncThunk(
    'followers/findFollowersByUserId', async (id) =>
        await service.findFollowingByUserId(id)
);

export const findAllFollows = createAsyncThunk(
    'followers/findAllFollows', async () =>
        await service.findAllFollows()
);

export const findFollowersByUserIdThunk = createAsyncThunk(
    'followers/findFollowingByUserId', async (id) =>
        await service.findFollowersByUserId(id)
);

export const createFollowerThunk = createAsyncThunk(
    'follows/createFollow', async (follow) =>
        await service.createFollows(follow)
);

export const deleteFollowerThunk = createAsyncThunk(
    'follows/deleteFollow', async (fid) =>
        await service.deleteFollows(fid)
);

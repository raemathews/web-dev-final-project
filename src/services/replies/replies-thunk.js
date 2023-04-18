import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./replies-service"

export const findRepliesThunk = createAsyncThunk(
    'followers/findReplies', async () =>
        await service.findReplies()
);

export const findRepliesByReviewIdThunk = createAsyncThunk(
    'followers/findRepliesByReviewId', async (id) =>
        await service.findRepliesByReviewId(id)
);

export const createReplyThunk = createAsyncThunk(
    'follows/createReply', async (reviewId, reply) =>
        await service.createReply(reviewId, reply)
);

export const deleteReplyThunk = createAsyncThunk(
    'follows/deleteReply', async (id) =>
        await service.deleteReply(id)
);

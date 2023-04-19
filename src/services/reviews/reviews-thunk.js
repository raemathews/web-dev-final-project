import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./reviews-service.js"

export const findReviewsThunk = createAsyncThunk(
    'reviews/findWantToRead', async () =>
        await service.findReviews()
);

export const findReviewsByUserIdThunk = createAsyncThunk(
    'reviews/findReviewsByUserId', async (id) =>
        await service.findReviewsByUserId(id)
);

export const findReviewsByBookId = createAsyncThunk(
    'reviews/findReviewsByBookId', async (id) =>
        await service.findReviewsByBookId(id)
);

export const createWantToReadThunk = createAsyncThunk(
    'reviews/createReview', async () =>
        await service.createReview()
);


export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteWantToRead', async (id) =>
        await service.deleteReview(id)
);

import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./reviews-service.js"

export const findReviewsThunk = createAsyncThunk(
    'reviews/findWantToRead', async () =>
        await service.findReviews()
);

export const findReviewsByUserIdThunk = createAsyncThunk(
    'reviews/findReviewsByUserId', async (id) =>{
        const result = await service.findReviewsByUserId(id)
        return result;
}

);

export const findReviewsByBookId = createAsyncThunk(
    'reviews/findReviewsByBookId', async (id) => {
        const result = await service.findReviewsByBookId(id)
        console.log("result: " + result)
        return result;
    });

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview', async (review) =>
        await service.createReview(review)
);

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteWantToRead', async (id) =>
        await service.deleteReview(id)
);

export const updateReviewThunk = createAsyncThunk(
    'reviews/updateReview', async (review) =>
        await service.updateReview(review)
);

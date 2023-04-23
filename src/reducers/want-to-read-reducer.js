import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    findReadThunk,
    findReadByUserIdThunk,
    findFinishedReadThunk,
    findUnfinishedReadThunk,
    findFinishedReadByUserIdThunk,
    findUnfinishedReadByUserIdThunk,
    createReadThunk,
    deleteReadThunk,
    updateReadThunk
} from "../services/want-to-read/want-to-read-thunk";

const initialState = {
    readingList: [],
    read: [],
    wantToRead: [],
    loading: false
}
const wantToReadSlice = createSlice({
    name: "want-to-read",
    initialState: initialState,
    extraReducers: {
        [findReadThunk.pending]:
            (state) => {
                state.loading = true
                state.readingList = []
                state.read = []
                state.wantToRead = []
            },
        [findReadThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.readingList = payload
                state.read = state.readingList.filter(r => r.finished)
                state.wantToRead = state.readingList.filter(r => !r.finished)
            },
        [findReadThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.readingList = action.error
            },

        [findReadByUserIdThunk.pending]:
            (state) => {
                state.loading = true
                state.readingList = []
                state.read = []
                state.wantToRead = []
            },
        [findReadByUserIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.readingList = payload
                state.read = state.readingList.filter(r => r.finished)
                state.wantToRead = state.readingList.filter(r => !r.finished)
            },
        [findReadByUserIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },

        [createReadThunk.fulfilled]:
            (state, { payload }) => {
                // console.log(`payload: ${JSON.stringify(payload)}`)
                state.loading = false
                state.readingList.push(payload)
                state.read = state.readingList.filter(r => r.finished)
                state.wantToRead = state.readingList.filter(r => !r.finished)
            },
        [deleteReadThunk.fulfilled] :
            (state, { payload }) => {
                // console.log(`deleteReadThunk payload: ${payload}`)
                state.loading = false
                // console.log(`reading list size before delete: ${state.readingList.length}`)
                state.readingList = state.readingList
                    .filter(review => review._id !== payload)
                // console.log(`reading list size after delete: ${state.readingList.length}`)
                state.read = state.readingList.filter(r => r.finished)
                state.wantToRead = state.readingList.filter(r => !r.finished)
            },
        [updateReadThunk.fulfilled]:
            (state, { payload }) => {
                // console.log(`updateReadThunk payload: ${JSON.stringify(payload)}`)
                state.loading = false
                const idx = state.readingList
                    .findIndex((r) => r._id === payload._id)
                state.readingList[idx] = {
                    ...state.readingList[idx],
                    ...payload
                }
                state.read = state.readingList.filter(r => r.finished)
                state.wantToRead = state.readingList.filter(r => !r.finished)
            },

        // Do not use any of the below unless you are sure you only need that single field:

        [findFinishedReadThunk.pending]:
            (state) => {
                state.loading = true
                state.read = []
            },
        [findFinishedReadThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.read = payload
            },
        [findFinishedReadThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },

        [findUnfinishedReadThunk.pending]:
            (state) => {
                state.loading = true
                state.wantToRead = []
            },
        [findUnfinishedReadThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.wantToRead = payload
            },
        [findUnfinishedReadThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },

        [findFinishedReadByUserIdThunk.pending]:
            (state) => {
                state.loading = true
                state.read = []
            },
        [findFinishedReadByUserIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.read = payload
            },
        [findFinishedReadByUserIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },

        [findUnfinishedReadByUserIdThunk.pending]:
            (state) => {
                state.loading = true
                state.wantToRead = []
            },
        [findUnfinishedReadByUserIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.wantToRead = payload
            },
        [findUnfinishedReadByUserIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },

    }
});

export default wantToReadSlice.reducer;
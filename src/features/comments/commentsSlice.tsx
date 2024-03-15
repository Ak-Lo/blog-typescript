import { createSlice } from "@reduxjs/toolkit";

type CommentsState = {
    id: number
    commentText: string
}

const initialState: CommentsState = {
    id: 77,
    commentText: "comment text"
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        changeId: (state) => {
            state.id = 78
        }
    }
})

export const { changeId } = commentsSlice.actions;

export default commentsSlice.reducer;
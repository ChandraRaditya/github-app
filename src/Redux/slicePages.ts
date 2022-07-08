import { createSlice } from "@reduxjs/toolkit";

export const pagesSlice = createSlice({
    name: "id",
    initialState: {
        value: 1
    },
    reducers: {
        pagesQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { pagesQuery } = pagesSlice.actions;
export default pagesSlice.reducer
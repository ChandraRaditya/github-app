import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
    name: "id",
    initialState: {
        value: null
    },
    reducers: {
        reposQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { reposQuery } = reposSlice.actions;
export default reposSlice.reducer
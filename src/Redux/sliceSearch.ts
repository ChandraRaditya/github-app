import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "id",
    initialState: {
        value: []
    },
    reducers: {
        searchQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { searchQuery } = searchSlice.actions;
export default searchSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "id",
    initialState: {
        value: null
    },
    reducers: {
        modalQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { modalQuery } = modalSlice.actions;
export default modalSlice.reducer
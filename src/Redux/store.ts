import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./sliceSearch";

export default configureStore({
    reducer: {
        serachData: searchReducer
    }
});

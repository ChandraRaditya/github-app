import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "./slicePages";
import searchReducer from "./sliceSearch";

export default configureStore({
    reducer: {
        serachData: searchReducer,
        pagesData: pagesReducer
    }
});

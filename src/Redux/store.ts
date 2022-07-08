import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./sliceModal";
import pagesReducer from "./slicePages";
import reposReducer from "./sliceRepos";
import searchReducer from "./sliceSearch";

export default configureStore({
    reducer: {
        serachData: searchReducer,
        pagesData: pagesReducer,
        reposData: reposReducer,
        modalData: modalReducer
    }
});

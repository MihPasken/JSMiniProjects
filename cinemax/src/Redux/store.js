import { configureStore } from "@reduxjs/toolkit";
import CinemaReducer from "./CinemaSlicer";
import HeaderReducer from "./HeaderSlicer";

// const API_KEY = 4245b374-41f1-4962-ae9f-4e6f3d9044cc


let store = configureStore({
    reducer: {
        Cinema: CinemaReducer,
        Header: HeaderReducer,
    }
});

export default store;


// const API_KEY = 4245b374-41f1-4962-ae9f-4e6f3d9044cc
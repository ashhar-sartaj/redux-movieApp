//here we wil be creating our store.....
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer
    }
})

export default store
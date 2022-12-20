import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/MovieApi";
import { APIkey } from "../../common/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
    "movies/fetchAsyncSeries",
    async () => {
      const seriesText = "Friends";
      const response = await movieApi.get(
        `?apiKey=${APIkey}&s=${seriesText}&type=series`
      );
      return response.data;
    }
  );



  export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncSeriesOrMovieDetail",
    async (id) => {
      const response = await movieApi.get(
        `?apiKey=${APIkey}&i=${id}&Plot=full`
      );
      return response.data;
    }
  );

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow : {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    //the below 52 line of code represents that it will remove the pre-existed selectedMovieOrShow that is present in the        selectMovieOrShow object. 
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully");
      return { ...state, movies: payload }; //movies is the state
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },

    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
        console.log("Fetched successfully");
        return { ...state, shows: payload }; //series is the state
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
        console.log("Fetched successfully");
        return { ...state, selectMovieOrShow: payload }; //series is the state
      },
  },
});
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
//the first movies stands for the name property and the other stands for the state of the movies.

export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;

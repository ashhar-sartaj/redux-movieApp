import React, { useEffect } from 'react'
import MovieListing from "../../components/MovieListing/MovieListing"

import {useDispatch} from 'react-redux' 
// import { addMovies } from '../../features/movies/movieSlice'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'
import { fetchAsyncSeries } from '../../features/movies/movieSlice'
const Home = () => {
  // const movieText = "Harry";
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncSeries())
    //   const fetchMovies = async () => {
    //     const response = await movieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
    //     .catch((err) => {
    //       console.log(err)
    //     });
    //     console.log(response)
    //     dispatch(addMovies(response.data));
    
    // } 
    // fetchMovies();
    
  }, [])
  return (
    <div>
      <div className='banner-image'></div>
      <MovieListing/>
    </div>
  )
}

export default Home

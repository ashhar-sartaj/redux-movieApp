import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import "./MovieDetail.scss"

const MovieDetail = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data)
  useEffect(() => {
    dispatch((fetchAsyncMovieOrShowDetail(imdbID)))
    //to clean up the previous data of useeffect we will use this clean up function from line 15.
    return () => {
      dispatch(removeSelectedMovieOrShow)
    }
  }, [dispatch, imdbID])
  // console.log(data)
  return (
    <div className='movie-section'>

      {/* here from line 24 we will be adding the condition. If we possess movie detail then only we will be rendering the particular JSX else we will rendder some other JSX */}
      {Object.keys(data).length === 0 ? (<div>....Loading</div>): ( 
      <>
      <div className='section-left'>
        <div className='movie-title'>
          {data.Title}
        </div>
        <div className='movie-rating'>
          <span>Imdb rating: <i className='fa fa-star'></i>: {data.imdbRating}</span>
          <span>Imdb votes: <i className='fa fa-thumbs-up'></i>: {data.Votes}</span>
          <span>Run Time: <i className='fa fa-film'></i>: {data.Runtime}</span>
          <span>Year: <i className='fa fa-calender'></i>: {data.Year}</span>
        </div>

        <div className='movie-plot'>
          {data.plot}
        </div>

        <div className='movie-info'>
          <div>
            <span>Director: </span>
            <span>{data.Director} </span>
          </div>

          <div>
            <span>Stars: </span>
            <span>{data.Actors} </span>
          </div>

          <div>
            <span>Genre: </span>
            <span>{data.Genre} </span>
          </div>

          <div>
            <span>Languages: </span>
            <span>{data.Language}</span>
          </div>

          <div>
            <span>Awards: </span>
            <span>{data.Awards} </span>
          </div>

        </div>
      </div>

      <div className='section-right'>
        <img src = {data.Poster}></img>
      </div>
      </>

      )}
    </div>
  )
}

export default MovieDetail

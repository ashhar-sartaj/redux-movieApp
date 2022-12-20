import React from 'react'
import { Link } from 'react-router-dom'
// import MovieRatingLogo from "../../images/MovieRatingLogo"
import MovieRatingLogo from "../../images/MovieRatingLogo.png"
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link to = "/">
        <div className='logo'>Movie App</div>
      </Link>
      <div className='user-image'>
        <img src = {MovieRatingLogo} alt = "user-image"></img>
      </div>
    </div>
  )
}

export default Header

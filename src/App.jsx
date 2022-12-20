import { useState } from 'react'
import './App.scss'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MovieDetail from './components/MovieDetails/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Home from './components/Home/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
        <div className='container'>
          <Routes>
            <Route exact path = "/" element = {<Home/>}></Route>
            <Route path = "/movie/:imdbID" element = {<MovieDetail/>}></Route>
            <Route path='*' element = {<PageNotFound/>}></Route>
          </Routes>
        </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import AllMovies from './pages/AllMovies'
import AllTheatres from './pages/AllTheatres'
import Bookings from './pages/Bookings'
import Theatre from './pages/Theatre'
import Movie from './pages/Movie'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth'element={<Auth/>}/>
      <Route path='/profile'element={<Profile/>}/>
      <Route path='/movies'element={<AllMovies/>}/>
      <Route path='/theatres'element={<AllTheatres/>}/>
      <Route path='/movie'element={<Movie/>}/>
      <Route path='/theatre'element={<Theatre/>}/>
      <Route path='/bookings'element={<Bookings/>}/>
    </Routes>
    </>
  )
}

export default App

import React from 'react'
import LogIn from './pages/Auth/LogIn'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Auth/Register'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<LogIn/>} />
      <Route path="/signup" element={<Register/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
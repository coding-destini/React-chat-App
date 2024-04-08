import React, { useContext } from 'react'
import LogIn from './pages/Auth/LogIn'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Register from './pages/Auth/Register'
import Home from './components/Home'
import { AuthContext } from './context/AuthContext'

const App = () => {
  
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to='/signin'/>
    }
    return children;
  }


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path="/signin" element={<LogIn/>} />
      <Route path="/signup" element={<Register/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
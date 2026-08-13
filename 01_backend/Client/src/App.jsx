import React from 'react'
import './App.css'
import Landing from './pages/Landing'
import Navbar from './pages/Navbar'
import {BrowserRouter } from 'react-router-dom'
import {Router, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'
const App = () => {
  return(
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element=
          {
          <Landing />
          } />
          <Route path="/about" element={
            <ProtectedRoute><About/></ProtectedRoute>

            } />
          
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          
          <Route path="/contact" element={
            <ProtectedRoute><Contact/></ProtectedRoute>
          } />
          <Route path="/signup" element={
            <Signup />
          } />
          <Route path="/login" element={
            <Login />
          } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
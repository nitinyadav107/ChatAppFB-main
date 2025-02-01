import { useState } from 'react'
import './App.css'
import Left from './pages/Left'
import Right from './pages/Right'
import Signup from './components/Signup'
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'

function App() {
  const { authUser } = useAuth();

  return (
    <Routes>

      <Route path='/' element={authUser ? (
        <div className='flex h-screen'>
          <ToastContainer />
          <Left />
          <Right />
        </div>
      ) : (

        <Signup />
      )}
      />
    </Routes>
  )
}

export default App


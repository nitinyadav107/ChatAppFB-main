import React from 'react'
import { ToastContainer } from 'react-toastify'
import Left from './Left'
import Right from './Right'

const Home = () => {
  return (
    <div className='flex h-screen'>
      <ToastContainer />
      <Left/>
      <Right />
    </div>
  )
}

export default Home

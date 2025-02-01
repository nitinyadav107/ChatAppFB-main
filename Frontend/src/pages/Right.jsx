import React from 'react'
import Chatuser from '../components/Chatuser'
import Messages from '../components/Messages'
import Typesend from '../components/Typesend'

const Right = () => {
  return (
    <div className='border 
    border-white bg-slate-800 w-[70%] text-gray-200'>
      <Chatuser/>
      <Messages/>
      <Typesend/>
      
    </div>
  )
}

export default Right

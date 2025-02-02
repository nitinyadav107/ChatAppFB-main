import React from 'react'
import useConversation from '../zustand/useConversation';
import { useSocketContext } from '../context/SocketContext';

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } =
    useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div className={` ${isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}>
      <div className='flex space-x-4  px-6 py-3 hover:bg-slate-700 duration-300 cursor-pointer '>
        <div className="avatar">
          <div className="relative w-12 rounded-full">
            <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

          </div>
          {isOnline && <span className="absolute top-0 right-0 bg-green-500 border border-slate-800 w-3 h-3 rounded-full"></span>}
        </div>
        <div>
          <h1 className='font-semibold text-md'>{user.fullname}</h1>
          <span>{user.email}</span> <br />

        </div>
      </div>

    </div>
  )
}

export default User


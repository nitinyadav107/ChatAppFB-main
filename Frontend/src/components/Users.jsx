import React, { useState } from 'react'
import User from './User'
import GetAllUser from '../context/GetAllUser';

const Users = () => {
   const [allUsers, setAllUsers] = GetAllUser();
   console.log(allUsers);
   
  return (
    <div>
      <h1 className='px-8 py-3 text-white font-semibold bg-slate-800 rounded-lg'>  Messages</h1>
      <div className='element-class overflow-y-scroll h-[calc(100vh-12rem)] '>
        {
          // map over users and render user component
          allUsers.map((user,index) => {
              return <User key={index} user={user} />
             
          })

        }
       

      </div>




    </div>
  )
}

export default Users

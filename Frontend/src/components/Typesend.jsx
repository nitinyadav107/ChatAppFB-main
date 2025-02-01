import React from 'react'
import { IoSend } from "react-icons/io5";

const Typesend = () => {
  return (
    <div className='px-6 py-4'>
      <form action="">
        <div className='flex gap-2'>
          <label className="border-[0px] rounded-lg flex items-center gap-2 w-[80%] bg-slate-900">
            <input type="text" className="outline-none border-none px-2" placeholder="Send Messages" />

          </label>
          <button>
            <IoSend  className='text-4xl p-2 hover:bg-gray-800 rounded-full duration-300' />
          </button>

        </div>


      </form>


    </div>
  )
}

export default Typesend

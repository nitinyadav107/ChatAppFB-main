
const Chatuser = () => {
  return (
    <div>
      <div className='flex space-x-4  px-6 py-3 bg-gray-900 duration-300 cursor-pointer '>
        <div className="avatar online rounded-full">
          <div className="w-12 rounded-full">
            <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className='font-semibold text-md'>Nitin</h1>
          <span >online</span>
        </div>
      </div>
      
    </div>
  )
}

export default Chatuser

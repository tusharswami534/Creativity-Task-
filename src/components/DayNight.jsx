import React, {  useState } from 'react'

const DayNight = () => {
    const [open , setOpen] = useState(false)
    const switchDay = () => {
        setOpen(!open)
    }
  return (
    <div className={`min-h-screen flex justify-center flex-col gap-10 transition-all duration-300 items-center ${open ? 'bg-white' : 'bg-black'}`}>
        <div className={open ? 'size-96 rounded-full overflow-hidden transition-all duration-300 relative bg-blue-50' : 'size-96 bg-slate-950 overflow-hidden border-solid border-black  relative rounded-full transition-all duration-300'}>
          <div className='w-full h-[25%] absolute  z-20 bottom-0 bg-red-900'>
          </div>
          <div className={`size-24 shadow-[0px_0px_50px_0px_#facc15] z-10 bg-yellow-400 absolute  transition-all duration-700 rounded-full ${open ? 'top-[63%] left-[50%] translate-x-[-50%]' : 'top-[100%] left-[-100%]'}`}>
          </div>
          <div className={`size-20 bg-gray-400 rounded-full overflow-hidden absolute  transition-all duration-700   shadow-[0px_10px_50px_0px_#fff] ${open ? 'top-[-100%] left-[100%]' : 'top-[10%] left-[50%] '}`}>
            <div className='relative w-full h-full'>
              <div className='size-2 bg-gray-500 rounded-full shadow-inner top-0 left-2/3 w-1/6 h-1/6 absolute'></div>
              <div className='absolute top-1/4 left-1/6 w-1/4 h-1/4 bg-gray-600 rounded-full shadow-inner size-2'></div>
              <div className='absolute top-1/4 left-1/2 w-1/6 h-1/6 bg-gray-700 rounded-full shadow-innersize-2'></div>
        </div>
      </div> 
        </div>
        <div onClick={switchDay} className={`w-40 border rounded-full p-2  cursor-pointer ${open ? 'border-black' : 'border-white'}`}>
                <div className={open ? 'size-10 bg-yellow-400 rounded-full translate-x-[250%] transition-all duration-300' : 'size-10 bg-gray-400 rounded-full transition-all duration-300'}> 
                </div>
        </div>
        <p className={open ? 'text-black font-bold' : 'text-white font-bold'}>{open ? 'Good Morning' : 'Good Night'}</p>
    </div>
  )
}

export default DayNight

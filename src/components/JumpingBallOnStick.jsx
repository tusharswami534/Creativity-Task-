import React from 'react'

const JumpingBallOnStick = () => {
    return (
        <div className='min-h-screen overflow-hidden flex justify-center items-center flex-col py-10'>
            <div className='size-20 relative'>
                <div className='animation-ball size-20 relative z-30 bg-black rounded-full'></div>
                <div className='animation-white-ball size-28 bg-white absolute z-20 transition-all duration-300 -left-[20%]  bottom-[-20%]'></div>
            </div>
            <div className='animation-stick w-20 relative z-10 h-96 bg-black'></div>
        </div>
    )
}

export default JumpingBallOnStick
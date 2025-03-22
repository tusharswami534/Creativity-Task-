import React from 'react'

const ScrollEffect = () => {
    return (
        <>
            <div className='min-h-screen bg-black flex justify-center items-center flex-col'>
                <h1 className="title text-white pt-[100px] text-center max-md:text-[100px] max-sm:text-[80px] text-[160px] font-sohne">Scroll to see the effect</h1>
                <h2 className='text-[160px] max-md:text-[100px] max-sm:text-[80px]'>⬇️</h2>
            </div>
            <div className='min-h-screen bg-black flex justify-center items-center flex-col'>
                <div className="container py-[160px]">
                    <p className="blur font-sohne text-white max-md:text-[100px] max-sm:text-[80px] font-bold tracking-wide text-center text-[160px]">Hello</p>
                    <p className="blur font-sohne text-white max-md:text-[100px] max-sm:text-[80px] font-bold tracking-wide text-center text-[160px]">World</p>
                    <p className="blur font-sohne text-white max-md:text-[100px] max-sm:text-[80px] font-bold tracking-wide text-center text-[160px]">I am</p>
                    <p className="blur font-sohne text-white max-md:text-[100px] max-sm:text-[80px] font-bold tracking-wide text-center text-[160px]">a</p>
                    <p className="blur font-sohne text-white max-md:text-[100px] max-sm:text-[80px] font-bold tracking-wide text-center text-[160px]">Front-end</p>
                    <p className="blur font-sohne text-white max-md:text-[100px] max-sm:text-[80px] font-bold tracking-wide text-center text-[160px]">Developer</p>
                </div>
            </div>
        </>
    )
}

export default ScrollEffect
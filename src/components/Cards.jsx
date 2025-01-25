import React, {  useLayoutEffect, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cards = () => {
    const [ mouseHover, setMouseHover ] = useState(false);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pinSpacing: false,
                markers: true
            },
        })
        tl.to(".gear-svg", {
           rotate: 360,
        }, 'start')
        tl.to(".gear-svg-2", {
           rotate: -360,
        }, 'start')
    })
  return (
    <>
    <div className='min-h-screen'></div>
    <div  className='min-h-screen bg-black flex justify-center items-center'>
        <div className='max-w-[1140px] gap-10 flex justify-center items-center mx-auto w-full'>
            <div onMouseOver={() => setMouseHover(true)} onMouseOut={() => setMouseHover(false)} className={`w-[300px] h-[500px] relative rounded-lg cursor-pointer transition-all duration-300 bg-white ${mouseHover ? 'rotate-[45deg]' : ''}`}>
                <img className='absolute max-w-[150px] top-[43.5%] left-[11%] gear-svg' src="./assets/svg/gear.svg" alt="" />
                <img className='absolute max-w-[150px] top-[59%] left-[48%] gear-svg-2 rotate-[7deg] ' src="./assets/svg/gear.svg" alt="" />
            </div>
            <div onMouseOver={() => setMouseHover(true)} onMouseOut={() => setMouseHover(false)} className={`w-[300px] h-[500px] relative rounded-lg cursor-pointer transition-all duration-300 bg-white ${mouseHover ? 'rotate-[45deg]' : ''}`}>
                <img className='absolute max-w-[150px] top-[43.5%] left-[11%] gear-svg' src="./assets/svg/gear.svg" alt="" />
                <img className='absolute max-w-[150px] top-[59%] left-[48%] gear-svg-2 rotate-[7deg] ' src="./assets/svg/gear.svg" alt="" />
            </div>
            <div onMouseOver={() => setMouseHover(true)} onMouseOut={() => setMouseHover(false)} className={`w-[300px] h-[500px] relative rounded-lg cursor-pointer transition-all duration-300 bg-white ${mouseHover ? 'rotate-[45deg]' : ''}`}>
                <img className='absolute max-w-[150px] top-[43.5%] left-[11%] gear-svg' src="./assets/svg/gear.svg" alt="" />
                <img className='absolute max-w-[150px] top-[59%] left-[48%] gear-svg-2 rotate-[7deg] ' src="./assets/svg/gear.svg" alt="" />
            </div>
        </div>
    </div>
    <div className='min-h-screen'></div>
    </>
  )
}

export default Cards
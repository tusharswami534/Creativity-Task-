import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const GsapCardAnimations = () => {
    const componentRef = useRef(null);
    useLayoutEffect(() => {
       const ctx = gsap.context(() => {
          const tl = gsap.timeline({
             scrollTrigger: {
                trigger: ".card-section",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true,
                markers: true
             },
          })
          tl.to(".boxs", {
                x: 300,
                duration: 1,
                ease: "easeInOut",
             },)
       } , componentRef);
       return () => ctx.revert();
    }, [])
  return (
    <>
    <div className="flex card-section flex-col selection overflow-hidden" ref={componentRef}>
      <div className='min-h-screen'></div>
      <div className='card-section flex  min-h-screen items-center'>
        <div className="size-96 boxs bg-black"></div>
        <div className="size-96 boxs bg-red-900"></div>
        <div className="size-96 boxs bg-blue-900"></div>
        <div className="size-96 boxs bg-green-900"></div>
        <div className="size-96 boxs bg-blue-500"></div>
      </div>
      <div className='min-h-screen'></div>
      <div className='min-h-screen'></div>
    </div>
    </>
  )
}

export default GsapCardAnimations
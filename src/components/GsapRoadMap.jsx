import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapRoadMap = () => {
  const componentRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".roadmap",
          start: "top top",
          end: "=+250%",
          scrub: 2,
          pin: true,
        },
      })
      tl.to(".roadmap-line", {
        height: '100%',
        duration: 3,
        delay: 0.2,
        ease: "easeInOut",
      }, 'start')

      tl.fromTo(".roadmap-item", {
        x: 100,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.3,
      }, 'start')

      tl.fromTo(".roadmap-text-one", {
        left: '10%',
        opacity: 0,
        position: 'absolute',
      }, {
        left: '3%',
        opacity: 1,
        stagger: 0.3,
        color: '#138808'
      }, 'start')



      tl.to(".roadmap-text-one", {
        opacity: 0,
        left: '-20%',
        stagger: 0.3,
      }, 'second')

      tl.fromTo(".roadmap-text-two", {
        left: '20%',
        opacity: 0,
        position: 'absolute',
      }, {
        left: '3%',
        opacity: 1,
        stagger: 0.3,
      }, 'second')

      tl.to(".roadmap-line-two", {
        height: '100%',
        duration: 3,
        delay: 0.2,
        ease: "easeInOut",
      }, 'second')


      tl.to(".roadmap-text-two", {
        opacity: 0,
        left: '-20%',
        stagger: 0.3,
      }, 'three')

      tl.fromTo(".roadmap-text-three", {
        left: '30%',
        opacity: 0,
        position: 'absolute',
      }, {
        left: '3%',
        opacity: 1,
        stagger: 0.3,
        color: '#FF9933'
      }, 'three')

      tl.to(".roadmap-line-three", {
        height: '100%',
        duration: 3,
        delay: 0.2,
        ease: "easeInOut",
      }, 'three')

    }, componentRef);
    return () => ctx.revert();
  })
  return (
    <>
      <div ref={componentRef}>
        <div className="roadmap flex flex-col justify-center items-center overflow-hidden min-h-screen bg-blue-400 px-5">
          <h1 className="text-8xl text-center uppercase font-sohne max-lg:text-7xl max-md:text-6xl max-sm:text-5xl pb-10">Roadmap</h1>
          <div className="max-w-[1320px] relative flex flex-col gap-5 w-full mx-auto">
            <div className=" absolute max-xl:left-[3%] max-sm:left-[0] roadmap-line w-2.5 translate-x-1/2 bg-[#138808] left-1/2 rounded-3xl"></div>
            <div className=" absolute max-xl:left-[3%] max-sm:left-[0] roadmap-line-two w-2.5 translate-x-1/2 z-20 bg-white left-1/2 rounded-3xl"></div>
            <div className=" absolute max-xl:left-[3%] max-sm:left-[0] roadmap-line-three w-2.5 translate-x-1/2 z-20 bg-[#FF9933] left-1/2 rounded-3xl"></div>
            <div className='w-full flex relative roadmap-item justify-start max-xl:justify-end'>
              <div className="w-[45%] relative bg-black max-xl:w-[90%] p-5 rounded-2xl min-h-24">
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-one">Republic Day honors the adoption of the Constitution, symbolizing India's transformation into a sovereign, democratic, and unified nation.</p>
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-two">India’s progress since becoming a republic showcases its resilience, innovation, and dedication to democracy and development.</p>
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-three opacity-0">This day celebrates India's rich heritage, with cultural performances showcasing the vibrancy of our traditions and art forms.</p>
              </div>
              <div className="top-1/2 bg-red-500 rounded-full left-[50.7%] -translate-x-1/2 -translate-y-1/2 absolute"></div>
            </div>
            <div className='w-full flex roadmap-item justify-end '>
              <div className="w-[45%] relative bg-black max-xl:w-[90%] p-5 rounded-2xl min-h-24">
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-one">This day celebrates the sacrifices of freedom fighters who laid the foundation for a free and equal India.</p>
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-two">The grand parade demonstrates India’s military strength, cultural diversity, and achievements in technology and governance.</p>
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-three opacity-0">The awards recognize individuals who have excelled in fields like bravery, science, and social work, inspiring future generations.</p>
              </div>
            </div>
            <div className='w-full flex roadmap-item justify-start max-xl:justify-end'>
              <div className="w-[45%] relative bg-black max-xl:w-[90%] p-5 rounded-2xl min-h-24">
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-one">Republic Day fosters national pride, reminding us of the strength in our diversity and unity as one nation.</p>
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-two">Honoring the armed forces highlights their unwavering commitment to protecting the nation and ensuring</p>
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-three opacity-0">Republic Day reminds us to uphold democratic values, ensuring equality and justice for every citizen of our diverse country.</p>
              </div>
            </div>
            <div className='w-full flex roadmap-item justify-end'>
              <div className="w-[45%] relative bg-black max-xl:w-[90%] p-5 rounded-2xl min-h-24">
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-one">It reflects the core values of justice, liberty, equality, and fraternity enshrined in our Indian Constitution.</p>
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-two">Republic Day encourages reflection on India’s role as a global leader, contributing to peace, innovation, and cultural exchange.</p>
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-three opacity-0">The celebration fosters social harmony, urging citizens to respect differences while working toward a peaceful, inclusive future.</p>
              </div>
            </div>
            <div className='w-full flex roadmap-item justify-start max-xl:justify-end'>
              <div className="w-[45%] relative bg-black max-xl:w-[90%] p-5 rounded-2xl min-h-24">
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-one">The celebration inspires citizens to actively participate in nation-building and take responsibility for their civic duties.</p>
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-two">Flag hoisting ceremonies symbolize patriotism, with the national anthem uniting people across cultures, languages, and regions.</p>
                <p className="text-white max-w-[550px] max-xl:max-w-[96%] max-sm:text-sm roadmap-text-three opacity-0">Looking forward, Republic Day inspires hope, encouraging us to strive for a stronger, more prosperous, and united India.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GsapRoadMap

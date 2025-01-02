import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapSlider = () => {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".this-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          markers: true,
        },
      });
// ================================First animation================================
      tl.to(".card-one",{
          yPercent: 50,
          xPercent: 100,
          duration: 1,
          ease: "easeInOut",
        },"start-one");

        tl.to(".controller-one",{
          y: -500,
          duration: 1,
          ease: "easeInOut",
        }, "start-one");

      tl.to( ".card-two", {
          yPercent: -30,
          xPercent: 50,
          duration: 1,
          ease: "easeInOut",
        },"start-one");

// ================================Second animation================================

      tl.to(".card-one",{
          yPercent: 155,
          xPercent: -10,
          duration: 1,
          ease: "easeInOut",
        },
        "start-two");

      tl.to(".card-two",{
        yPercent: 50,
        xPercent: 120,
        duration: 1,
        ease: "easeInOut",
        },
        "start-two");

      tl.to(".card-two",{
        yPercent: 70,
        xPercent: 150,
        duration: 1,
        ease: "easeInOut",
        },
        "start-two");

      tl.to(".card-three",{
        yPercent: -20,
        xPercent: 30,
        duration: 1,
        ease: "easeInOut",
        },
        "start-two");

      tl.to(".controller-one",{
        y: -1000,
        duration: 1,
        ease: "easeInOut",
      }, "start-two");

      tl.to(".controller-two",{
        y: -500,
        duration: 1,
        ease: "easeInOut",
      }, "start-two");


// ================================================Third animation================================

      tl.to(".card-one",{
        yPercent: 200,
        xPercent: -150,
        duration: 1,
        ease: "easeInOut",
        },
        "start-three");

      tl.to(".card-two",{
        yPercent: 155,
        xPercent: 30,
        duration: 1,
        ease: "easeInOut",
        },
        "start-three");

      tl.to(".card-three",{
        yPercent: 70,
        xPercent: 150,
        duration: 1,
        ease: "easeInOut",
        },
        "start-three");

      tl.to(".card-four",{
        yPercent: -20,
        xPercent: 30,
        duration: 1,
        ease: "easeInOut",
        },
        "start-three");

      tl.to(".controller-two",{
        y: -1000,
        duration: 1,
        ease: "easeInOut",
      }, "start-three");

      tl.to(".controller-three",{
        y: -500,
        duration: 1,
        ease: "easeInOut",
      }, "start-three");

// ================================Fourth animation================================

      tl.to(".card-two",{
        yPercent: 150,
        xPercent: -150,
        duration: 1,
        ease: "easeInOut",
        },
        "start-four");

      tl.to(".card-three",{
        yPercent: 155,
        xPercent: 30,
        duration: 1,
        ease: "easeInOut",
        },
        "start-four");

      tl.to(".card-four",{
        yPercent: 70,
        xPercent: 150,
        duration: 1,
        ease: "easeInOut",
        },
        "start-four");

      tl.to(".controller-three",{
        y: -1000,
        duration: 1,
        ease: "easeInOut",
      }, "start-four");

      tl.to(".controller-four",{
        y: -500,
        duration: 1,
        ease: "easeInOut",
      }, "start-four");

    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    
    <div ref={componentRef} className="overflow-hidden  bg-gray-200 mx-auto">
     <div className="max-w-[1536px] mx-auto">
     <div className="min-h-screen flex justify-center items-center bg-gray-200">
        <h1 className="text-9xl text-center uppercase font-sohne">Scroll Down </h1>
      </div>
      <div className="this-section min-h-screen flex bg-gray-200 relative overflow-hidden ">
        <div>
        <div className="card card-one w-80 h-[500px] z-50 backdrop-filter  absolute flex justify-center items-center translate-y-[-50%] top-[-10%] left-[-10%]">
          <img className="backdrop-shadow" src="./assets/image/png/controller-1.png" alt="controller" />
        </div>
        <div className="card card-two w-80 h-[500px] z-40 backdrop-blur-sm bg-blue-400 absolute flex justify-center items-center translate-y-[-50%] top-[-20%] left-[-20%]">
          <img className="backdrop-shadow" src="./assets/image/png/controller-2.png" alt="controller" />
        </div>
        <div className="card card-three w-80 h-[500px] backdrop-blur-sm bg-green-400 absolute flex justify-center items-center translate-y-[-50%] top-[-20%] left-[-20%]">
          <img className="backdrop-shadow" src="./assets/image/png/controller-3.png" alt="" />
        </div>
        <div className="card card-four w-80 h-[500px] backdrop-blur-sm bg-yellow-400 absolute flex justify-center items-center translate-y-[-50%] top-[-20%] left-[-20%]">
          <img className="backdrop-shadow" src="./assets/image/png/controller-4.png" alt="" />
        </div>
        </div>
        <div>
          {/* basic controller  */}
            <div className="absolute controller-one top-[110%] right-0 w-[500px] transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-6xl uppercase font-sohne mb-2">DualShock 4</h1>
                <p className="text-2xl">The standard controller for PlayStation 4, known for its ergonomic design and touchpad.</p>
            </div>
            <div className="absolute controller-two top-[110%] right-0 w-[500px] transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-6xl uppercase font-sohne mb-2">DualSense</h1>
                <p className="text-2xl">The controller for PlayStation 5, featuring adaptive triggers and haptic feedback for a more immersive gaming experience.</p>
            </div>

            <div className="absolute controller-three top-[110%] right-0 w-[500px] transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-6xl uppercase font-sohne mb-2">DualShock 3</h1>
                <p className="text-2xl">The controller for PlayStation 3, featuring motion sensing and wireless gameplay.</p>
            </div>

            <div className="absolute controller-four top-[110%] right-0 w-[500px] transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-6xl uppercase font-sohne mb-2">PS Move Controller</h1>
                <p className="text-2xl">A motion-sensing controller used for PlayStation VR and certain PS3 and PS4 games.</p>
            </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-gray-200">
          <h1 className="text-9xl uppercase font-sohne">thank  You</h1>
      </div>
     </div>
    </div>
  );
};

export default GsapSlider;

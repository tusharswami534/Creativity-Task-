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
        },
      });

      // ================================First animation================================

      tl.fromTo(
        ".card-one",
        {
          position: "absolute",
          top: "-70%",
          left: "-30%",
        },
        {
          top: "50%",
          left: "15%",
          yPercent: -50,
          duration: 2,
        },
        "start-one"
      );

      tl.fromTo(
        ".controller-one",
        {
          top: "150%",
          position: "absolute",
          opacity: 0,
        },
        {
          top: "50%",
          yPercent: -50,
          duration: 2,
          ease: "easeInOut",
          opacity: 1,
        },
        "start-one"
      );

      // ================================Second animation================================

      tl.to(
        ".card-one",
        {
          position: "absolute",
          top: "150%",
          left: "-50%",
          duration: 2,
        },
        "start-two"
      );

      tl.fromTo(
        ".card-two",
        {
          position: "absolute",
          top: "-70%",
          left: "-30%",
        },
        {
          top: "50%",
          left: "15%",
          yPercent: -50,
          duration: 2,
        },
        "start-two"
      );

      tl.to(
        ".controller-one",
        {
          top: "-150%",
          position: "absolute",
          duration: 2,
          opacity: 0,
          ease: "easeInOut",
        },
        "start-two"
      );

      tl.fromTo(
        ".controller-two",
        {
          top: "150%",
          position: "absolute",
          opacity: 0,
        },
        {
          top: "50%",
          yPercent: -50,
          duration: 2,
          ease: "easeInOut",
          opacity: 1,
        },
        "start-two"
      );

      // ================================================Third animation================================
      tl.to(
        ".card-two",
        {
          position: "absolute",
          top: "150%",
          left: "-50%",
          duration: 2,
        },
        "start-three"
      );

      tl.fromTo(
        ".card-three",
        {
          position: "absolute",
          top: "-70%",
          left: "-30%",
        },
        {
          top: "50%",
          left: "15%",
          yPercent: -50,
          duration: 2,
        },
        "start-three"
      );

      tl.to(
        ".controller-two",
        {
          top: "-150%",
          position: "absolute",
          duration: 2,
          opacity: 0,
          ease: "easeInOut",
        },
        "start-three"
      );

      tl.fromTo(
        ".controller-three",
        {
          top: "150%",
          position: "absolute",
          opacity: 0,
        },
        {
          top: "50%",
          yPercent: -50,
          duration: 2,
          ease: "easeInOut",
          opacity: 1,
        },
        "start-three"
      );

      // ================================Fourth animation================================

      tl.to(
        ".card-three",
        {
          position: "absolute",
          top: "150%",
          left: "-50%",
          duration: 2,
        },
        "start-four"
      );

      tl.fromTo(
        ".card-four",
        {
          position: "absolute",
          top: "-70%",
          left: "-30%",
        },
        {
          top: "50%",
          left: "15%",
          yPercent: -50,
          duration: 2,
        },
        "start-four"
      );

      tl.to(
        ".controller-three",
        {
          top: "-150%",
          position: "absolute",
          duration: 2,
          opacity: 0,
          ease: "easeInOut",
        },
        "start-four"
      );

      tl.fromTo(
        ".controller-four",
        {
          top: "150%",
          position: "absolute",
          opacity: 0,
        },
        {
          top: "50%",
          yPercent: -50,
          duration: 2,
          ease: "easeInOut",
          opacity: 1,
        },
        "start-four"
      );
    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="overflow-hidden  bg-gray-200 mx-auto">
      <div className="max-w-[1536px] mx-auto">
        <div className="min-h-screen flex justify-center items-center bg-gray-200">
          <h1 className="text-9xl text-center uppercase font-sohne">
            Scroll Down{" "}
          </h1>
        </div>
        <div className="this-section min-h-screen flex bg-gray-200 relative overflow-hidden ">
          <div>
            <div className="card card-one w-80 h-[500px] z-50 bg-transparent flex justify-center items-center">
              <img
                className="backdrop-shadow"
                src="./assets/image/png/controller-1.png"
                alt="controller"
              />
            </div>
            <div className="card card-two w-80 h-[500px] z-40 bg-transparent flex justify-center items-center">
              <img
                className="backdrop-shadow"
                src="./assets/image/png/controller-2.png"
                alt="controller"
              />
            </div>
            <div className="card card-three w-80 h-[500px] bg-transparent flex justify-center items-center">
              <img
                className="backdrop-shadow"
                src="./assets/image/png/controller-3.png"
                alt=""
              />
            </div>
            <div className="card card-four w-80 h-[500px] bg-transparent absolute flex justify-center items-center translate-y-[-50%] top-[-20%] left-[-20%]">
              <img
                className="backdrop-shadow"
                src="./assets/image/png/controller-4.png"
                alt=""
              />
            </div>
          </div>
          <div>
            {/* basic controller  */}
            <div className="absolute controller-one top-[110%] right-0 w-[500px] transform -translate-x-1/2">
              <h1 className="text-6xl uppercase font-sohne mb-2">
                DualShock 4
              </h1>
              <p className="text-2xl">
                The standard controller for PlayStation 4, known for its
                ergonomic design and touchpad.
              </p>
            </div>
            <div className="absolute controller-two right-0 w-[500px] transform -translate-x-1/2">
              <h1 className="text-6xl uppercase font-sohne mb-2">DualSense</h1>
              <p className="text-2xl">
                The controller for PlayStation 5, featuring adaptive triggers
                and haptic feedback for a more immersive gaming experience.
              </p>
            </div>
            <div className="absolute controller-three right-0 w-[500px] transform -translate-x-1/2">
              <h1 className="text-6xl uppercase font-sohne mb-2">
                DualShock 3
              </h1>
              <p className="text-2xl">
                The controller for PlayStation 3, featuring motion sensing and
                wireless gameplay.
              </p>
            </div>
            <div className="absolute controller-four right-0 w-[500px] transform -translate-x-1/2">
              <h1 className="text-6xl uppercase font-sohne mb-2">
                PS Move Controller
              </h1>
              <p className="text-2xl">
                A motion-sensing controller used for PlayStation VR and certain
                PS3 and PS4 games.
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
          <h1 className="text-9xl uppercase font-sohne">thank You</h1>
          <p className="text-3xl ">This Slider only for 1440 screen</p>
        </div>
      </div>
    </div>
  );
};

export default GsapSlider;

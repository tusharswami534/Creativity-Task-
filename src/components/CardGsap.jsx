import React, {  useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

const DummyGsap = () => {
  const TITLE = 'Card Gsap';
  const componentRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".this-section",
          start: "bottom bottom",
          end: "200% bottom",
          scrub: 1,
          pin: true,
        },
      });
      tl
        .to(".card-2", {
          x: 170,
          rotate: 10,
          rotateY: 45,
          duration: 1,
          scale : 1.2,
          ease: "easeInOut",
        }, 'start')
        .to(".card", {
          x: -170,
          rotate: -10,
          rotateY: -45,
          duration: 1,
          scale : 1.2,
          ease: "easeInOut",
        }, 'start')
        .to(".nature-image", {
          duration: 1,
          scale : 1.2,
          ease: "easeInOut",
        }, 'start');
    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
    <Helmet>
      <title>
      {TITLE}
      </title>
    </Helmet>
      <div ref={componentRef}>
        <div className="this-section">
          <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="relative">
              <div className=" nature-image overflow-hidden rounded-md relative z-30 w-40 h-[239px] ">
                <img className="w-full scale-125" src="./assets/image/png/nature-image.png" alt="nature-images" />
              </div>
              <div className="card w-40 rounded-md absolute overflow-hidden top-0 left-0">
                <img className="w-full " src="https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg?t=st=1733998044~exp=1734001644~hmac=4080e6603cff4207c145f6c32516c6a5a5bc6c651e261f0fdb9d61d1990f90c4&w=740" alt="images" />
              </div>
              <div className="card-2 rounded-md overflow-hidden absolute top-0 left-0">
                <img className="w-full " src="https://img.freepik.com/free-photo/assortment-colored-plant-leaves_23-2149337902.jpg?t=st=1733998038~exp=1734001638~hmac=9a5673c6b2a7efbe9934ba0f5db052206af1334216f3ec24f8b3f2259e7d7afa&w=740" alt="images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DummyGsap;
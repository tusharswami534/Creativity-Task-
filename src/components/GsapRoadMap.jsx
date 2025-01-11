import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapRoadMap = () => {
    const componentRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          
        } , componentRef);
        return () => ctx.revert();
    })
  return (
    <div className="flex " ref={componentRef}>
          
    </div>
  )
}

export default GsapRoadMap

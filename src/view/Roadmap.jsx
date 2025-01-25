import React from 'react'
import GsapRoadMap from '../components/GsapRoadMap'

const Roadmap = () => {
  return (
    <>
     <div className="min-h-screen flex justify-center items-center bg-gray-200">
          <h1 className="text-9xl max-sm:text-[80px] text-center uppercase font-sohne">
            Scroll Down{" "}
          </h1>
        </div>
    <GsapRoadMap/>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
          <h1 className="text-9xl max-sm:text-[80px] uppercase font-sohne">thank You</h1>
          <p className="text-5xl uppercase font-sohne">Happy Republic Day </p>
    </div>
    </>
  )
}

export default Roadmap
// import React from 'react'

import gsap from "gsap"

function Loader() {
 
 window.onload = () => {
  gsap.from(".loader",{
    duration:10,
    y:0,
    delay:0.5,
    
  })
  gsap.to(".loader",{
    duration:10,
    y:-1000,
    ease:"elastic",
    delay:1
    })
  }
  return (
    <div className="loader fixed  bg-black z-40 w-full h-screen flex items-center justify-between overflow-hidden">
        <div className="border-b-2 "></div>
        <h1 className="text-[10vw] font-medium">Work. <span className=" absolute shadow-green-500 w-4 h-4 rounded-full bg-green-500"></span> </h1>
        <div className="border-t-2 "></div>
    </div>
  )
}

export default Loader
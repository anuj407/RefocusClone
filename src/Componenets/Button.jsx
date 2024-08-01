/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title="Get Started"}){
  const [index,setindex]= useState(false)
  const handleHover=()=>{
    setindex(true)
  }
  const removHover=()=>{
    setindex(false)
  }
    return(
        <>
          <button onMouseEnter={()=>handleHover()} onMouseLeave={()=>removHover()} className={` bg-[#F1ECFF] min-w-[9.5rem] h-[2.3rem] text-sm px-6 py-2 rounded-full flex flex-col items-center gap-4 overflow-hidden `}>
            <div className={`flex gap-4 ${index === true ? `animate-slideTop`:`animate-slideDown`}`}>
            <span className="text-black">{title}</span> <BsArrowReturnRight className="text-xs mt-1 text-black"/>
            </div>
            <div className={`flex gap-4 ${index === true ? `animate-slideTop`:`animate-slideDown`}`}>
            <span className="text-black">{title}</span> <BsArrowReturnRight className="text-xs mt-1 text-black"/>
            </div>
          
          </button>
        </>
    )
}

export default Button;
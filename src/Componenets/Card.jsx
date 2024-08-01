// import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function Card() {
  return (
    <div className="w-full  flex justify-center">
    <div className="w-[90%] h-[70vh] tablet:h-[50vh] flex-col tablet:flex-row mt-[15vw] flex gap-[0.1rem]">
        <div className="w-full h-[45%] tablet:h-full hover:bg-[#3E3E46]  tablet:w-[30%] flex flex-col justify-between  bg-[#29292E] rounded-3xl p-6">
            <div className="top flex justify-between">
            <p className="text-[5vw] tablet:text-[2vw]">Up Next : News</p>
            <IoIosArrowRoundForward className="text-[8vw] tablet:text-[2vw]"/>
            </div>
            <h1 className="text-[4vw] mb-[15%] w-[70%] font-medium tablet:mb-[40%] tablet:text-[1.7vw]">Insights and Behind the scenes</h1>
            <p className="text-[3.6vw] tablet:text-sm">Explore what drives our team,</p>
        </div>
        <div className={`w-full h-[55%] tablet:h-full tablet:w-[70%] flex flex-col hover:bg-[#7443FF] gap-[2.7vh] bg-[#323238] rounded-3xl p-6 `}>
            <div className="top flex justify-between">
            <p className="text-[4.5vw] tablet:text-[1.7vw]">Get in Touch</p>
            <IoIosArrowRoundForward className="text-[8vw] tablet:text-[2vw] "/>
            </div>
            <h3 className="text-[4.5vw] tablet:text-[1.7vw]">Lets get to it,together</h3>
            <h1 className=" text-[9vw] tablet:text-[7vw] font-medium">Start a Project</h1>
            <button className="w-40 px-4 py-1 border-2 border-[#dadada] rounded-full">Contact us</button>
        </div>
    </div>
    </div>
  )
}

export default Card
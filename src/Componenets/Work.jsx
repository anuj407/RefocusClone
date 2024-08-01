import {  useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
function Work(){
    const [image,setImage]= useState( [
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"50%",left:"50%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"55%",left:"45%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"45%",left:"55%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"56%",left:"50%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"51%",left:"56%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"48%",left:"48%",isActive:false},
        
    ])  
    const { scrollYProgress } = useScroll()
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      function imageShow(arr){
        setImage((prev)=>
         prev.map((item,index)=> 
            
          arr.indexOf(index) ===-1 ?
         {...item,isActive:false} :
         {...item,isActive:true}
         
        )
        )
      }
      const forLaptop =()=>{
          switch(Math.floor(latest*100))
          {
             case 0: imageShow([])
                 break;
             case 1: imageShow([0])
                 break;
             case 2: imageShow([0,1])
                 break;
             case 3: imageShow([0,1,2])
                 break;
             case 4: imageShow([0,1,2,3])
                 break;
             case 6: imageShow([0,1,2,3,4])
                 break;
             case 8: imageShow([0,1,2,3,4,5])
                 break;
          }
      }
      const forMobile =()=>{
          switch(Math.floor(latest*300))
          {
             case 0: imageShow([])
                 break;
             case 1: imageShow([0])
                 break;
             case 2: imageShow([0,1])
                 break;
             case 3: imageShow([0,1,2])
                 break;
             case 4: imageShow([0,1,2,3])
                 break;
             case 5: imageShow([0,1,2,3,4])
                 break;
             case 6: imageShow([0,1,2,3,4,5])
                 break;
          }
      }
      {screen.width > 720 ? forLaptop() : forMobile()}
    })
    return (
        <div className="mt-[15vh] w-full tablet:mt-[6%]">
            <div className=" text-center relative">
                <h1 className="text-[35vw] tablet:text-[30vw] font-medium text-[#F1ECFF]">Work</h1>
                <div className="w-full absolute h-full top-0">
                    {image.map((item,ind)=> item.isActive === true &&
                         <img key={ind} className={`absolute w-[35vw] h-[35vw] tablet:w-[18vw] tablet:h-[18vw] rounded-lg -translate-x-[50%] -translate-y-[50%]`} style={{left:item.left,top:item.top}} src={item.url} alt="" />)}                    
                </div>
                    <p className="w-[90vw] top-[93%] tablet:w-full absolute opacity-50  text-[3.5vw] text-[#F1ECFF] left-[50%] -translate-x-[50%] tablet:text-[1.5vw] tablet:top-[85%]">Web Design, Webflow Devlopment, Creative devlopment</p>
            </div>
        </div>
    )
}
export default Work;
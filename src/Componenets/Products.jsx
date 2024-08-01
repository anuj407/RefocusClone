import { motion } from "framer-motion"
import Product from "./Product"
import { useState } from "react"
import Silvr from "./assets/Silvr.webm"
import Cula from "./assets/Cula.mp4"
import weglot from "./assets/weglot.webm"
import remind from "./assets/remind.webm"
import Maniv from "./assets/Maniv.mp4"
import singu from "./assets/singu.webm"
import rainfall from "./assets/rainfall.webm"

function Products() {
    const [ProductsData,setProductsData] =useState([
      {Name:"Arqitel", Description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:false,case:false,color:"bg-indigo-600",setcolor:false},
      {Name:"Cula", Description:" A 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",live:false,case:false,color:"bg-blue-500",setcolor:false},
      {Name:"Layout Land", Description:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",live:false,case:false,color:"bg-slate-700",setcolor:false},
      {Name:"TTR", Description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",live:false,case:false,color:"bg-indigo-700",setcolor:false},
      {Name:"Maniv", Description:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",live:false,case:false,color:"bg-green-500",setcolor:false},
      {Name:"Singularity", Description:"A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",live:false,case:false,color:"bg-slate-800",setcolor:false},
      {Name:"Like Magic", Description:"We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",live:false,case:false,color:"bg-orange-600",setcolor:false},
      
  ])
  const mouseHover=(ind)=>{
    setProductsData(prev=>
      prev.map((item,index)=> 
         index === ind ?
        {...item,live:true} :
        {...item,live:false}           
       )      
       )  
  }
const caseHover =(indd)=>{
  setProductsData(prev=>
      prev.map((item,index)=> 
         indd ===index && index == 5 ?
        {...item,case:true} :
        {...item,case:false}       
       )
       )
}
 
  const [value,setvalue]=  useState(0)
    const mouseEnter= (val)=>{
        setvalue(val*20)
         mouseHover(val)
         caseHover(val)
         videoSize(val)
         videoSize2(val)
    }
    const [size ,setSize]= useState(0)
   const videoSize = (valuee)=>{
        let values =0
        setSize(valuee*35-values)
        values+=2;
   }
    const [size2 ,setSize2]= useState(0)
   const videoSize2 = (valuee)=>{
      
        setSize2(valuee*70)
        
   }
  return (
    <div className="mt-[10vh] w-full min-h-full relative tablet:mt-8">
        {ProductsData.map((item,ind)=><Product key={ind} setcolor={item.setcolor} color={item.color} index={ind} mouseEnter={mouseEnter} Name={item.Name} Description={item.Description} live={item.live} Case={item.case}/>)}
         <div className=" absolute w-full h-full top-0 pointer-events-none">
            <motion.div initial={screen.width <= 768 ? {y:size2,x:"0%"} : screen.width <= 920 ?{y:size,x:"-50%"}:{y:value,x:"-50%"}}  animate={screen.width <= 768 ? {y:size2+'vh'}:screen.width <= 920 ? {y:size+'vh'}:{y:value+'vw'} } transition={{ease:[0.65, 0, 0.35, 1], duration:0.5}} className={`absolute w-full top-20 flex flex-col gap-y-[45vh] h-[25vh] laptop:mt-0 laptop:gap-0 laptop:w-[30vw] laptop:h-[20vw] laptop:rounded-xl laptop:top-0 laptop:left-[44%] overflow-hidden tablet:left-[75%]  tablet:w-[50vw] tablet:flex tablet:flex-col tablet:h-[25vh] tablet:gap-y-[11vh] tablet:top-0 tablet:mt-[5vh] `}>
                  <motion.div animate={screen.width <= 720 ?{y:-size2+'vh'}:screen.width <= 920 ?{y:-size+'vh'}:{y:-value+'vw'}} transition={{ease:[0.65, 0, 0.35, 1], duration:0.5}} className="w-full h-full " ><video autoPlay loop muted src={Silvr}></video></motion.div>
                  <motion.div animate={screen.width <= 720 ?{y:-size2+'vh'}:screen.width <= 920 ?{y:-size+'vh'}:{y:-value+'vw'}} transition={{ease:[0.65, 0, 0.35, 1], duration:0.5}} className="w-full h-full "><video autoPlay loop muted src={Cula}></video></motion.div>
                  <motion.div animate={screen.width <= 720 ?{y:-size2+'vh'}:screen.width <= 920 ?{y:-size+'vh'}:{y:-value+'vw'}} transition={{ease:[0.65, 0, 0.35, 1], duration:0.5}} className="w-full h-full "><video autoPlay loop muted src={weglot}></video></motion.div>
                  <motion.div animate={screen.width <= 720 ?{y:-size2+'vh'}:screen.width <= 920 ?{y:-size+'vh'}:{y:-value+'vw'}} transition={{ease:[0.65, 0, 0.35, 1], duration:0.5}} className="w-full h-full "><video autoPlay loop muted src={remind}></video></motion.div>
                  <motion.div animate={screen.width <= 720 ?{y:-size2+'vh'}:screen.width <= 920 ?{y:-size+'vh'}:{y:-value+'vw'}} transition={{ease:[0.65, 0, 0.35, 1], duration:0.5}} className="w-full h-full "><video autoPlay loop muted src={Maniv}></video></motion.div>
                  <motion.div animate={screen.width <= 720 ?{y:-size2+'vh'}:screen.width <= 920 ?{y:-size+'vh'}:{y:-value+'vw'}} transition={{ease:[0.65, 0, 0.35, 1], duration:0.5}} className="w-full h-full "><video autoPlay loop muted src={singu}></video></motion.div>
                  <motion.div animate={screen.width <= 720 ?{y:-size2+'vh'}:screen.width <= 920 ?{y:-size+'vh'}:{y:-value+'vw'}} transition={{ease:[0.65, 0, 0.35, 1], duration:0.5}} className="w-full h-full "><video autoPlay loop muted src={rainfall}></video></motion.div>               
            </motion.div>
         </div>
    </div>
  )
}
export default Products
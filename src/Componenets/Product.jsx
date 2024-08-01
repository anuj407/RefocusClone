/* eslint-disable react/prop-types */
import Button from "./Button"

function Product({Name,Description,live,Case,mouseEnter,index,color}) {
  return (
    <div onMouseEnter={()=>mouseEnter(index)}  className={`h-[70vh]  laptop:w-full ${live && `${color}`} laptop:h-[20vw] flex justify-center tablet:h-[35vh] tablet:items-start`}>
      <div className="h-[95%] flex-col justify-between items-center laptop:w-[80%] flex laptop:justify-between laptop:flex-row tablet:flex-col tablet:items-start tablet:justify-between tablet:w-[95%] tablet:pt-8 tablet:h-full">
        <div className=" text-[6vh] font-serif font-semibold laptop:text-[48px] tablet:text-[48px] text-white">{Name}</div>
        <div className="w-[80%]  laptop:w-[30%] text-white  flex gap-4 flex-col tablet:h-[65%] tablet:w-[50%]">
           <p className=" text-[2.5vh] tablet:text-[1.3rem] laptop:text-[1.5vw]">{Description}  </p> 
            <div className="flex justify-center laptop:gap-4 tablet:gap-1 laptop:justify-start">
            {live && <Button title="Live Website"/>}
            {Case && <Button title="Case Study"/>}
            </div>
        </div>
      </div>
    </div>
  )
}
export default Product
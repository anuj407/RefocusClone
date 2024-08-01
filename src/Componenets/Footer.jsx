// import React from 'react'

function Footer() {
  return (
    <div className="w-full flex justify-center ">
      <div className=" flex w-[90%] justify-between mt-10 my-5 flex-col gap-y-10 items-center tablet:flex-row">
          <div className="links w-full gap-[2%] tablet:w-[50%] flex justify-between flex-nowrap">
             {["Privacy Policy","Cookie Policy", "Impressum","Terms","Webflow Agency"].map((item,index)=><a className=" text-sm opacity-50 font-thin -tracking-tighter" key={index} href="">{item}</a>)}
          </div>
       <button>
         <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
       </button>
      </div>
    </div>
  )
}

export default Footer
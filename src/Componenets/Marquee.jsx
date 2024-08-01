/* eslint-disable react/prop-types */
// import React from 'react'

function Marquee({imgUrl}) {
  return (
    <>
    
    <div className="w-full flex py-8 gap-20 animate-slide whitespace-nowrap ">
        {imgUrl.map(items=><img className=" " key={items} src={items}/>)}             
        {imgUrl.map(items=><img className=" " key={items} src={items}/>)}             
        {imgUrl.map(items=><img className=" " key={items} src={items}/>)}             
    </div>
    <div className="w-full flex py-8 gap-20 animate-rightSlide whitespace-nowrap">
        {imgUrl.map(items=><img className=" " key={items} src={items}/>)}                  
        {imgUrl.map(items=><img className=" " key={items} src={items}/>)}                  
        {imgUrl.map(items=><img className=" " key={items} src={items}/>)}                  
    </div>
    </>
  )
}

export default Marquee;
function Stripe() {
    const images =[{url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",number:15},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",number:2},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",number:52},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",number:15},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",number:2},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",number:52}
    ]
  return (
         <>
          {images.map((item,index)=><div  key={index} className="w-[45vw] h-[12vw] tablet:w-[20vw] tablet:h-[5vw] flex justify-around p-4 items-center border-[0.2px] border-[#9f9f9f86] shrink-0 ">
          <img className="w-[19vh] tablet:w-[10vw] tablet:h-[1.9vw]" src={item.url} alt="" />
          <h2 className="text-white text-[1.6vw] font-semibold">{item.number}</h2>         
          </div>)}  
         </>
  )
}
export default Stripe
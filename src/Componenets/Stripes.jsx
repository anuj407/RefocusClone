import Stripe from "./Stripe"
function Stripes() {
  return (
    <div className='w-full mt-[10vh] h-[15vw] tablet:h-[10vw] tablet:mt-3' >
           <div style={{}} className=" w-full scroll-smooth animate-slide h-[7vw] tablet:h-[5vw] shrink-0 flex whitespace-nowrap ">
            <Stripe/>       
            <Stripe/>       
            
           </div>
    </div>
  )
}
export default Stripes
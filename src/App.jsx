import Card from "./Componenets/Card"
import Footer from "./Componenets/Footer"
import Marquees from "./Componenets/Marquees"
import Navbar from "./Componenets/Navbar"
import Products from "./Componenets/Products"
import Stripes from "./Componenets/Stripes"
import Work from "./Componenets/Work"
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="App h-full bg-black overflow-hidden text-white">
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products />
      <Marquees/>
      <Card/>
      <Footer/>    
    </div>
  )
}
export default App
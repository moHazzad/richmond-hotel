
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/SharedCompontes/NavBar'
import cornerImage from '../src/assets/border-corner.png'
import Footer from './Components/SharedCompontes/Footer'

function App() {

  return (
    <>
   <div className='bg-[#3C4A33] p-5'>
   <div className=' border border-[#DCC69C] '>
    <div className='flex justify-between'>
    <img src={cornerImage} alt="" />
    <img className='rotate-90' src={cornerImage} alt="" />
    </div>
   <div className='w-[90%] mx-auto'>
   <NavBar />
     <Outlet />
     <Footer />
   </div>
   <div className='flex justify-between '>
    <img className='-rotate-90' src={cornerImage} alt="" />
    <img className='rotate-180' src={cornerImage} alt="" />
    </div>
   </div>
   </div>
    </>
  )
}

export default App

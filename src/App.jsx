
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/SharedCompontes/NavBar'

function App() {

  return (
    <>
   <div className='bg-[#3C4A33] p-5'>
   <div className=' border border-[#DCC69C]'>
   <div className='w-[90%] mx-auto'>
   <NavBar />
     <Outlet />
   </div>
   </div>
   </div>
    </>
  )
}

export default App

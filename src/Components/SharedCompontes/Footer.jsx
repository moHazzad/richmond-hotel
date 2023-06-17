import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import img from '../../assets/h1-img-2.png'

function Footer() {
  return (
    <>
    <footer className="footer p-10 flex md:flex-row flex-col text-center md:justify-between  text-[#DCC69C] bg-fixed mt-20 " style={{ backgroundImage: `url(${img})`,backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }}>
  <div>
  <a className="text-[#DCC69C] font-bold cursor-pointer  text-2xl uppercase tracking-[.75rem] mb-5">Richmond</a>
  <p className='text-lg'>Reception: + 99 4 11 123 456</p>
  <p className='text-lg'>Office: + 99 4 11 123 456</p>
  <p className='text-lg'>E-mail: example@gmail.com</p>
  <p className='text-lg'>Address: Passeig de Gracia 21</p>
  </div> 
  <div className=''>
    <span className="text-[#DCC69C] font-bold  text-2xl uppercase tracking-[.25rem] mb-5">Subscribe</span> 
    <div className="text-right">
      <div  className='flex items-center'>
        <input className='bg-transparent border-b-2 border-[#DCC69C] text-[#DCC69C] outline-none py-2 px-4' type="email" defaultValue='Email' />
        <button className='px-4 py-2' ><FaArrowRight /> </button>
      </div>
      <div className='my-5 flex text-2xl list-none gap-9'>
        <li href="">fb.</li>
        <li href="">ig.</li>
        <li href="">li.</li>
      </div>
    </div>
  </div>
</footer>
<footer className="footer footer-center  text-[#DCC69C] text-lg">

  <div>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
</>
  )
}

export default Footer
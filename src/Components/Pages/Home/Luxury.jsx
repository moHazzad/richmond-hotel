import Button from '../../SharedCompontes/Button'
// import innerImage from '../../../assets/h1-img-03.jpg'
import innerImage from '../../../assets/pexels-amar-saleem-70441.jpg'

function Luxury() {
  return (
    <>
    <div className='md:w-[40%] '>
        <div className=" border border-[#DCC69C] py-2 px-2">
            <img  className='' src={innerImage} alt="" />
        </div>
    </div>
    <div className='md:w-[60%] '>
        <div className='px-10 flex flex-col  justify-center items-center text-center text-[#DCC69C]'>
        <h2 className='tracking-[.65rem] font-normal text-sm md:text-md'> TRULY PLEASANT AMBIENT </h2>
        <p className='py-5 md:text-3xl text-xl font-semibold'>A luxurious way to spend romantic weekends together. Find our best suites and book your stay with us.</p>
        <Button buttonName={'View More'} />
        </div>
    </div>
    
    
    </>
  )
}

export default Luxury
import bg from '../../../assets/h1-img-2.png'
import hThree from '../../../assets/illumination-night-celebration-near-lake.jpg'
import InnerExellency from './InnerExellency'
import Luxury from './Luxury'

function Exelence() {
  return (
    <div className='py-20' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition:'center', backgroundSize:'contain' }}>
        <div >
            <img className='h-[450px] w-full' src={hThree} alt="" />
        </div>
        <div className='flex md:flex-row flex-col items-center justify-center gap-6 my-20'>
            <InnerExellency />
        </div>
        <div className='flex md:flex-row flex-col items-center justify-center gap-6 my-20'>
            <Luxury />
        </div>
        
    </div>
  )
}

export default Exelence
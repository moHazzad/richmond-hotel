import Connect from "./Connect"
import DateSelection from "./DateSelection"
import Exelence from "./Exelence"
import FeedBack from "./FeedBack"
import Hero from "./Hero"
import Services from "./Services"



function Home() {
  return (
    <div>
        <Hero />
        <div className="my-10">
        <DateSelection />
        </div>
        <div>
            <Exelence />
        </div>
        <FeedBack />
        <div className="my-20">
            <Services />
        </div>
        <div className="my-20 ">
        <video className="w-full " autoPlay loop src="https://player.vimeo.com/external/499538350.sd.mp4?s=349c45dfbff84e8f89dc10eaf3d88968fec0bc97&profile_id=164&oauth2_token_id=57447761"></video>
        </div>
        <div>
            <Connect />
        </div>
    </div>
  )
}

export default Home
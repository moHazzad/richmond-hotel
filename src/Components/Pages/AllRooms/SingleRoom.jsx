import React from 'react'
// import { GiBathtub } from 'react-icons/Gi';
// import { FiMonitor } from 'react-icons/Fi';
// import { FaBed} from 'react-icons/Fa';
// import { FaWifi } from 'react-icons/Fa';


const SingleRoom = ({room}) => {
    console.log(room);

    const { roomPicturs,roomType,capacity,bed, bathroom, details} = room
  return (

<div className="card w-full bg-transparent shadow-xl text-[#DCC69C]">
  <figure className='h-[400px]'><img src={roomPicturs} alt="Shoes" /></figure>
  <div className="card-body">
    <div className='grid grid-cols-2'>
    <div className=''>
    <h2 className="card-title lg:text-5xl md:text-3xl">
    {roomType}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{details}</p>
              <p>{bathroom}</p>
              <p>{bed}</p>
              <p>{capacity}</p>
   
    </div>
    <div>
    {/* <GiBathtub />
    <FiMonitor />
    <FaBed />
    <FaWifi /> */}
    hello
        
    </div>
    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline"> </div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>








    // <div className="card card-side bg-base-100 shadow-xl">
    //         <figure>
    //           <img
    //             src={roomPicturs}
    //             alt="roomsPicture"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">{roomType}</h2>
    //           <p>{details}</p>
    //           <p>{bathroom}</p>
    //           <p>{bed}</p>
    //           <p>{capacity}</p>
              
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Book</button>
    //           </div>
    //         </div>
    //       </div>
  )
}

export default SingleRoom
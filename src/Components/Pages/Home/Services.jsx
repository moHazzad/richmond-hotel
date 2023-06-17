import { useEffect, useState } from 'react';
import axios from 'axios';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('items.json')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 '>     
        {services.map((service, index) => (
          <div className='flex flex-col justify-center items-center card w-full gap-7 py-7 text-[#DCC69C]' key={index}>
            <img className='w-48' src={service.image} alt={`Service ${index + 1}`} />
            <h2 className='card-title font-bold'>{service.title}</h2>
            <p className='text-center font-semibold px-10'>{service.subtitle}</p>
          </div >
        ))}
      
    </div>
  );
}

export default Services;

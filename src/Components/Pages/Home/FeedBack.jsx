import React, { useEffect } from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Style/FeedBack.css";

const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    }
  ];
  

  

function FeedBack() {
  const [opacities, setOpacities] = React.useState([]);
//   const [currentSlide, setCurrentSlide] = React.useState(0);

  const [sliderRef] = useKeenSlider({
    slides: quotes.length,
    loop: true,
    detailsChanged(s) {
      const newOpacities = s.track.details.slides.map((slide) => slide.portion);
      setOpacities(newOpacities);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef) {
        sliderRef.next();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [sliderRef]);

  return (
    <>
    <div className='text-center my-7'>
    <h1 className='tracking-[.50rem] font-normal text-[#DCC69C] '>OUR GUEST’S WORDS</h1>
    </div>
    <div ref={sliderRef} className="fader">
      {quotes.map((src, idx) => (
        <div key={idx} className="fader__slide text-center text-[#DCC69C] " style={{ opacity: opacities[idx] }}>
          
          <h1 className='md:text-3xl text-xl font-semibold md:mb-10 mb-5  '>&quot; {src.quote} &quot;</h1>
          <p className='text-xl tracking-widest'>{src.author}</p>
          
        </div>
      ))}
    </div>
    </>

  );
}

export default FeedBack;

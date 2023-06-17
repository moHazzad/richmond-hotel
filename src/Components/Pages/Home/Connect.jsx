import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";

export default function Connect() {
  const [instaImage, setInstaImage] = useState([]);

  useEffect(() => {
    axios
      .get("ig.json")
      .then((response) => {
        setInstaImage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="flex gap-5 items-center">
        <a
          href="www.instagram.com"
          className="btn btn-circle p-2  bg-slate-900 text-[#DCC69C] text-xl"
        >
          <FaInstagram />
        </a>
        <a
          className="text-xl font-semibold text-[#DCC69C]"
          href="www.instagram.com"
        >
          richmondig.
        </a>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-6  my-10 ">
      {instaImage.map((service, index) => (
  <div className="hero h-64 relative" style={{ backgroundImage: `url(${service.image})` }} key={index}>
    <div className=" hero-overlay bg-black bg-opacity-50 absolute inset-0 opacity-0 transition-opacity duration-300"></div>
    <div className="hero-content text-center text-neutral-content absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
      <div className="max-w-md">
        <h1 className="mb-5 text-3xl font-bold text-white">ig.</h1>
        {/* Add any additional text or content you want to display on hover */}
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
}

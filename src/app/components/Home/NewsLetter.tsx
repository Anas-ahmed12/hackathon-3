'use client';

import Image from 'next/image';
import React from 'react';

const   NewsLetter = () => {
  return (
<>
    <div className="w-full max-w-[1920px] h-[462px] relative m-11 mx-auto">
      {/* Background Image */}
      <Image
        src="/news.png" 
        alt="Promo Banner"
        width={500}
        height={500}
        className="w-full h-full object-cover brightness-125 dark:brightness-90"
      />
      
      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/20 brightness-125">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 capitalize text-center text-[#151875]">
          Get Latest Updates by Subscribe <br /> Our Newsletter
        </h2>
        <button className="px-7 py-3 bg-[#fb2e86] text-white font-semibold  hover:bg-red-600 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
    {/* brands */}
<div>
{/* <Image src="/brand1.png" alt="brand1" /> */}
</div>

</>
);
};
 
// bro tumhara net 
// ab chala ??  ok
export default NewsLetter;

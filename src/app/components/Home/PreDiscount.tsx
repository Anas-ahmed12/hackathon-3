import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PreDiscount = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-[1400px] mx-auto px-4 lg:px-9 py-11">
    {/* Left Box */}
    <div className="relative bg-white/90 dark:bg-[#484848] rounded-lg mb-6 md:mb-0 md:mr-4 w-full md:w-[450px] h-[270px]">
      <div className="relative p-4 w-full h-full bg-[#f7f8f9] dark:bg-[#484848] brightness-110 shadow-lg shadow-[#060607] transition-shadow duration-300 hover:shadow-xl hover:scale-105  transition-transform duration-300 ">
        <h2 className="text-2xl font-bold mb-2 text-[#151875] dark:text-white">23% off in all products</h2>
        <Link href="/shop" className="text-lg text-[#f13f5c] underline underline-offset-2 hover:text-[#d12e4a] transition-colors duration-300 hover:underline-offset-4 ">
          Shop Now
        </Link>
        {/* Image positioned at the bottom right */}
        <Image
          src="/pd1.png"
          alt="Left Box Image"
          height={100}
          width={100}
          objectFit="cover"
          className="absolute bottom-0 right-0 rounded-md h-[200px] w-[200px]"
        />
      </div>
    </div>
  
    {/* Right Box */}
    <div className="relative rounded-lg w-full md:w-[450px] p-4 h-[270px] brightness-110 shadow-lg shadow-[#2a2a2a] dark:shadow-[#484848] !bg-[#EEEFFB] dark:!bg-[#484848] dark:shadow-none transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <div className="absolute top-0 left-0 p-4">
        <h2 className="text-2xl font-bold mb-2 text-[#151875] dark:text-white">23% off in all products</h2>
        <Link href="/shop" className="text-lg text-[#f23e5c] underline underline-offset-2 hover:text-[#d12e4a] transition-colors duration-300 hover:underline-offset-4 ">
          View Collection
        </Link>
      </div>
      {/* Image positioned in the bottom right */}
      <Image
        src="/pd2.png"
        alt="Right Box Image"
        height={100}
        width={100}
        objectFit="cover"
        className="absolute brightness-110 -bottom-10 right-6 rounded-md h-[200px] w-[200px]"
      />
    </div>
  
    {/* Product Boxes */}
    <div className="flex flex-col gap-6 mt-6 md:mt-0">
      <div className="w-full md:w-[267px] h-[74px] flex items-center brightness-110 shadow-md shadow-[#262626] dark:bg-[#484848]  cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          src="/pd3.png"
          alt="Product 1"
          width={74}
          height={74}
          className="rounded-md hover:scale-110 ease-in-out duration-500"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-[#151875] dark:text-white">Executive Seat Chair</h3>
          <p className="line-through text-[#2e33b4] dark:text-white/60">$32.00</p> 
        </div>
      </div>
      <div className="w-full md:w-[267px] h-[74px] flex items-center brightness-110 shadow-md shadow-[#262626] dark:bg-[#484848] dark:shadow-none cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          src="/pd4.png"
          alt="Product 2"
          width={74}
          height={74}
          className="rounded-md hover:scale-110 ease-in-out duration-500"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-[#151875] dark:text-white">Executive quality chair</h3>
          <p className="text-[#2e33b4] dark:text-white/60 line-through">$79.99</p>
        </div>
      </div>
      <div className="w-full md:w-[267px] h-[74px] flex items-center brightness-110 shadow-md shadow-[#3c3b3b] dark:bg-[#484848] dark:shadow-none cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          src="/pd5.png"
          alt="Product 3"
          width={74}
          height={74}
          className ="rounded-md hover:scale-110 ease-in-out duration-500"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-[#151875] dark:text-white">Bestseller Chair</h3>
          <p className="text-[#2e33b4] dark:text-white/60 line-through">$59.99</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PreDiscount;
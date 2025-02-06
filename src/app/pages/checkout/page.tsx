'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import Breadcrumb from '@/app/components/BreadCrumb';
import Brands from '@/app/components/Home/brands';

const Page = () => {
  return (
    <>
    
      <Breadcrumb
        mainHeading="Order Completed"
        miniHeadings={['Home', 'pages', 'Order Completed']}
      />
    <div className="flex flex-col md:flex-row h-screen max-w-[1550px] mx-auto">
      {/* Left Side: Mini Image */}
      <div className="flex-1 p-4 flex items-start justify-center mt-40 ml-11">
        <Image
          src="/con1.png" // Add the path to your mini image
          alt="Left Mini Image"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Center Section: Main Content */}
      <div className="flex-2 p-4 flex flex-col items-center justify-center text-center">
        <div className="mb-6 bg-[#f1f0f0] rounded-full w-20 mt-2 h-20 flex items-center justify-center">
          <FaCheck size={54} className='text-pink-500 mb-4 text-center'/>
        </div>
        <h2 className="text-4xl font-semibold text-[#151875] mb-4 capitalize">your order is confirmed</h2>
        <p className="text-lg mb-6 text-[#4245a0]">
         thankyou for your purchase and we will contact you soon <br /> within 6 hours  you will receive an email confirmation  when your order is ready
        </p>
                <Link href="/" className="bg-pink-600 capitalize text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-300">
           continue shopping
        </Link>
      </div>

      {/* Right Side: Bottom Mini Image */}
      <div className="flex-1 p-4 flex items-end justify-center mb-11">
        <Image
          src="/con2.png" 
          alt="Right Mini Im  age"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
    <div className="flex justify-center items-center max-w-[1540px] mx-auto py-11">
            <Image src="/brand1.png" alt="brand1" />
        </div>
        <Brands/>
    </>
  );
};

export default Page;

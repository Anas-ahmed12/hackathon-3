import Link from 'next/link'
import React from 'react'

const ShippingInfo = () => {
  return (
    <div>
      <div className="md:mt-20 mt-8 max-w-[1400px] mx-auto px-4 md:px-8 lg:ml-16">
        <h3 className="text-[#151875] text-2xl font-semibold mb-3 mt-4 dark:text-white">
          Hekto Demo
        </h3>
        <nav className="flex flex-wrap items-center space-x-1 text-base text-gray-500">
          <Link href="/pages/cart" className="hover:text-gray-900 text-[#151875] font-semibold dark:text-white/70">
            Cart
          </Link>
          <span>/</span>
          <Link href="/pages/information" className="hover:text-gray-900 text-[#151875] font-semibold dark:text-white/70">
            Information
          </Link>
          <span>/</span>
          <Link href="/pages/shippingInfo" className="hover:text-gray-900 text-[#151875] font-semibold dark:text-white/70">
            Shipping
          </Link>
          <span>/</span>
          <Link href="/payment" className="hover:text-gray-900 text-[#151875] font-semibold dark:text-white/70">
            Payment
          </Link>
        </nav>
      </div>

      <div className='mt-11 p-4 pb-16 bg-[#F6F5FF] dark:bg-[#1a1a1a] py-11 lg:ml-20 sm:mr-9'>
        {/* Contact Information Section */}
        <div className='lg:flex justify-between items-center'>
          <h3 className='text-[#151875] dark:text-white mt-6 md:mt-9 text-lg md:text-xl font-semibold'>
            Contact Information
          </h3>
          <div className='flex mt-4 md:mt-0 '>
            <h6 className='text-[14px] text-gray-400 dark:text-white/70 pr-2'>Already have an account?</h6>
            <h6 className='text-[14px] text-pink-500 pr-2'>Log in</h6>
          </div>
        </div>

        {/* Email or Phone Number */}
        <h6 className='text-[14px] text-gray-400 dark:text-white/70 mb-2 mt-6 md:mt-9'>
          Email or mobile phone number
        </h6>
        <div className='border-[1px]'></div>

        {/* Checkbox */}
        <div className='flex items-center gap-2 mt-4 md:mt-8'>
          <input
            className='bg-green-500 w-4 h-4 text-gray-400 border-none'
            type='checkbox'
          />
          <h6 className='text-gray-400 dark:text-white/70 text-[12px]'>
            Keep me up to date on news and exclusive offers
          </h6>
        </div>

        {/* Shipping Address Section */}
        <div className='md:mt-28 mt-12'>
          <h3 className='text-[#151875] dark:text-white text-lg md:text-xl font-semibold mb-6'>
            Shipping Address
          </h3>
          <div>
            {/* First and Last Name */}
            <div className='flex flex-col md:flex-row justify-between gap-6'>
              <div>
                <h6 className='text-gray-400 dark:text-white/70 mb-2'>First name (optional)</h6>
                <div className='border-[1px] w-full md:w-[336px]'></div>
              </div>
              <div>
                <h6 className='text-gray-400 dark:text-white/70 mb-2'>Last name</h6>
                <div className='border-[1px] w-full md:w-[336px]'></div>
              </div>
            </div>

            {/* Address */}
            <div className='py-6'>
              <h6 className='text-gray-400 dark:text-white/70 mb-2'>Address</h6>
              <div className='border-[1px]'></div>
            </div>

            {/* Apartment, Suite, etc. */}
            <div>
              <h6 className='text-gray-400 dark:text-white/70 mb-2'>
                Apartment, Suite, etc. (optional)
              </h6>
              <div className='border-[1px]'></div>
            </div>

            {/* City */}
            <div className='mt-6'>
              <h6 className='text-gray-400 dark:text-white/70 mb-2'>City</h6>
              <div className='border-[1px]'></div>
            </div>

            {/* Country and Postal Code */}
            <div className='flex flex-col md:flex-row justify-between gap-6 mt-6'>
              <div>
                <h6 className='text-gray-400 dark:text-white/70 mb-2'>Country</h6>
                <div className='border-[1px] w-full md:w-[336px]'></div>
              </div>
              <div>
                <h6 className='text-gray-400 dark:text-white/70 mb-2'>Postal Code</h6>
                <div className='border-[1px] w-full md:w-[336px]'></div>
              </div>
            </div>

            {/* Continue Shipping Button */}
            <div className='mt-12 md:mt-28'>
              <button className='text-white bg-pink-600 px-6 py-3 w-full md:w-auto'>
                Continue Shipping
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ShippingInfo

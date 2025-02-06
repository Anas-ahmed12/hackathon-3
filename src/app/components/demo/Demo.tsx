import React from 'react'
import DemoProduct from './demoProduct/demoProduct'
import ShippingInfo from '@/app/components/demo/shippingInfo/shippingInfo'
import Breadcrumb from '../BreadCrumb'

const Demo = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>

<Breadcrumb
        mainHeading="Hekto Demo"
       />

        <div className='xl:container lg:px-[1.3rem] px-[.8rem] lg:flex justify-center gap-8 lg:mb-32'>
            <div className=' lg:w-[770px]'>
                <ShippingInfo/>
            </div>

            <div className='lg:ml-10 lg:w-[400px] '>
                <DemoProduct/>
            </div>
        </div>

    </div>
  )
}

export default Demo
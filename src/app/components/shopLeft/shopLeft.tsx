import Link from 'next/link'


import { BsChevronDown } from 'react-icons/bs'
import { FaListUl, FaRegHeart, FaSearchPlus, FaStar } from 'react-icons/fa'
import { BsFillGridFill } from 'react-icons/bs'
import { CgShoppingCart } from 'react-icons/cg'
import { HiCheck } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Breadcrumb from '../BreadCrumb'
import Brands from '../Home/brands'
import Image from 'next/image'


const shopLeftData = [
    {
        Image: "/sl13.png",
        title: "Dictum morbi",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        des: "this is a test product for testing the shop left sidebar product design .",
    },
    {
        Image: "/sl14.png",
        title: "Sodales sit",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        des: "this is a test product for testing the shop left sidebar product design .",
    },
    {
        Image: "/sl13.png",
        title: "Nibh varius",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        des: "i purchase this product for testing the shop left sidebar product design .",
    },
    {
        Image: "/s1.jpeg",
        title: "Mauris quis",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        des: "i purchase this product for testing the shop left sidebar product design and i am happy with the product and the service as well and i will recommend this product to my friends and family and i will buy this product again.",
    },
    {
        Image: "/s2.jpeg",
        title: "Morbi sagittis",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        des: "i purchase this product for testing the shop left sidebar product design and i am happy with the product and the service as well and i will recommend this product to my friends and family and i will buy this product again.",
    },
    {
        Image: "/s3.jpeg",
        title: "Ultricies venenatis",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        des: "LLatin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and o.",
    },
    {
        Image: "/s13.jpeg",
        title: "Scelerisque dignissim",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        des: "ackages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover mano.",
    }, 
]
const ShopLeft = () => {


    const icon = [
        {
            icon: <CgShoppingCart/>
        },
        {
            icon: <FaRegHeart/>
        },
        {
            icon: <FaSearchPlus/>
        }
    ]

    const filterData = [
        {
            icon: <HiCheck/>,
            title: "Coaster Furniture"
        },
        {
            icon: <HiCheck/>,
            title: "Fusion Dot High Fashion"
        },
        {
            icon: <HiCheck/>,
            title: "Unique Furnitture Restor"
        },
        {
            icon: <HiCheck/>,
            title: "Dream Furnitture Flipping"
        },
        {
            icon: <HiCheck/>,
            title: "Young Repurposed"
        },
        {
            icon: <HiCheck/>,
            title: "Green DIY furniture"
        },
    ]

    const discountData = [
        {
            icon: <HiCheck/>,
            title: '20% Cashback',
        },
        {
            icon: <HiCheck/>,
            title: '5% Cashback Offer',
        },
        {
            icon: <HiCheck/>,
            title: '25% Discount Offer',
        },
    ]

    const reviewData = [
        {
            rating: 4, // number of stars
            count: "(2341)",
        },
        {
            rating: 3, // number of stars
            count: "(1726)",
        },
        {
            rating: 2, // number of stars
            count: "(258)",
        },
        {
            rating: 2, // number of stars
            count: "(25)",
        },
    ]
    

    const categoriesData = [
        {
            title: "Prestashop"
        },
        {
            title: "Magento"
        },
        {
            title: "Bigcommerce"
        },
        {
            title: "osCommerce"
        },
        {
            title: "3dcart"
        },
        {
            title: "Bags"
        },
        {
            title: "Jewellery"
        },
        {
            title: "Watches"
        },
    ]

    const priceData = [
        {
            title: "$0.00 - $150.00"
        },
        {
            title: "$150.00 - $350.00"
        },
        {
            title: "$150.00 - $504.00"
        },
        {
            title: "$450.00 +"
        },
    ]

    const colorName = [
        {
            title: "Blue",
        },
        {
            title: "Orange",
        },
        {
            title: "Brown",
        },
        {
            title: "Green",
        },
        {
            title: "Purple",
        },
        {
            title: "Sky",
        },

    ]



  return (
    <>
    <Breadcrumb
        mainHeading="Shop Left Sidebar"
        miniHeadings={['Home', 'pages', 'Shop Left Sidebar']}
        />
        
  
    <div className='max-w-[1650px] mx-auto px-4 lg:px-8 gap-11 lg:gap-16'>
      <div className="md:container md:px-[1.3rem] px-[.8rem] md:pt-[98px] pt-12 flex items-center justify-between flex-wrap">
        <div className='flex flex-col'>
          <h2 className='text-[#151875] text-xl lg:text-3xl font-bold dark:text-white'>Ecommerce Accessories & Fashion Items</h2>
          <h4 className='text-gray-500 dark:text-white/70'>About 9,620 results (0.62 seconds)</h4>
        </div>
        <div className='hidden lg:flex gap-9'>
          <div className='flex gap-2'>
            <h3 className='text-[#151875] text-base font-normal mt-2  dark:text-white/70'>Per Page: </h3>
            <h3 className='border rounded-sm border-indigo-400 dark:border-white/70 py-4 px-8'></h3>
          </div>
          <div className='flex gap-2'>
            <h3 className='text-[#151875] text-base font-normal mt-2 dark:text-white/70'>Sort By: </h3>
            {/* <h4 className='text-[#151875] border rounded-sm border-indigo-400 dark:border-white/70 py-1 px-3 flex items-center gap-1'> */}
            <select
                id="sort-by"
                className="rounded-sm border border-gray-300 px-2 py-1 text-sm text-[#151875] dark:bg-[#1a1a1a] dark:border-gray-800 dark:text-white cursor-pointer"
              >
                <option>Best Match</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
                <option>Newest First</option>
              </select>
            {/* </h4> */}
          </div>
          <div className='flex gap-8 items-center'>
            <h3 className='text-[#151875] text-base font-normal dark:text-white/70'>View:</h3>
            <FaListUl className='text-[#151875] dark:text-white/70' />
            <BsFillGridFill className='text-[#151875] dark:text-white/70' />
          </div>
        </div>
      </div>
  
      <div className='md:container md:px-[1.3rem] px-[.8rem] md:flex md:mt-24 mt-6 mb-32'>
        <div className='w-full md:w-[350px]'>
          {/* Product Brand */}
          <div>
            <h3 className='text-[#151875] underline underline-offset-4 font-semibold pb-4 text-xl dark:text-white/70'>Product Brand</h3>
            <div>
              {filterData.map((item, index) => (
                <div key={index} className='flex items-center gap-3 py-1'>
                  <input className='bg-[#2f2fd3] text-indigo-500 border-none' type="checkbox" />
                  <h4 className='text-[#4649a3] font-medium dark:text-white/70'>{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
  
          {/* Discount Offer */}
          <div className='mt-12'>
            <h3 className='text-[#151875] dark:text-white/70 underline underline-offset-4 pb-4 text-xl font-bold'>Discount Offer</h3>
            <div>
              {discountData.map((item, index) => (
                <div key={index} className='flex items-center gap-3 py-1'>
                  <input className='bg-pink-300 text-pink-500 border-none' type="checkbox" />
                  <h4 className='text-[#4649a3] font-medium dark:text-white/70'>{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
  
          {/* Rating Item */}
          <div className=' mt-12'>
            <h3 className='text-[#151875] dark:text-white underline underline-offset-4 pb-4 text-xl font-bold'>Rating Item</h3>
            <div>
              {reviewData.map((item, index) => (
                <div key={index} className='flex items-center gap-3 py-1'>
                  <input className='bg-yellow-500 text-yellow border-none' type="checkbox" />
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-${i < item.rating ? 'yellow-500' : 'gray-200'}`} 
                      />
                    ))}
                  </div>
                  <h5 className='text-[#4649a3] font-medium dark:text-white/70'>{item.count}</h5>
                </div>
              ))}
            </div>
          </div>
  
          {/* Categories */}
          <div className='mt-12'>
            <h3 className='text-[#151875] dark:text-white underline underline-offset-4 pb-4 text-xl font-bold'>Categories</h3>
            <div>
              {categoriesData.map((item, index) => (
                <div key={index} className='flex items-center gap-3 py-1'>
                  <input className='bg-pink-500 text-pink-500 border-none dark:bg-white/70 dark:text-pink-500' type="checkbox" />
                  <h4 className='text-[#4649a3] font-medium dark:text-white/70'>{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
  
          {/* Price Filter */}
          <div className='mt-12'>
            <h3 className='text-[#151875] dark:text-white/70 underline underline-offset-4 pb-4 text-xl font-bold'>Price Filter</h3>
            <div>
              {priceData.map((item, index) => (
                <div key={index} className='flex items-center gap-3 py-1'>
                  <input className='bg-pink-500 text-pink-500 border-none dark:bg-white/70 dark:text-pink-500' type="checkbox" />
                  <h4 className='text-[#4649a3] font-medium dark:text-white/70'>{item.title}</h4>
                </div>
              ))}
            </div>
            <div className='relative flex items-center mt-6'>
              <input className="border-2 border-gray-300 bg-white dark:bg-white/30 dark:border-gray-800 h-10 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="$10.00 - $200.00" />
              <div className='absolute right-2'>
                <BiSearch className='text-gray-400 dark:text-white/70' />
              </div>
            </div>
          </div>
  
          {/* Filter by Color */}
          <div className='mt-12 mb-12'>
            <h3 className='text-[#151875] dark:text-white/70 underline underline-offset-4 pb-4 text-xl font-bold'>Filter By Color</h3>
            <div className='grid grid-cols-3 gap-4'>
  <div className='flex items-center gap-2'>
    <div className='w-4 h-4 rounded-full bg-red-500'></div>
    <span className='text-gray-700 dark:text-white/70'>Red</span>
  </div>
  <div className='flex items-center gap-2'>
    <div className='w-4 h-4 rounded-full bg-blue-500'></div>
    <span className='text-gray-700 dark:text-white/70'>Blue</span>
  </div>
  <div className='flex items-center gap-2'>
    <div className='w-4 h-4 rounded-full bg-green-500'></div>
    <span className='text-gray-700 dark:text-white/70 '>Green</span>
  </div>
  <div className='flex items-center gap-2'>
    <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
        <span className='text-gray-700 dark:text-white/70'>Yellow</span>
  </div>
  <div className='flex items-center gap-2'>
    <div className='w-4 h-4 rounded-full bg-purple-500'></div>
    <span className='text-gray-700 dark:text-white/70'>Purple</span>
  </div>
  <div className='flex items-center '>
    <div className='w-4 h-4 rounded-full  bg-orange-500'></div>
    <span className='text-gray-700  dark:text-white/70'>Orange</span>
  </div>
</div>

          </div>
        </div>
  
        {/* Product Listings */}
        <div className='md:ml-8 lg:ml-32 w-full'>
          {shopLeftData.map((item, index) => (
            <div key={index} className='mb-8'>
              <div className='md:flex gap-6 boxShadow p-6 items-center'>
                <div>
                  <Image src={item.Image} alt="" className='w-full h-auto' />
                </div>
                <div>
                  <div className='flex items-center gap-4'>
                    <h3 className='text-[#151875] dark:text-white/70 text-lg font-bold'>{item.title}</h3>
                    <div className='my-3 flex justify-center'>
                      <div className="flex h-3 w-[80px] gap-2">
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-pink-500"></div>
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <h4 className='text-[#151875] dark:text-white/70'>{item.discountPrice}</h4>
                    <h4 className='text-pink-500 line-through '>{item.originalPrice}</h4>
                    <div className='hidden sm:flex   gap-1'>
  {[...Array(5)].map((_, i) => (
    <FaStar key={i} className="text-yellow-500" />
  ))}
</div>


                  </div>
                  <p className='mt-3 md:w-[70%] text-gray-500'>{item.des}</p>
                  <div className='flex items-center gap-4'>
                    {icon.map((item, index) => (
                      <div key={index} className='flex justify-center mt-6 bg-white dark:bg-white/30 rounded-full p-4 shadow-2xl'>
                        <Link href='' className='text-xl text-[#3438a4] dark:text-white/70'>
                          {item.icon}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  <Brands/>
  </>
  )
}

export default ShopLeft
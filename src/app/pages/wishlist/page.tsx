'use client';


import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { removeFromWishlist } from '@/app/wishlistRedux/wishlistSlice';
import Link from 'next/link';
import { FaCartPlus, FaShoppingCart } from 'react-icons/fa';
import { GiSofa } from 'react-icons/gi';
import Breadcrumb from '@/app/components/BreadCrumb';
import { XMarkIcon } from '@heroicons/react/24/outline';
import AddToCartButton from '@/app/components/Cart/AddToCartButton';
import Image from 'next/image';
const WishlistPage = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const dispatch = useDispatch();
  const handleRemove = (id: string) => {
      dispatch(removeFromWishlist(id));
    };
    return (
   <>
   <Breadcrumb 
   mainHeading="Wishlist"
   miniHeadings={["Home","Pages","Wishlist"]}
   />



    <div className="wishlist-page dark:bg-[#0F0F0F]">
      {wishlistItems.length === 0 ? (
        <div className="h-[70vh] flex flex-col justify-center items-center text-center space-y-6">
    
       {/* Shopping Cart Icon */}
       <FaShoppingCart className="text-7xl text-gray-500 mb-4 animate-bounce" />
     
       {/* Empty Wishlist Message */}
       <p className="text-2xl text-gray-700 dark:text-white/70 font-semibold">
         Oops! Your wishlist is currently empty. <span className="text-yellow-500">😔</span>
       </p>
     
       {/* Encouraging Message */}
       <p className="text-gray-600 text-lg">
         But do not worry, we have a wide range of exciting products waiting just for you!
         <br />
         <span className="font-semibold text-[#2F1AC4] flex items-center justify-center">
           Why not start by checking out our most popular items? You can add them to your wishlist with just a click!
           <span className="ml-1 text-2xl">
             <GiSofa className="text-[#2F1AC4]" />
           </span>
         </span>
       </p>
     
       {/* Browse Collection Button */}
       <Link
         href="/pages/shopLeft"
         className="px-8 py-4 bg-[#2F1AC4] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition-all duration-300 cursor-pointer hover:scale-105"
       >
         Explore Our Collection
       </Link>
     </div>
     
      ) : (
        <div >
      <div className="text-center py-11">
  <h2 className="text-2xl sm:text-3xl font-bold text-[#151875] dark:text-white/70">
   It&apos;s Time To Buy Your Favorites!
  </h2>
  <p className="text-gray-500 text-lg mt-2 ">
    Your handpicked items are just a step away. Treat yourself or surprise someone special!
  </p>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 lg:gap-20 p-6">

          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#dbdbdb] dark:bg-white/10 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:shadow-lg hover:scale-105"
            >
              {/* Product Image */}
               <div className="relative bg-gray-100 dark:bg-white/10">
  <Image
    src={item.imageUrl}
    alt={item.title}
    className="w-auto h-auto object-cover"
  />
  <div className="absolute top-2 right-2 flex flex-col items-center space-y-4">
    <button
      onClick={() => handleRemove(item.id)}
      className="bg-red-500 text-white dark:text-white p-1 rounded-full shadow-lg hover:bg-red-600 transition-all"
      >
        {/* <span className="opacity-0">Remove from Wishlist</span> */}
      <XMarkIcon className="w-6 h-6" />
    </button>
    {/* Add to Cart Button */}
    <button
      onClick={() => console.log('Add to Cart')}
      className="bg-green-500 text-white  rounded-full shadow-lg hover:bg-green-600 transition-all"
      title="Add to Cart"
    >
     
     
   <AddToCartButton  
    key={item.id}  
    product={{ 
      ...item, 
      id: item.id.toString(), 
      name: item.title, 
      price: item.price, 
      imageUrl: item.imageUrl, 
    //   colors: item.colors, 
    //   size: item.size 
    }} 
    showText={false}
    // selectedColor={item.colors} // Pass the selected color
    
    />
    </button>
  </div>
</div>


              {/* Product Details */}
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 text-center">
                  ${Number(item.price).toFixed(2)}
                </p>
                <Link href={`/product/${item.id}`}>
                  <button className="w-full bg-[#15c662] hover:bg-[#2F1AC4] text-white text-sm font-semibold py-2 px-5 rounded-md transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>

   </>
  );
};

export default WishlistPage;

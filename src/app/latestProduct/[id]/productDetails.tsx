"use client";

import { useRef, useState } from "react";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import NavigationLinksForDynamicPages from "@/app/components/NavigationLinksForDynamicPages";
import AddToCartButton from "@/app/components/Cart/AddToCartButton";
import WishlistButton from "@/app/components/wishlist/wishListButton";
import Breadcrumb from "@/app/components/BreadCrumb";
import Home from "@/app/page";

interface ProductDetailsProps {
  product: {
    id: number;
  title: string;
  code: string;
  price: number;
  discountedPrice?: number;
  colors: string[];
  images: { [key: string]: string };
  slug: string;
  size?: string; // Add size if it's optional
 
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors.length > 0 ? product.colors[0] : ""); // Default to the first color
const [selectedSize, setSelectedSize] = useState(product.size || ""); // Default size if provided

    const [mainImage, setMainImage] = useState(product.colors.length > 0 ? product.colors[0] : ''); // Initialize with the first color if available

  const { title, price, colors, images } = product;
  // const [hoverStyle, setHoverStyle] = useState({ backgroundPosition: "center" });

  const scrollToSection = (ref:any) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Ensures the section aligns at the top of the container
        inline: 'start', // Aligns horizontally at the start
      });
    }
  };
    
  
  // const { title, price, colors, images } = product;
  // const [mainImage, setMainImage] = useState(colors[0]);
  // const [hoverStyle, setHoverStyle] = useState({ backgroundPosition: "center" });
  const activeButtonClass = 'text-[#222585] underline underline-offset-4';
  const inactiveButtonClass = 'text-[#0d0f43]';
  
  // const [activeLink, setActiveLink] = useState("description");
  const [hoverStyle, setHoverStyle] = useState<{ backgroundPosition: string; backgroundSize?: string }>({ backgroundPosition: "center" });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setHoverStyle({
      backgroundSize: '200%', // Adjust the zoom level as needed
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  return (
   <>
   <Breadcrumb
   mainHeading="Product Details"
   miniHeadings={['Home' , 'Pages'  , 'Product Deatils']}
   />
   <div className="max-w-[1700px] mx-auto p-4">
      {/* Breadcrumb Navbar */}
   

      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 py-11 max-w-6xl mx-auto shadow-lg shadow-gray-300 rounded-lg bg-[#F6F5FF] dark:bg-[#212020] dark:shadow-gray-700">
  
  {/* Left Section */}
  <div className="flex flex-col items-center md:flex-row md:items-start">
    {/* Mini Images - Left Section */}
    <div className="flex flex-row md:flex-col mt-6 space-x-5 md:space-x-0 md:space-y-5 mr-4 mb-4 md:mb-0">
      {colors.slice(0, 3).map((color, index) => (
        <div
          key={index}
          onClick={() => setMainImage(color)}
          className={`w-24 h-24 md:w-32 md:h-32 rounded-md bg-cover bg-center cursor-pointer border ${mainImage === color ? "border-2 border-indigo-500 rounded-md" : "border-gray-300"}`}
          style={{ backgroundImage: `url(${images[color]})` }}
        ></div>
      ))}
    </div>

    {/* Main Image - Right Section */}
    <div
      className="relative w-full md:w-[375px] h-[350px] md:h-[487px] bg-cover bg-no-repeat rounded-md"
      style={{
        backgroundImage: `url(${images[mainImage]})`,
        ...hoverStyle,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverStyle({ backgroundPosition: "center" })}
    ></div>
  </div>

  {/* Right Section */}
  <div className="space-y-3 mt-9 px-4 md:px-0">
    {/* Title */}
    <h1 className="text-2xl md:text-3xl font-bold text-[#0c0c0c] dark:text-white">{title}</h1>

    {/* Ratings */}
    <div className="flex items-center space-x-2 text-lg">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-yellow-500">&#9733;</span>
        ))}
      </div>
      <span className="text-gray-500 dark:text-gray-200 text-sm">(22)</span>
    </div>

    {/* Price */}
    <div className="flex items-center space-x-2">
      <span className="text-lg font-bold text-[#151875] dark:text-white">${price.toFixed(2)}</span>
      <span className="text-sm line-through text-[#F24E1E]">${(price + 10).toFixed(2)}</span>
    </div>

    {/* Colors */}
    <div className="space-y-1 flex items-center gap-5">
      <p className="text-sm font-medium text-[#151875] dark:text-[#6f72ce]">Colors</p>
      <div className="flex space-x-2">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`h-6 w-6 rounded-full border ${mainImage === color ? "ring-2 ring-black/70 dark:ring-white/70" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => setMainImage(color)}
          ></button>
        ))}
      </div>
    </div>

    {/* Description */}
    <p className="text-sm text-gray-500">
      This chair is perfect for modern interiors and provides unmatched comfort.
    </p>

    {/* Add to Cart */}
    <div className="flex space-x-4 items-center">
      {/* <button className="text-[#0d0f43] font-[600] px-4 py-2 rounded-md">Add to Cart</button> */}
      <AddToCartButton
      key={product.id}
      product={{
        ...product,
        id: product.id.toString(),
        name: product.title,
        price: product.price,
        imageUrl: product.images[selectedColor],
        colors: product.colors,
        size: selectedSize, // Pass selected size
      }}
      showText={true}
      selectedColor={selectedColor} // Pass selected color
    />
     
     
     
   <div className="p-1 hover:scale-110  text-[#151875] dark:text-white transition-colors duration-300 ease-linear w-10 h-10 flex justify-center items-center">
  {/* WishlistButton Component */}
  <WishlistButton
    showText={true}
    product={{
      id: product.id.toString(),
      title: product.title,
      price: product.price,
      imageUrl: product.images[selectedColor],
      name: product.title,
      colors: product.colors,
      size: product.size,
    }}
      selectedColor={product.id.toString()}
  />
</div>
    </div>

    {/* Categories */}
    <p className="text-sm">
      <span className="text-[#0d0f43] dark:text-[#6f72ce] text-base font-[600]">Categories:</span> Chairs, Modern
    </p>

    {/* Tags */}
    <p className="text-sm">
      <span className="font-[600] text-base text-[#0d0f43] dark:text-[#6f72ce]">Tags:</span> Comfort, Stylish
    </p>

    {/* Social Share */}
    <div className="space-y-1 flex items-center gap-5">
      <p className="text-base font-[600] text-[#0d0f43] dark:text-[#6f72ce]">Share:</p>
      <div className="flex space-x-4">
        <button className="text-blue-500 z-[999]">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:scale-105 hover:text-[#0d0f43]"/>
        </button>
        <button className="text-red-500 z-[999]">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:scale-105 hover:text-[#0d0f43]"/>
        </button>
        <button className="text-blue-500 z-[999]">
          <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:scale-105 hover:text-[#0d0f43]"/>
        </button>
      </div>
    </div>
  </div>
</div>

     
     {/* Tab Navigation */}
 <NavigationLinksForDynamicPages/>

    </div>
   </>
  );
}

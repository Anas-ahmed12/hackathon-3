'use client'

import { useState } from "react"
import { Heart, Search, ShoppingCart, ChevronRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Brands from "@/app/components/Home/brands"
import Breadcrumb from "@/app/components/BreadCrumb"

interface Product {
  id: number
  name: string
  images: {
    [key: string]: string
  }
  colors: string[]
  price: number
  discountedPrice?: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Comfort Chair",
    images: {
      gray: "/p1.png",
      pink: "/p2.png",
      blue: "/p3.png",
    },
    colors: ["#D7D7D9", "#FB9DA7", "black"],
    price: 199.99,
    discountedPrice: 159.99,
  },
  {
    id: 2,
    name: "Modern Armchair",
    images: {
      pink: "/s1.jpeg",
      blue: "/s2.jpeg",
      gray: "/s3.jpeg",
    },
    colors: ["#FB9DA7", "#2F1AC4", "#D7D7D9"],
    price: 249.99,
    discountedPrice: 199.99,
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    images: {
      blue: "/s4.jpeg",
      gray: "/s7.jpeg",
      pink: "/s6.jpeg",
    },
    colors: ["#2F1AC4", "#D7D7D9", "#FB9DA7"],
    price: 299.99,
  },
  {
    id: 4,
    name: "Travel Backpack",
    images: {
      black: "/s8.jpeg",
      gray: "/s9.jpeg",
      blue: "/s10.jpeg",
    },
    colors: ["#000000", "#D7D7D9", "#2F1AC4"],
    price: 89.99,
    discountedPrice: 69.99,
  },{
    id: 5,
    name: "Comfort Chair",
    images: {
      gray: "/s11.jpeg",
      pink: "/s12.jpeg",
      blue: "/s13.jpeg",
    },
    colors: ["#D7D7D9", "#FB9DA7", "#2F1AC4"],
    price: 199.99,
    discountedPrice: 159.99,
  },
  {
    id: 6,
    name: "Modern Armchair",
    images: {
      pink: "/s14.jpeg",
      blue: "/s15.jpeg",
      // red: "/s17.jpeg",
    },
    colors: ["#FB9DA7", "#2F1AC4"],
    price: 249.99,
    discountedPrice: 199.99,
  },
  {
    id: 7,
    name: "Ergonomic Chair",
    images: {
      blue: "/s17.jpeg",
      gray: "/s18.jpeg",
      pink: "/s19.jpeg",
    },
    colors: ["#2F1AC4", "#D7D7D9", "#FB9DA7"],
    price: 299.99,
  },
  {
    id: 8,
    name: "Travel Backpack",
    images: {
      black: "/s22.jpeg",
      gray: "/s20.jpeg",
      blue: "/s21.jpeg",
    },
    colors: ["#000000", "#D7D7D9", "#2F1AC4"],
    price: 89.99,
    discountedPrice: 69.99,
  },
]

function ProductCard({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [isHovered, setIsHovered] = useState(false)

  const getImageKeyForColor = (color: string) => {
    switch (color) {
      case "#D7D7D9":
        return "gray"
      case "#FB9DA7":
        return "pink"
      case "#2F1AC4":
        return "blue"
      case "#000000":
          return "black"
      default:
          return "gray"
    }
  }

  return (
      <div
      className="group relative flex flex-col py-9"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-[#1a1a1a] hover:bg-[#d7d6db]">
        <Image
          src={product.images[getImageKeyForColor(selectedColor)]}
          alt={product.name}
          fill
          className="object-cover object-center"
        />
        {isHovered && (
          <div className="absolute bottom-4 left-4 flex flex-col space-y-2">
            <button className="rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="rounded-full p-2  transition-transform hover:scale-110">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="rounded-full p-2  transition-transform hover:scale-110">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col items-center space-y-2">
  {/* Product Title */}
  <h3 className="text-lg font-medium text-[#151875] dark:text-white text-center">{product.name}</h3>

  {/* Color Options */}
  <div className="flex justify-center space-x-2">
    {product.colors.map((color) => (
      <button
        key={color}
        className={`h-4 w-4 rounded-full border ${
          selectedColor === color ? "ring-2 ring-gray-400" : ""
        }`}
        style={{ backgroundColor: color }}
        onClick={() => setSelectedColor(color)}
      />
    ))}
  </div>

  {/* Price Section */}
  <div className="flex items-center space-x-2">
    <span className="text-base font-medium text-[#151875] dark:text-white/70">
      ${product.discountedPrice?.toFixed(2) ?? product.price.toFixed(2)}
    </span>
    {product.discountedPrice && (
      <span className="text-base text-[#fb2e86] line-through">
        ${product.price.toFixed(2)}
      </span>
    )}
  </div>
  </div>
  </div>
)
}

export default function ShopGrid() {
  return (
    <div className="min-h-screen ">
      {/* Header Section */}
   
   
      <Breadcrumb
        mainHeading="Shop Grid Default"
        miniHeadings={['Home', 'pages', 'Shop Grid Default']}
      />


      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 md:py-36">
        <div className="mb-8 flex flex-wrap items-center justify-between  pb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl  font-bold text-[#151875] dark:text-white">Ecommerce Accessories & Fashion Store</h2>
            <p className="text-sm text-[#454acb] dark:text-white/80">About 9,620 results (0.62 seconds)</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="per-page" className="text-sm text-[#151875] dark:text-white">Per Page:</label>
              <input
                id="per-page"
                type="number"
                defaultValue={15}
                min={1}
                className="w-16 rounded-sm border border-gray-300 px-2 py-1 text-sm text-[#151875] dark:bg-[#1a1a1a] dark:border-gray-800 dark:text-white"
                />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-by" className="text-sm text-[#151875] dark:text-white">Sort By:</label>
              <select
                id="sort-by"
                className="rounded-sm border border-gray-300 px-2 py-1 text-sm text-[#151875] dark:bg-[#1a1a1a] dark:border-gray-800 dark:text-white cursor-pointer"
              >
                <option>Best Match</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 text-[#151875] dark:text-white">
            {/* <div className="mt-4 flex items-center space-x-4"> */}
  {/* Grid View Icon */}
  View:
  <button
    className="p-2 m-3 sm:m-2 md:m-1 rounded-md bg-[#151875] hover:bg-[#0d0339] transition-colors dark:bg-[#1a1a1a] dark:border-gray-800 dark:text-white"
    aria-label="Grid View"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white dark:text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      >
      <rect x="3" y="3" width="7" height="7" fill="currentColor" />
      <rect x="14" y="3" width="7" height="7" fill="currentColor" />
      <rect x="3" y="14" width="7" height="7" fill="currentColor" />
      <rect x="14" y="14" width="7" height="7" fill="currentColor" />
    </svg>
  </button>

  {/* List View Icon */}
  <button
    className="p-2 rounded-md bg-[#151875] hover:bg-[#0d0339] transition-colors dark:bg-[#1a1a1a] dark:border-gray-800 dark:text-white"
    aria-label="List View"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white dark:text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <rect x="3" y="4" width="18" height="3" fill="currentColor" />
      <rect x="3" y="10" width="18" height="3" fill="currentColor" />
      <rect x="3" y="16" width="18" height="3" fill="currentColor" />
    </svg>
  </button>

  {/* Input Field */}
  <div className="flex items-center space-x-2">
    <label htmlFor="" className="text-sm text-[#151875] dark:text-white">
    
    </label>
    <input
      id=""
      type="text"
      placeholder=""
      className="rounded-md border border-gray-300 px-3 py-2 text-sm w-20 dark:bg-[#1a1a1a] dark:border-gray-800 dark:text-white  "
    />
  {/* </div> */}
</div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Brands/>
    </div>
  )
}


    
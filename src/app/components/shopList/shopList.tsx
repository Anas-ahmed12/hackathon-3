"use client";

import React, { useEffect, useState } from "react";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import Breadcrumb from "../BreadCrumb";
import Brands from "../Home/brands";
import { createClient } from "@sanity/client";
import Image from "next/image";

const client = createClient({
  projectId: "s0uc5o05",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

type Product = {
  _id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  discountPercentage?: number;
};

const ShopList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Product[] = await client.fetch(
          `*[_type == "product"][0..7]{
            _id,
            name,
            "imageUrl": image.asset->url,
            price,
            description,
            discountPercentage
          }`
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto px-4">
      <Breadcrumb mainHeading="Shop List" miniHeadings={["Home", "Pages", "Shop List"]} />
      <div className="mt-12">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6 mb-8"
          >
            <div className="w-full md:w-1/3">
              <Image
                src={item.imageUrl}
                alt={item.name}
                className=" h-52 w-60 object-cover bg-cover rounded-lg ml-44"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-indigo-600 text-xl font-semibold">{item.name}</h3>
              <div className="flex items-center gap-3 mt-2">
                <h4 className="text-gray-700 font-bold text-lg">${item.price}</h4>
                {item.discountPercentage && (
                  <h4 className="text-red-500 font-bold">{item.discountPercentage}% Off</h4>
                )}
              </div>
              <p className="text-gray-500 mt-2 text-sm">{item.description}</p>
              <div className="flex items-center gap-4 mt-4">
                {[CgShoppingCart, FaRegHeart, FaSearchPlus].map((Icon, index) => (
                  <Link
                    key={index}
                    href=""
                    className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full text-indigo-500 shadow-md hover:bg-indigo-500 hover:text-white transition"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Brands />
      </div>
  );
};

export default ShopList;
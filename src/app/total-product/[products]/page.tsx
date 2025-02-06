import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
  colors: string[];
}

interface Params {
  productId: string;
}

const ProductDetail = async ({ params }: { params: Params }) => {
  // Correct query to fetch a single product by its ID
  const query = `*[_type == "product" && _id == $productId][0]{
    _id,
    name,
    "imageUrl": image.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    colors
  }`;

  // Fetch the product using the correct query and productId
  const product: Product | null = await client.fetch(query, { productId: params.productId });

  // If no product is found, show an error message
  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="relative w-full h-96 mb-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex items-center space-x-4">
        <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>
        <span className="text-green-600 font-bold text-lg">
          ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
        </span>
      </div>
      <p className="text-sm text-gray-700 mt-2">Stock: {product.stockLevel}</p>
      <p className="text-sm text-gray-700">Category: {product.category}</p>
      <div className="flex mt-2">
        {product.colors.map((color, i) => (
          <span
            key={i}
            className="w-5 h-5 rounded-full border border-gray-400 mr-2"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
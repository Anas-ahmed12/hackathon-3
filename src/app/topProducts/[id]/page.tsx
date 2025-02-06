import products from "@/app/topProducts/[id]/dataProduct"; 
import { notFound } from "next/navigation";
import ProductDetails from "@/app/topProducts/[id]/productDetails"; 

interface ProductPageProps {
  params: { id: string };   
}

export async function generateStaticParams() {
  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id, 10);
  const product = products.find((p: any) => p.id === productId);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}

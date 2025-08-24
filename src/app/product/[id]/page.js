// app/products/[id]/page.jsx (or .tsx)
import React from "react";
import ProductDetailTwo from "../productDetails";
import { getProductById, getProducts } from "ecom-user-sdk/server";
import NotFound from "@/app/components/not-found";

export async function generateStaticParams() {
  const page = 1; // or whatever default you want
  const limit = 100; // or a big number to get all products
  const filters = {}; // if you have filters

  const res = await getProducts(page, limit, filters);

  //   console.log(res);

  if (res.error) {
    throw new Error(`Failed to fetch products: ${res.error}`);
  }

  //   const products = await res.json();
  //   console.log(products);

  return res.map((product) => ({
    id: product.id.toString(),
  }));
}

// async function getProduct(id) {
//   // Replace with your actual API endpoint
//   const res = await getProductById(id);
//   //   const res = await fetch(`http://localhost:8080/api/products/getById/${id}`, {
//   //     // cache: "force-cache", // to enable SSG
//   //   });
//   //   console.log(res);

//   if (res.error) {
//      return null;
//   }
//   return res;
// }

async function getProduct(id) {
  // Replace with your actual API endpoint
  try {
    const res = await getProductById(id);
    return res;
  } catch (error) {
    return null;
  }
}

export const revalidate = 60;
const Page = async ({ params }) => {
  const { id } = await params;
  const product = await getProduct(id);
  // console.log(product);
  if (!product) {
    return <NotFound />;
  }

  return (
    <div>
      <ProductDetailTwo product={product} />
    </div>
  );
};

export default Page;

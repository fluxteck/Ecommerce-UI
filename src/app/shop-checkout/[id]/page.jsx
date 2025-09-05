// app/products/[id]/page.jsx (or .tsx)
import React from "react";
import { getProductById } from "ecom-user-sdk/server";
import NotFound from "@/app/components/not-found";
import Checkout from "./checkout";

async function getProduct(id) {
  // Replace with your actual API endpoint
  try {
    const res = await getProductById(id);
    return res;
  } catch (error) {
    return null;
  }
}

export const revalidate = 2;
const Page = async ({ params }) => {
  const { id } = await params;

  const product = await getProduct(id);
  // const recentProducts = await getRecentProducts();
  // console.log(product);
  if (!product) {
    return <NotFound />;
  }

  return (
    <div>
      <Checkout product={product} />
    </div>
  );
};

export default Page;

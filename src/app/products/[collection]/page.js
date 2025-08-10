// app/products/[id]/page.jsx (or .tsx)
import React from "react";
import { getProducts } from "ecom-user-sdk/server";
import Colections from "./collection";

// export async function generateStaticParams() {
//   const page = 1; // or whatever default you want
//   const limit = 100; // or a big number to get all products
//   const filters = {}; // if you have filters

//   const res = await getProducts(page, limit, filters);
//   //   console.log(res);

//   if (res.error) {
//     throw new Error(`Failed to fetch products: ${res.error}`);
//   }

//   //   const products = await res.json();
//   //   console.log(products);

//   return res.map((product) => ({
//     id: product.id.toString(),
//   }));
// }

async function getProduct(page, limit, filter) {
  // Replace with your actual API endpoint
  const res = await getProducts(page, limit, filter);
  //   const res = await fetch(`http://localhost:8080/api/products/getById/${id}`, {
  //     // cache: "force-cache", // to enable SSG
  //   });
  //   console.log(res);

  if (res.error) {
    throw new Error("Failed to fetch product");
  }
  return res;
}

const Page = async ({ params, searchParams }) => {
  const { collection } = await params;
  const { page: unparsedPage } = await searchParams;
  const page = parseInt(unparsedPage) || 1; // Default to page 1 if not provided
  const limit = 20;
  const filter = {
    category: collection,
  };
  //   const page = parseInt(searchParams?.page) || 1;
  const product = await getProduct(page, limit, filter);
  if (!product.length) {
    return (
      <div className="text-center text-red-500">
        No products found in this collection.
      </div>
    );
  }
  return (
    <div>
      <Colections products={product} />
    </div>
  );
};

export default Page;

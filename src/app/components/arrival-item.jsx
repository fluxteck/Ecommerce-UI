"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPriceINR } from "./functions/formatPrice";

// import { newProduct } from "../data/data";

// import { FiHeart, FiEye, FiBookmark } from "../assets/icons/vander";

export default function ArrivalItem({ recentProducts }) {
  // console.log(recentProducts);
  const [products, setProducts] = useState(recentProducts);
  // console.log(products);

  useEffect(() => {
    setProducts(recentProducts);
  }, [recentProducts]);

  if (products && products.length === 0) return null;
  return (
    <div className="container lg:mt-24 mt-16">
      <div className="grid grid-cols-1 mb-6 text-center">
        {/* <div>llllassl</div> */}
        <h3 className="font-semibold text-3xl leading-normal">More Jackets</h3>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-6">
        {products &&
          products.map((item, index) => {
            return (
              <div className="group" key={index}>
                <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                  <Link href={`/product/${item.id}`}>
                    <Image
                      src={item.image_url}
                      width={0}
                      height={0}
                      sizes="100vw"
                      unoptimized
                      style={{ width: "100%", height: "auto" }}
                      className="group-hover:scale-110 duration-500"
                      alt=""
                    />
                  </Link>
                  <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                    {/* <Link
                    href="/shop-cart"
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md"
                  >
                    Add to Cart
                  </Link> */}
                  </div>

                  {/* <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                  <li>
                    <Link
                      href="#"
                      className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                    >
                      <FiHeart className="size-4"></FiHeart>
                    </Link>
                  </li>
                  <li className="mt-1 ms-0">
                    <Link
                      href="/shop-item-detail"
                      className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                    >
                      <FiEye className="size-4"></FiEye>
                    </Link>
                  </li>
                  <li className="mt-1 ms-0">
                    <Link
                      href="#"
                      className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                    >
                      <FiBookmark className="size-4"></FiBookmark>
                    </Link>
                  </li>
                </ul> */}

                  {/* <ul className="list-none absolute top-[10px] start-4">
                                    {item.offer === true && (

                                        <li><Link href="#" className="bg-gray-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                    )}
                                    {item.tag === 'New' && (
                                        <li><Link href="#" className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                    )}
                                    {item.tag === 'Featured' && (
                                        <li><Link href="#" className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                    )}
                                </ul> */}
                </div>

                <div className="mt-4">
                  <Link
                    href={`/product/${item.id}`}
                    className="hover:text-red-600 text-lg font-medium"
                  >
                    {item.product_name}
                  </Link>
                  <div className="flex items-center mt-1">
                    Rs.{" "}
                    {item.discount_type === "no-discount" ? (
                      formatPriceINR(item.base_price.toFixed(2))
                    ) : item.discount_type === "percentage" ? (
                      <>
                        {formatPriceINR(
                          (
                            item.base_price -
                            (item.discount * item.base_price) / 100
                          ).toFixed(2)
                        )}
                        <del className="text-red-600 ms-2">
                          {formatPriceINR(item.base_price.toFixed(2))}
                        </del>
                      </>
                    ) : (
                      <>
                        {(item.base_price - item.discount).toFixed(2)}
                        <del className="text-red-600 ms-2">
                          {formatPriceINR(item.base_price.toFixed(2))}
                        </del>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

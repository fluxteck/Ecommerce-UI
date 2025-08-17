"use client";
import React, { useState } from "react";
import Link from "next/link";
import VariationsGrid from "../product/variations";
import { RenderSafeHTML } from "./renderPurifyHtml";
import { useCartActions } from "ecom-user-sdk/cart";

export default function ProductDetail({ product }) {
  console.log(product);
  const [activeVariations, setActiveVariations] = useState([]);
  const { addToCart } = useCartActions();
  let [count, setCount] = useState(1);
  const increments = () => {
    setCount(count + 1);
  };
  const decrements = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  async function handleAddToCart() {
    // console.log(activeVariations);
    // console.log(count);

    const { data, error } = await addToCart({
      userId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      productId: product.id,
      qty: count,
      variationIds: activeVariations,
    });
    // console.log(data);
    console.log(error);
  }
  return (
    <div className="sticky top-20">
      <h5 className="text-2xl font-semibold">{product.product_name}</h5>
      <div className="mt-2">
        <span className="text-slate-400 font-semibold me-1">
          {product.discount_type === "no-discount" ? (
            product.base_price.toFixed(2)
          ) : product.discount_type === "percentage" ? (
            <>
              {(
                product.base_price -
                (product.discount * product.base_price) / 100
              ).toFixed(2)}
              <del className="text-red-600 ms-2">
                {product.base_price.toFixed(2)}
              </del>
            </>
          ) : (
            <>
              {(product.base_price - product.discount).toFixed(2)}
              <del className="text-red-600 ms-2">
                {product.base_price.toFixed(2)}
              </del>
            </>
          )}
        </span>

        {/* <ul className="list-none inline-block text-orange-400">
          <li className="inline">
            <i className="mdi mdi-star text-lg"></i>
          </li>
          <li className="inline">
            <i className="mdi mdi-star text-lg"></i>
          </li>
          <li className="inline">
            <i className="mdi mdi-star text-lg"></i>
          </li>
          <li className="inline">
            <i className="mdi mdi-star text-lg"></i>
          </li>
          <li className="inline">
            <i className="mdi mdi-star text-lg"></i>
          </li>
          <li className="inline text-slate-400 font-semibold">4.8 (45)</li>
        </ul> */}
      </div>
      <div className="mt-4">
        <h5 className="text-lg font-semibold">Overview :</h5>
        <div className="text-slate-400 mt-2">
          <RenderSafeHTML
            html={
              product.description.length > 100
                ? product.description.slice(0, 100) + "..."
                : product.description
            }
          />
        </div>

        {/* <ul className="list-none text-slate-400 mt-4">
          <li className="mb-1 flex ms-0">
            <i className="mdi mdi-check-circle-outline text-red-600 text-xl me-2"></i>{" "}
            Digital Marketing Solutions for Tomorrow
          </li>
          <li className="mb-1 flex ms-0">
            <i className="mdi mdi-check-circle-outline text-red-600 text-xl me-2"></i>{" "}
            Our Talented & Experienced Marketing Agency
          </li>
          <li className="mb-1 flex ms-0">
            <i className="mdi mdi-check-circle-outline text-red-600 text-xl me-2"></i>{" "}
            Create your own skin to match your brand
          </li>
        </ul> */}
      </div>

      <VariationsGrid
        variations={product.variations}
        activeVariations={activeVariations}
        setActiveVariations={setActiveVariations}
      />
      <div className="flex items-center">
        <h5 className="text-lg font-semibold me-2">Quantity:</h5>
        <div className="qty-icons ms-3 space-x-0.5">
          <button
            onClick={() => decrements()}
            className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white minus"
          >
            -
          </button>
          <input
            min="0"
            name="quantity"
            value={count}
            onChange={() => {}}
            type="number"
            className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white pointer-events-none w-16 ps-4 quantity"
          />
          <button
            onClick={() => increments()}
            className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white plus"
          >
            +
          </button>
        </div>
      </div>
      <div className="mt-4 space-x-1 flex flex-col-reverse">
        <Link
          href=""
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-red-600 text-white rounded-md mt-2"
        >
          Shop Now
        </Link>
        <div
          //   href=""
          onClick={handleAddToCart}
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white mt-2 cursor-pointer"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
}

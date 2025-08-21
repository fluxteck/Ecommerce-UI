"use client";
import React, { useState } from "react";
import Link from "next/link";
import VariationsGrid from "../product/variations";
import { RenderSafeHTML } from "./renderPurifyHtml";
import { useCartActions } from "ecom-user-sdk/cart";
import { useRouter } from "next/navigation";

export default function ProductDetail({ product }) {
  // console.log(product);
  const router = useRouter();
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
    // console.log(error);
  }
  async function handleCheckout() {
    await addToCart({
      userId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      productId: product.id,
      qty: count,
      variationIds: activeVariations,
    });
    router.push("/shop-checkout");
  }
  return (
    <div className="sticky top-20">
      <h5 className="text-2xl font-semibold">{product.product_name}</h5>
      <div className="mt-2">
        <span className="text-black-400 font-semibold text-xl me-1">
          Rs.{" "}
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
        <span class="text-slate-400 font-semibold me-1">
          {" "}
          Incluisve off all taxes
        </span>
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
        <div
          onClick={handleCheckout}
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-slate-900 hover:bg-slate-800 text-white rounded-md mt-2 mt-2 cursor-pointer"
        >
          Shop Now
        </div>
        <div
          //   href=""
          onClick={handleAddToCart}
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-slate-800 text-slate-900 hover:text-white mt-2 cursor-pointer"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
}

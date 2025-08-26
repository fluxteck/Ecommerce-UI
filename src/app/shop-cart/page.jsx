"use client";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
// import MobileApp from "../components/mobile-app";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Counter from "../components/counter";
// import { removeFromCart } from "ecom-user-sdk/cart";

// import { cartData } from "../data/data";
import ScrollToTop from "../components/scroll-to-top";
import { useCartContext } from "ecom-user-sdk/context";
import { useCartActions } from "ecom-user-sdk/cart";
import {
  calculateCartTotals,
  calculatePrice,
} from "../components/functions/priceFunctions";
import { useUserContext } from "ecom-user-sdk/context";
import useMessage from "../hook/messageHook";

export default function ShopCart() {
  const {
    cart: cartData,
    loading,
    error,
    // deleteProductInCartContext,
  } = useCartContext();
  const { removeFromCart, fetchCart } = useCartActions();
  const { user, loading: loadingUser } = useUserContext();

  const [cart, setCart] = useState(cartData);
  // console.log(error);

  const { closeMessage, openMessage } = useMessage();

  const [cartTotals, setCartTotals] = useState(null);
  // const userId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // from user context or auth
  //   console.log(loading);
  //   console.log(error);
  useEffect(() => {
    setCart(cartData);
    setCartTotals(calculateCartTotals(cartData));
  }, [cartData]);
  useEffect(() => {
    if (!loadingUser && !user) {
      console.log("Not authenticated user");
    }
    if (user && cart.length === 0) fetchCart({ userId: user.id });
  }, [user, loadingUser]);

  // const calculatePrice = (product) => {
  //   if (product.discount_type === "no-discount") {
  //     return product.base_price;
  //   }
  //   if (product.discount_type === "percentage") {
  //     return product.base_price - (product.discount * product.base_price) / 100;
  //   }
  //   return product.base_price - product.discount;
  // };

  // let subtotal = 0;
  // let totalGST = 0;

  // cart.forEach((item) => {
  //   const price = calculatePrice(item.products);
  //   const itemSubtotal = price * item.quantity;
  //   const itemGST = ((price * item.products.gst_amount) / 100) * item.quantity;

  //   subtotal += itemSubtotal;
  //   totalGST += itemGST;
  // });

  // const grandTotal = subtotal + totalGST;

  async function removeItem(cart_id) {
    const { success, error } = await removeFromCart({
      cart_id,
    });
    closeMessage("Product removed successfully", "success");
    // if (success) await deleteProductInCartContext(cart_id);
    // console.log(success);
    // console.log(error);
  }

  //  const { data, error } = await getCartItems({
  //   userId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  // });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error && error.message ? error.message : error}</div>;
  }
  if (cart.length === 0) {
    return <div> Cart is empty </div>;
  }
  return (
    <>
      <Navbar navClass="defaultscroll is-sticky" />
      <section className="relative table w-full pt-15 pb-2 lg:pt-15 md:pt-13 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">Fashion</h3>
          </div>

          <div className="relative mt-3">
            <ul className="tracking-[0.5px] mb-0 inline-block">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-gray-800">
                <Link href="/">MA Mark</Link>
              </li>
              <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold text-gray-800"
                aria-current="page"
              >
                SHOPCART
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid lg:grid-cols-1">
            <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
              <table className="w-full text-start">
                <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="p-4 w-4"></th>
                    <th scope="col" className="text-start p-4 min-w-[220px]">
                      Product
                    </th>
                    <th scope="col" className="p-4 w-24 min-w-[100px]">
                      Price
                    </th>
                    <th scope="col" className="p-4 w-24 min-w-[100px]">
                      Tax (GST)
                    </th>
                    <th scope="col" className="p-4 w-56 min-w-[220px]">
                      Qty
                    </th>
                    <th scope="col" className="p-4 w-24 min-w-[100px]">
                      Total(Rs.)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => {
                    const product = item.products;
                    const price = calculatePrice(product);
                    const taxedPrice = (price * product.gst_amount) / 100;
                    return (
                      <tr
                        className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800"
                        key={index}
                      >
                        <td className="p-4">
                          <p
                            onClick={() => removeItem(item.id)}
                            className="cursor-pointer"
                          >
                            <i className="mdi mdi-window-close text-red-600"></i>
                          </p>
                        </td>
                        <td className="p-4">
                          <span className="flex items-center">
                            <Image
                              src={item.image}
                              width={48}
                              height={62}
                              className="rounded shadow dark:shadow-gray-800 w-12"
                              alt=""
                            />
                            <span className="ms-3">
                              <span className="block font-semibold">
                                {product.product_name}
                              </span>
                            </span>
                          </span>
                        </td>
                        <td className="p-4 text-center">Rs {price}</td>
                        <td className="p-4 text-center">
                          {product.gst_amount}%
                        </td>
                        <td className="p-4 text-center">
                          <Counter
                            qtn={item.quantity}
                            cartId={item.id} // this is your cart_item_id
                            onQuantityChange={(newQty) => {
                              setCart((prevCart) =>
                                prevCart.map((cartItem) =>
                                  cartItem.id === item.id
                                    ? { ...cartItem, quantity: newQty }
                                    : cartItem
                                )
                              );
                            }}
                          />
                        </td>
                        <td className="p-4  text-end">
                          Rs.
                          {product.tax_inclusive
                            ? price * item.quantity
                            : ((price + taxedPrice) * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
              <div className="lg:col-span-9 md:order-1 order-3">
                <div className="space-x-1">
                  <Link
                    href="shop-checkout"
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-gray-900 text-white rounded-md mt-2"
                  >
                    Shop Now
                  </Link>
                  {/* <Link
                    href=""
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-gray-800/5 hover:bg-gray-800 text-gray-800 hover:text-white mt-2"
                  >
                    Add to Cart
                  </Link> */}
                </div>
              </div>

              <div className="lg:col-span-3 md:order-2 order-1">
                <ul className="list-none shadow dark:shadow-gray-800 rounded-md">
                  <li className="flex justify-between p-4">
                    <span className="font-semibold text-lg">Subtotal :</span>
                    <span className="text-slate-400">
                      Rs.{cartTotals?.subtotal.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="font-semibold text-lg">Taxes :</span>
                    <span className="text-slate-400">
                      Rs.{cartTotals?.totalGST.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="font-semibold text-lg">Shipping :</span>
                    <span className="text-slate-400">Free</span>
                  </li>
                  <li className="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
                    <span className="font-semibold text-lg">Total :</span>
                    <span className="font-semibold">
                      Rs.{cartTotals?.grandTotal.toFixed(2)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <MobileApp /> */}
      </section>
      <Footer />
      {/* <Switcher /> */}
      <ScrollToTop />
    </>
  );
}

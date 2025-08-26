"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import MobileApp from "../components/mobile-app";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ScrollToTop from "../components/scroll-to-top";
import {
  useCartContext,
  useAddressContext,
  useUserContext,
} from "ecom-user-sdk/context";
import {
  calculateCartTotals,
  calculatePrice,
} from "../components/functions/priceFunctions";
import { truncateString } from "../components/functions/sliceString";
import { useAddressActions } from "ecom-user-sdk/user";
import { processOrderPayment } from "ecom-user-sdk/payment/razorpay";
import { useCartActions } from "ecom-user-sdk/cart";
import AddressForm from "../components/addressForm";
import useMessage from "../hook/messageHook";

export default function ShopCheckout() {
  const {
    cart: cartData,
    loading,
    error,
    fetchCart,
    // deleteProductInCartContext,
  } = useCartContext();
  const { address: addressData } = useAddressContext();
  const { addAddress, fetchAddress } = useAddressActions();
  const { user, loading: loadingUser } = useUserContext();
  const {
    register,
    handleSubmit,
    onSubmit,
    reset,
    formState: { errors },
  } = addAddress();
  const { emptyCart } = useCartActions();
  // const userId = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
  const [cart, setCart] = useState(cartData);
  const [cartTotals, setCartTotals] = useState(null);
  const [saveShippingAddress, setSaveShippingAddress] = useState(false);
  const [isAddressSame, setIsAddressSame] = useState(true);
  const { closeMessage, openMessage } = useMessage();
  //   console.log(addressData);

  //   async function fetchAddress(userId) {
  //     const { data, error } = await getAddress(userId);
  //     if (data.length) {
  //       reset(data[0]);
  //     }
  //     if (error) {
  //       console.error("Error fetching address:", error);
  //       return null;
  //     }
  //   }

  useEffect(() => {
    if (!user) return;
    if (cartData && cartData.length === 0) fetchCart({ userId: user.id });
    if (addressData && addressData.length === 0)
      fetchAddress({ user_id: user.id });
  }, [user]);

  useEffect(() => {
    reset(addressData[0] || {});
  }, [addressData]);
  useEffect(() => {
    setCart(cartData);
    setCartTotals(calculateCartTotals(cartData));
  }, [cartData]);

  //   console.log(cartData);

  async function handleCheckout({ data: address, extra }) {
    if (!user) {
      console.log("User not logged in");
      return;
    }

    // console.log(address);
    // console.log(extra);
    // await emptyCart({ user_id: userId });
    if (saveShippingAddress) {
      await onSubmit({
        data: address,
        extra: extra,
      });
    }
    // e.preventDefault();
    const name = address?.first_name + " " + address?.last_name;
    const amount = cartTotals.grandTotal.toFixed(2) * 100;

    const userDetail = {
      name: name,
      email: address.email,
      phone: address.mobile_no,
      user_id: user.id,
    };
    // console.log(user);

    await processOrderPayment({
      amount: amount,
      user: userDetail,
      billing_address: address,
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      shipping_address: address, //shipping address
      onSuccess: async (res) => {
        closeMessage("Order placed successfully", "success");
        if (res?.success) await emptyCart({ user_id: user.id });
        console.log("✅ Payment Success:", res);
      },
      onFailure: (err) => console.error("❌ Payment Failed:", err),
    });
  }
  return (
    <>
      <Navbar navClass="defaultscroll is-sticky" />
      <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
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
                Checkout
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <h3 className="text-xl leading-normal font-semibold">
                  Billing address
                </h3>

                <form
                  //   onSubmit={handleCheckout}
                  onSubmit={handleSubmit((data) =>
                    handleCheckout({
                      data: data,
                      extra: { userId: user?.id, type: "billing" },
                    })
                  )}
                >
                  <AddressForm register={register} errors={errors} />
                  {/* <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">

                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        First Name: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
                        {...register("first_name", {
                          required: "First Name is required",
                        })}
                      />
                      {errors.first_name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.first_name.message}
                        </p>
                      )}
                    </div>

                   
                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        Last Name: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
                        {...register("last_name", {
                          required: "Last Name is required",
                        })}
                      />
                      {errors.last_name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.last_name.message}
                        </p>
                      )}
                    </div>


                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        Your Email: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>


                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        Mobile Number: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
                        {...register("mobile_no", {
                          required: "Mobile Number is required",
                        })}
                      />
                      {errors.mobile_no && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.mobile_no.message}
                        </p>
                      )}
                    </div>


                    <div className="lg:col-span-12">
                      <label className="form-label font-semibold">
                        Address: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Address Line 1"
                        className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
                        {...register("address_line1", {
                          required: "Address is required",
                        })}
                      />
                      {errors.address_line1 && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.address_line1.message}
                        </p>
                      )}
                    </div>


                    <div className="lg:col-span-12">
                      <label className="form-label font-semibold">
                        Address 2:
                      </label>
                      <input
                        type="text"
                        placeholder="Address Line 2"
                        className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
                        {...register("address_line2")}
                      />
                    </div>


                    <div className="lg:col-span-4">
                      <label className="font-semibold">
                        Country: <span className="text-red-600">*</span>
                      </label>
                      <select
                        className="form-select mt-2 w-full py-2 px-3 h-10 rounded border"
                        defaultValue=""
                        {...register("country", {
                          required: "Country is required",
                        })}
                      >
                        <option value="" disabled>
                          Select a country
                        </option>
                        <option value="India">India</option>
                      </select>
                      {errors.country && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.country.message}
                        </p>
                      )}
                    </div>


                    <div className="lg:col-span-4">
                      <label className="font-semibold">
                        State: <span className="text-red-600">*</span>
                      </label>
                      <select
                        className="form-select mt-2 w-full py-2 px-3 h-10 rounded border"
                        defaultValue=""
                        {...register("state", {
                          required: "State is required",
                        })}
                      >
                        <option value="" disabled>
                          Select a state
                        </option>

                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                      </select>
                      {errors.state && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.state.message}
                        </p>
                      )}
                    </div>


                    <div className="lg:col-span-4">
                      <label className="form-label font-semibold">
                        Zip Code: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Zip Code"
                        className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
                        {...register("postal_code", {
                          required: "Zip Code is required",
                        })}
                      />
                      {errors.postal_code && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.postal_code.message}
                        </p>
                      )}
                    </div>


                    <div className="lg:col-span-12">
                      <div className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id="sameaddress"
                          checked={isAddressSame}
                          onChange={() => setIsAddressSame(!isAddressSame)}

                          className="form-checkbox me-2"
                        />
                        <label htmlFor="sameaddress" className="text-slate-400">
                          Shipping address is the same as my billing address
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="savenexttime"
                          checked={saveShippingAddress}
                          onChange={() =>
                            setSaveShippingAddress(!saveShippingAddress)
                          }

                          className="form-checkbox me-2"
                        />
                        <label
                          htmlFor="savenexttime"
                          className="text-slate-400"
                        >
                          Save this information for next time
                        </label>
                      </div>
                    </div>
                  </div> */}
                  <div className="lg:col-span-12 mt-4">
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="sameaddress"
                        checked={isAddressSame}
                        onChange={() => setIsAddressSame(!isAddressSame)}
                        //   {...register("same_as_billing")}
                        className="form-checkbox me-2"
                      />
                      <label htmlFor="sameaddress" className="text-slate-400">
                        Shipping address is the same as my billing address
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="savenexttime"
                        checked={saveShippingAddress}
                        onChange={() =>
                          setSaveShippingAddress(!saveShippingAddress)
                        }
                        //   {...register("save_for_next_time")}
                        className="form-checkbox me-2"
                      />
                      <label htmlFor="savenexttime" className="text-slate-400">
                        Save this information for next time
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="py-2 px-5 w-full bg-gray-800 text-white rounded-md"
                    >
                      Continue to checkout
                    </button>
                  </div>
                </form>

                {/* <h3 className="text-xl leading-normal font-semibold mt-6">
                  Payment
                </h3>

                <form>
                  <div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                      <div className="lg:col-span-12">
                        <div className="block">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                className="form-radio border-gray-100 dark:border-gray-800 text-gray-800 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                                name="radio-colors"
                                value="1"
                                readOnly
                                defaultChecked
                              />
                              <span className="text-slate-400">
                                Credit card
                              </span>
                            </label>
                          </div>
                        </div>

                        <div className="block mt-2">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                className="form-radio border-gray-100 dark:border-gray-800 text-gray-800 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                                name="radio-colors"
                                value="1"
                                readOnly
                              />
                              <span className="text-slate-400">Debit Card</span>
                            </label>
                          </div>
                        </div>

                        <div className="block mt-2">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                className="form-radio border-gray-100 dark:border-gray-800 text-gray-800 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                                name="radio-colors"
                                value="1"
                                readOnly
                              />
                              <span className="text-slate-400">PayPal</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-6">
                        <label className="form-label font-semibold">
                          Account Holder Name :{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                          placeholder="Name:"
                          id="accountname"
                          name="name"
                          required=""
                        />
                      </div>

                      <div className="lg:col-span-6">
                        <label className="form-label font-semibold">
                          Credit card number :{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="number"
                          className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                          placeholder="**** **** **** ****"
                          id="cardnumber"
                          name="number"
                          required=""
                        />
                      </div>

                      <div className="lg:col-span-3">
                        <label className="form-label font-semibold">
                          Expiration : <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="number"
                          className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                          placeholder=""
                          id="expiration"
                          name="number"
                          required=""
                        />
                      </div>

                      <div className="lg:col-span-3">
                        <label className="form-label font-semibold">
                          CVV : <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="number"
                          className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                          placeholder=""
                          id="cvv"
                          name="number"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="mt-4">
                  <input
                    type="submit"
                    className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-gray-800 text-white rounded-md w-full"
                    value="Continue to checkout"
                  />
                </div> */}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <div className="flex justify-between items-center">
                  <h5 className="text-lg font-semibold">Your Cart</h5>

                  <Link
                    href="#"
                    className="bg-gray-800 flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5"
                  >
                    {cart && cart.length}
                  </Link>
                </div>

                <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
                  {cart &&
                    cart.length > 0 &&
                    cart.map((cart, idx) => {
                      const product = cart.products;
                      const price = calculatePrice(product);
                      const taxedPrice = (price * product.gst_amount) / 100;
                      return (
                        <div
                          key={idx}
                          className="p-3 flex justify-between items-center"
                        >
                          <div>
                            <Link
                              href={`/product/${cart.products.id}`}
                              className="font-semibold"
                            >
                              {truncateString(cart.products.product_name, 15)}
                              {/* {cart.products.product_name.slice(0, 14)} */}
                            </Link>
                            {/* <p className="text-sm text-slate-400">
                         Brief description
                       </p> */}
                          </div>

                          <p className="text-slate-400 font-semibold">
                            Rs.
                            {product.tax_inclusive
                              ? price * cart.quantity
                              : ((price + taxedPrice) * cart.quantity).toFixed(
                                  2
                                )}
                          </p>
                        </div>
                      );
                    })}

                  {/* <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 text-green-600">
                    <div>
                      <h5 className="font-semibold">Promo code</h5>
                      <p className="text-sm text-green-600">EXAMPLECODE</p>
                    </div>

                    <p className="text-red-600 font-semibold">-$ 10</p>
                  </div> */}

                  <div className="mt-4 p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">
                        SubTotal
                        {/* {cart.products.product_name.slice(0, 14)} */}
                      </h5>
                      {/* <p className="text-sm text-slate-400">
                         Brief description
                       </p> */}
                    </div>

                    <p className="text-slate-400 font-semibold">
                      Rs.{cartTotals?.subtotal.toFixed(2)}
                    </p>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold">
                        Taxes
                        {/* {cart.products.product_name.slice(0, 14)} */}
                      </h5>
                      {/* <p className="text-sm text-slate-400">
                         Brief description
                       </p> */}
                    </div>

                    <p className="text-slate-400 font-semibold">
                      Rs.{cartTotals?.totalGST.toFixed(2)}
                    </p>
                  </div>
                  <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">Total</h5>
                    </div>

                    <p className="font-semibold">
                      Rs.{cartTotals?.grandTotal.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="subcribe-form mt-6">
                  <div className="relative max-w-xl">
                    <input
                      type="email"
                      id="subcribe"
                      name="email"
                      className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                      placeholder="Promo code"
                    />
                    <button
                      type="submit"
                      className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-gray-800 text-white rounded-full"
                    >
                      Redeem
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Switcher /> */}
      <ScrollToTop />
    </>
  );
}

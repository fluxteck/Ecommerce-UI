"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAddressContext, useUserContext } from "ecom-user-sdk/context";
import { useAddressActions, addUser, getUserByEmail } from "ecom-user-sdk/user";
import { processOrderPayment } from "ecom-user-sdk/payment/razorpay";
import { createOrder } from "ecom-user-sdk/payment/cod";
// import { useCartActions } from "ecom-user-sdk/cart";
import { useRouter, useSearchParams } from "next/navigation";
// import { formatPriceINR } from "../components/functions/formatPrice";
import { addOrderItems } from "ecom-user-sdk/order";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AddressForm from "@/app/components/addressForm";
import useMessage from "@/app/hook/messageHook";
import { mapProductToOrderItems } from "@/app/components/functions/mapCartItemsToOrder";
import { formatPriceINR } from "@/app/components/functions/formatPrice";
import { calculatePrice } from "@/app/components/functions/priceFunctions";
import { truncateString } from "@/app/components/functions/sliceString";

export default function Checkout({ product }) {
  //   console.log(product);
  const price = calculatePrice(product);
  const taxedPrice = (price * product.gst_amount) / 100;
  //   console.log(price);

  const { address: addressData } = useAddressContext();
  const { addAddress, fetchAddress } = useAddressActions();
  const { user, loading: loadingUser } = useUserContext();
  const [isCOD, setIsCOD] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    onSubmit,
    reset,
    formState: { errors },
  } = addAddress();
  const [saveShippingAddress, setSaveShippingAddress] = useState(false);
  const [isAddressSame, setIsAddressSame] = useState(true);
  const { closeMessage, openMessage } = useMessage();
  const searchParams = useSearchParams();

  // Store parsed values
  const [checkoutData, setCheckoutData] = useState({
    qty: 1,
    variations: {},
  });
  //   console.log(checkoutData);

  const fetchProduct = async () => {
    const qty = Number(searchParams.get("qty")) || 1;
    // Build object from query params
    const data = {
      qty: qty,
      variations: {},
    };

    // Add variations dynamically
    searchParams.forEach((value, key) => {
      if (key !== "qty") {
        data.variations[key] = value;
      }
    });
    setCheckoutData({
      ...data,
    });
  };

  useEffect(() => {
    if (!searchParams) return;
    fetchProduct();
  }, [searchParams]);

  useEffect(() => {
    if (!user) return;
    if (addressData && addressData.length === 0)
      fetchAddress({ user_id: user.id });
  }, [user]);

  useEffect(() => {
    reset(addressData[0] || {});
  }, [addressData]);

  async function handleCartCheckout({ data: address }) {
    let userDetails = user;
    const name = address?.first_name + " " + address?.last_name;
    // console.log(userDetails);

    if (!userDetails) {
      openMessage("Creating User...");
      const { data } = await getUserByEmail({
        email: address.email,
      });
      if (data && data.id) {
        userDetails = data;
      } else {
        const { user, error } = await addUser({
          user: {
            email: address.email,
            name: name,
          },
        });

        if (user?.id) userDetails = user;
        else return closeMessage("Something went wrong.", "error");
      }
    }

    // console.log(userDetails);

    openMessage("Processing your order...");
    let extra = { userId: userDetails?.id, type: "billing" };

    if (saveShippingAddress) {
      await onSubmit({
        data: address,
        extra: extra,
      });
    }
    const amount = product.tax_inclusive
      ? Math.round(price * checkoutData.qty) * 100
      : Math.round(((price + taxedPrice) * checkoutData.qty).toFixed(2)) * 100;

    console.log(amount);

    // const amount = Math.round(cartTotals.grandTotal.toFixed(2) * 100);

    const orderItems = mapProductToOrderItems(product, checkoutData);
    const userDetail = {
      name: name,
      email: address.email,
      phone: address.mobile_no,
      user_id: userDetails.id,
    };
    console.log(orderItems);

    if (isCOD) {
      const { data, error } = await createOrder({
        amount,
        currency: "INR",
        user_id: userDetails.id,
        billing_address: address,
        shipping_address: address,
      });
      // console.log(error);

      console.log(data);

      if (data && data.dbOrder && data.dbOrder.id) {
        // console.log(orderItems);
        await addOrderItems({
          order_id: data.dbOrder.order_id,
          order_items: [orderItems],
        });
        // await emptyCart({ user_id: user.id });
        closeMessage("Order placed successfully", "success");
        router.push("/order-successful");
      }
      if (error) {
        closeMessage(error?.message || "Failed to place order", "error");
      }

      console.log(data, error);

      return;
    }
    try {
      await processOrderPayment({
        amount: amount,
        user: userDetail,
        billing_address: address,
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        shipping_address: address, //shipping address
        order_items: [orderItems],
        onSuccess: async (res) => {
          if (res?.success) {
            // await addOrderItems({ order_id: data.dbOrder.id });
            // await emptyCart({ user_id: user.id });
            closeMessage("Order placed successfully", "success");
            router.push("/order-successful");
            return;
          }
          // closeMessage("Payment Failed", "error");

          console.log("✅ Payment Success:", res);
        },
        onFailure: (err) => {
          console.log(err);

          closeMessage("Payment Failed", "error");
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar navClass="defaultscroll is-sticky" />
      <section className="relative table w-full pt-15 pb-2 lg:pt-13 md:pt-13 bg-gray-50 dark:bg-slate-800">
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
                    handleCartCheckout({
                      data: data,
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

                    <div className="flex items-center mb-2">
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
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="cod"
                        checked={isCOD}
                        onChange={() => setIsCOD(!isCOD)}
                        //   {...register("save_for_next_time")}
                        className="form-checkbox me-2"
                      />
                      <label htmlFor="cod" className="text-slate-400">
                        Cash on Delivery
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="py-2 px-5 w-full bg-gray-800 text-white rounded-md"
                    >
                      {isCOD ? "Place Order" : "Continue to checkout"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <div className="flex justify-between items-center">
                  <h5 className="text-lg font-semibold">Order</h5>

                  {/* <Link
                    href="#"
                    className="bg-gray-800 flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5"
                  >
                    {cart && cart.length}
                  </Link> */}
                </div>

                <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <Link
                        href={`/product/${product.id}`}
                        className="font-semibold"
                      >
                        {truncateString(product.product_name, 15)}
                      </Link>
                      <p className="text-sm text-gray-500">
                        Qty:{" "}
                        <span className="font-medium text-gray-300">
                          {checkoutData.qty}
                        </span>
                      </p>

                      {/* Variants */}
                      {checkoutData.variations &&
                        Object.keys(checkoutData.variations).length > 0 && (
                          <p className="text-sm text-gray-500">
                            {Object.entries(checkoutData.variations)
                              .map(([key, value]) => `${key}: ${value}`)
                              .join(", ")}
                          </p>
                        )}
                    </div>

                    <p className="text-slate-400 font-semibold">
                      Rs.
                      {product.tax_inclusive
                        ? formatPriceINR(price)
                        : formatPriceINR((price + taxedPrice).toFixed(2))}
                    </p>
                  </div>

                  <div className="mt-4 p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">SubTotal</h5>
                    </div>

                    <p className="text-slate-400 font-semibold">
                      Rs.{" "}
                      {product.tax_inclusive
                        ? formatPriceINR(price * checkoutData.qty)
                        : formatPriceINR(
                            ((price + taxedPrice) * checkoutData.qty).toFixed(2)
                          )}
                    </p>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold">Taxes</h5>
                    </div>

                    <p className="text-slate-400 font-semibold">
                      Rs.
                      {formatPriceINR(taxedPrice.toFixed(2) * checkoutData.qty)}
                    </p>
                  </div>
                  <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">Total</h5>
                    </div>

                    <p className="font-semibold">
                      Rs.
                      {product.tax_inclusive
                        ? formatPriceINR(price * checkoutData.qty)
                        : formatPriceINR(
                            ((price + taxedPrice) * checkoutData.qty).toFixed(2)
                          )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Switcher /> */}
      {/* <ScrollToTop /> */}
    </>
  );
}

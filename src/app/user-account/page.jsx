"use client";
import React, { useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";

import Navbar from "../components/navbar";
import Usertab from "../components/user-tab";
// import Switcher from "../components/switcher";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";

// import { userFvtItem, userOrder } from "../data/data";
// import { FiTrash2 } from "../assets/icons/vander";
import { useOrderActions } from "ecom-user-sdk/order";
import { useUserContext, useOrderContext } from "ecom-user-sdk/context";
import formatDate from "../components/functions/formatDate";

export default function UserAccount() {
  const { user, loading: loadingUser } = useUserContext();
  const { orders, loading, pagination } = useOrderContext();
  const { getOrder } = useOrderActions();
  // console.log(pagination);

  // console.log(orders);
  const getOrders = async (userId) => {
    const { data, error } = await getOrder({ userId });
    // console.log(data);
    // console.log(error);
  };
  useEffect(() => {
    if (user) getOrders(user.id);
  }, [user]);

  return (
    <>
      <Navbar navClass="defaultscroll is-sticky" />

      <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
        <div className="md:container container-fluid relative">
          <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-[url('/images/hero/pages.jpg')] bg-center bg-no-repeat bg-cover"></div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="md:flex">
            <Usertab />

            <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
              <h5 className="text-lg font-semibold mb-6">My Orders</h5>
              <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                <table className="w-full text-start text-slate-500 dark:text-slate-400">
                  <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                    <tr className="text-start">
                      <th
                        scope="col"
                        className="px-2 py-3 text-start"
                        style={{ minWidth: "104px" }}
                      >
                        Order Id
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start"
                        style={{ minWidth: "140px" }}
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start"
                        style={{ minWidth: "120px" }}
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start"
                        style={{ minWidth: "140px" }}
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start"
                        style={{ minWidth: "140px" }}
                      >
                        Payment Status
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start"
                        style={{ minWidth: "100px" }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders &&
                      orders.length > 0 &&
                      orders.map((item, index) => {
                        return (
                          <tr
                            className="bg-white dark:bg-slate-900 text-start"
                            key={index}
                          >
                            <th className="px-2 py-3 text-start" scope="row">
                              {item.razorpay_order_id}
                            </th>
                            <td className="px-2 py-3 text-start">
                              {formatDate(item.created_at)}
                            </td>
                            {item.status === "delivered" && (
                              <td className="px-2 py-3 text-start text-green-600">
                                Delivered
                              </td>
                            )}
                            {(item.status === "pending" ||
                              item.status === "processing") && (
                              <td className="px-2 py-3 text-start text-slate-400">
                                Processing
                              </td>
                            )}
                            {item.status === "canceled" && (
                              <td className="px-2 py-3 text-start text-red-600">
                                Canceled
                              </td>
                            )}
                            <td className="px-2 py-3 text-start">
                              Rs {item.amount / 100}
                              {/* <span className="text-slate-400">{item.item}</span> */}
                            </td>
                            <td className="px-2 py-3 text-start">
                              <span
                                className={`font-semibold ${
                                  item.payment_status === "paid"
                                    ? "text-green-600"
                                    : item.payment_status === "pending"
                                    ? "text-yellow-600"
                                    : item.payment_status === "failed"
                                    ? "text-red-600"
                                    : "text-gray-500"
                                }`}
                              >
                                {item.payment_status.toUpperCase()}
                              </span>
                            </td>
                            <td className="px-2 py-3 text-start">
                              <Link href="#" className="text-gray-800">
                                View Invoice
                                <i className="mdi mdi-chevron-right"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              {/* <h5 className="text-lg font-semibold my-6">My favourite Items</h5> */}

              {/* <div className="rounded-md shadow dark:shadow-gray-800 p-6 py-0">
                <ul>
                  {userFvtItem.map((item, index) => {
                    return (
                      <li
                        className="flex justify-between items-center py-6 border-t first-of-type:border-0 border-gray-100 dark:border-gray-700"
                        key={index}
                      >
                        <div className="flex items-center">
                          <Image
                            src={item.image}
                            width={64}
                            height={83}
                            className="rounded shadow dark:shadow-gray-800 w-16"
                            alt=""
                          />

                          <div className="ms-4">
                            <Link
                              href=""
                              className="font-semibold hover:text-gray-800"
                            >
                              Ladies Top
                            </Link>
                            <p className="text-green-600 text-sm mt-1">
                              $16.00 <del className="text-red-600">$21.00</del>
                            </p>
                          </div>
                        </div>

                        <div>
                          <Link
                            href=""
                            className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white rounded-full"
                          >
                            <FiTrash2 className="h-4 w-4"></FiTrash2>
                          </Link>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Switcher/> */}
      <ScrollToTop />
    </>
  );
}

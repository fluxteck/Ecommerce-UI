import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import Usertab from "../components/user-tab";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ScrollToTop from "../components/scroll-to-top";

import {
  FiUser,
  FiUserCheck,
  FiMail,
  FiBookmark,
  FiMessageCircle,
  FiPhone,
  FiGlobe,
  FiKey,
} from "../assets/icons/vander";

export default function UserAddress() {
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
              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                <h5 className="text-lg font-semibold mb-4">
                  Personal Detail :
                </h5>
                <form>
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                      <label className="form-label font-medium">
                        First Name : <span className="text-red-600">*</span>
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
                        <input
                          type="text"
                          className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="First Name:"
                          id="firstname"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                    <div>
                      <label className="form-label font-medium">
                        Last Name : <span className="text-red-600">*</span>
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiUserCheck className="w-4 h-4 absolute top-3 start-4"></FiUserCheck>
                        <input
                          type="text"
                          className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Last Name:"
                          id="lastname"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                    {/* Add Mobile Number Input Field  */}
                    <div>
                      <label className="form-label font-medium">
                        Mobile Number : <span className="text-red-600">*</span>
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiPhone className="w-4 h-4 absolute top-3 start-4"></FiPhone>
                        <input
                          type="text"
                          className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Mobile Number:"
                          id="mobile"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>

                    {/* Add City Input Field  */}
                    <div>
                      <label className="form-label font-medium">
                        City : <span className="text-red-600">*</span>
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiGlobe className="w-4 h-4 absolute top-3 start-4"></FiGlobe>
                        <input
                          type="text"
                          className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="City:"
                          id="city"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>

                    {/* Add PIN code Input Field  */}
                    <div>
                      <label className="form-label font-medium">
                        PIN Code : <span className="text-red-600">*</span>
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiKey className="w-4 h-4 absolute top-3 start-4"></FiKey>
                        <input
                          type="text"
                          className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="PIN Code:"
                          id="pincode"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>

                    {/* Add State Input Field  */}
                    <div>
                      <label className="form-label font-medium">
                        State : <span className="text-red-600">*</span>
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiGlobe className="w-4 h-4 absolute top-3 start-4"></FiGlobe>
                        <input
                          type="text"
                          className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="State:"
                          id="state"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>

                    {/* Add country Input Field  */}
                    <div>
                      <label className="form-label font-medium">
                        Country : <span className="text-red-600">*</span>
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiGlobe className="w-4 h-4 absolute top-3 start-4"></FiGlobe>
                        <input
                          type="text"
                          className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Country:"
                          id="country"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>

                    {/* Add Address Input Field  */}
                    <div>
                      <label className="form-label font-medium">
                        Address : <span className="text-red-600">*</span>
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiBookmark className="w-4 h-4 absolute top-3 start-4"></FiBookmark>
                        <input
                          type="text"
                          className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Address:"
                          id="address"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>

                    {/* Add Address 2 Input Field  */}
                    <div>
                      <label className="form-label font-medium">
                        Address 2 :{" "}
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiBookmark className="w-4 h-4 absolute top-3 start-4"></FiBookmark>
                        <input
                          type="text"
                          className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Address 2:"
                          id="address2"
                          name="name"
                        />
                      </div>
                    </div>
                  </div>

                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-gray-800 text-white rounded-md mt-5"
                    value="Save"
                  />
                </form>
              </div>

              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
                <h5 className="text-lg font-semibold mb-5 text-black-600">
                  Saved Address
                </h5>

                <p className="text-slate-400 mb-4">Show Preview Address Here</p>

                <Link
                  href=""
                  className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-white-600 text-black rounded-md border border-black me-2"
                >
                  Edit
                </Link>
                <Link
                  href=""
                  className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-600 text-white rounded-md"
                >
                  Delete
                </Link>
              </div>
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

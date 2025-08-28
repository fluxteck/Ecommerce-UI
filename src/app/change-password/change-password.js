"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// import Switcher from "../components/switcher"
import BackToHome from "../components/back-to-home";

export default function ChangePassword() {
  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-gray-800/10 dark:bg-gray-800/20 bg-[url('/images/hero/bg-shape.png')] bg-center bg-no-repeat bg-cover">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
              <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="relative md:shrink-0">
                  <Image
                    src="/images/login.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="lg:h-full h-full w-full object-cover md:h-[34rem]"
                    alt=""
                  />
                </div>

                <div className="p-8 lg:px-20">
                  <div className="text-center">
                    <Link href="/">
                      <Image
                        src="/images/logo-main-blk.png"
                        width={114}
                        height={22}
                        className="mx-auto block dark:hidden"
                        alt=""
                      />
                      <Image
                        src="/images/logo-main-blk.png"
                        width={114}
                        height={22}
                        className="mx-auto hidden dark:block"
                        alt=""
                      />
                    </Link>
                  </div>

                  <form
                    // onSubmit={handleSubmit(onSubmit)}
                    className="text-start lg:py-20 py-8"
                  >
                    <div className="grid grid-cols-1">
                     

                      <div className="mb-4">
                        <label
                          className="font-semibold"
                          htmlFor="LoginPassword"
                        >
                          Password:
                        </label>
                        <input
                          id="LoginPassword"
                          type="password"
                          // {...register("password", { required: true })}
                          className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Password:"
                        />
                        {/* {errors.name && (
                          <span className="text-red-500 text-sm">
                            Password is required
                          </span>
                        )} */}
                      </div>
                    
                    {/* Adding Confirm Password Field  */}
                          
<div className="mb-4">
                        <label
                          className="font-semibold"
                          htmlFor="LoginPassword"
                        >
                          Confirm Password:
                        </label>
                        <input
                          id="LoginPassword"
                          type="password"
                          // {...register("password", { required: true })}
                          className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Password:"
                        />
                        {/* {errors.name && (
                          <span className="text-red-500 text-sm">
                            Password is required
                          </span>
                        )} */}
                      </div>
                   

                      <div className="mb-4">
                        <button
                          type="submit"
                          className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-gray-800 text-white rounded-md w-full"
                          //   value="Login / Sign in"
                        >
                          Change Password
                        </button>
                      </div>

                    
                    </div>
                  </form>

                  <div className="text-center">
                    <p className="mb-0 text-slate-400">
                      © {new Date().getFullYear()} MA Mark. Develop with{" "}
                      <i className="mdi mdi-heart text-red-600"></i> by{" "}
                      <Link
                        href="https://fluxteck.com/"
                        target="_blank"
                        className="text-reset"
                      >
                        Fluxteck
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Switcher/> */}
      <BackToHome />
    </>
  );
}

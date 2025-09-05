"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import BackToHome from "../components/back-to-home";
// import Switcher from "../components/switcher";
// import { useAuth } from "ecom-user-sdk/auth/supabase";
import { useForm } from "react-hook-form";
import { useUserActions } from "ecom-user-sdk/user";
import useMessage from "../hook/messageHook";

import { signUpWithOtp } from "ecom-user-sdk/auth/supabase";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const { signup } = useAuth();
  const router = useRouter();
  const { addUser } = useUserActions();

  const [accepted, setAccepted] = useState(false);
  //   const { user } = useUserContext();
  //   console.log(user);

  const { closeMessage, openMessage } = useMessage();

  const onSubmit = async (data) => {
    if (!accepted)
      return closeMessage("Please accept the Terms and Condition.", "error");
    const { email, password, name } = data;
    openMessage("Creating your account...", "loading");
    // console.log(email);
    const result = await signUpWithOtp({
      email,
      metadata: { type: "user" },
    });

    // console.log(result);

    // const result = await signup({
    //   email,
    //   password,
    //   metadata: { type: "user" },
    // });

    // console.log("Signup result:", result);
    if (result.data?.error) {
      closeMessage("Something went wrong", "error");
      return console.log("signup failed");
    } else {
      await addUser({ user: { email: email, name: name } });
      closeMessage("Signup successful!", "success");
      router.push("/login");
      //   console.log("signup successful");
    }
    // else {
    //   return console.log("signup failed");
    // }
  };
  return (
    <>
    <Navbar />
      <section className="mt-16 md:h-screen py-36 flex items-center bg-[url('/images/hero/bg-shape.png')] bg-center bg-no-repeat bg-cover">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
              <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="relative md:shrink-0">
                  <Image
                    src="/images/signup1.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="h-full w-full object-cover md:h-[44rem]"
                    alt=""
                  />
                </div>

                <div className="p-8 mt-5 lg:px-20">
                  <div className="text-center">
                    <Link href="/">
                      <Image
                        src="/images/logo-main-blk.png"
                        width={120}
                        height={65}
                        className="mx-auto block dark:hidden"
                        alt=""
                      />
                      <Image
                        src="/images/logo-main-blk.png"
                        width={120}
                        height={65}
                        className="mx-auto hidden dark:block"
                        alt=""
                      />
                    </Link>
                  </div>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="text-start lg:py-20 py-8"
                  >
                    <div className="grid grid-cols-1">
                      <div className="mb-4">
                        <label className="font-semibold" htmlFor="RegisterName">
                          Your Name:
                        </label>
                        <input
                          id="RegisterName"
                          type="text"
                          {...register("name", { required: true })}
                          className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Harry"
                        />
                        {errors.name && (
                          <span className="text-red-500 text-sm">
                            Name is required
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="font-semibold" htmlFor="LoginEmail">
                          Email Address:
                        </label>
                        <input
                          id="LoginEmail"
                          type="email"
                          {...register("email", { required: true })}
                          className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="name@example.com"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-sm">
                            Email is required
                          </span>
                        )}
                      </div>

                      {/* <div className="mb-4">
                        <label
                          className="font-semibold"
                          htmlFor="LoginPassword"
                        >
                          Password:
                        </label>
                        <input
                          id="LoginPassword"
                          type="password"
                          {...register("password", { required: true })}
                          className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Password:"
                        />
                        {errors.password && (
                          <span className="text-red-500 text-sm">
                            Password is required
                          </span>
                        )}
                      </div> */}

                      <div className="mb-4">
                        <div className="flex items-center w-full mb-0">
                          <input
                            className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-gray-800 focus:border-gray-800 focus:ring focus:ring-offset-0 focus:ring-gray-800 focus:ring-opacity-50 me-2"
                            type="checkbox"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                            // value=""
                            id="AcceptT&C"
                          />
                          <label
                            className="form-check-label text-slate-400"
                            htmlFor="AcceptT&C"
                          >
                            I Accept{" "}
                            <Link href="" className="text-gray-800">
                              Terms And Condition
                            </Link>
                          </label>
                        </div>
                      </div>

                      <div className="mb-4">
                        <button
                          type="submit"
                          className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-gray-800 text-white rounded-md w-full"
                        >
                          Register
                        </button>
                      </div>

                      <div className="text-center">
                        <span className="text-slate-400 me-2">
                          Already have an account ?{" "}
                        </span>{" "}
                        <Link
                          href="/login"
                          className="text-black dark:text-white font-bold inline-block"
                        >
                          Sign in
                        </Link>
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
      {/* <BackToHome /> */}
      {/* <Switcher/> */}
    </>
  );
}

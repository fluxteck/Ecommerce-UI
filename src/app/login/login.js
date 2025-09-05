"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// import Switcher from "../components/switcher"
import BackToHome from "../components/back-to-home";
import { useAuth } from "ecom-user-sdk/auth/supabase";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import useMessage from "../hook/messageHook";
import { signInWithOtp } from "ecom-user-sdk/auth/supabase";
import OtpInput from "./otp";
import Navbar from "../components/navbar";

export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { login, verifyOtp } = useAuth();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  // const [otpSent, setOtpSent] = useState(false);
  //   const { getUserByEmail } = useUserActions();
  const searchParams = useSearchParams();

  const { closeMessage, openMessage } = useMessage();
  //   const [token, setToken] = useState("");

  //   const { user } = useUserContext();
  //   console.log(user);
  //   const sendOtp = async () => {
  //     // const { email, password, name } = data;
  //     openMessage("sending otp...");
  //     // console.log(email);
  //     const result = await signInWithOtp({
  //       email,
  //     });
  //     if (result.data?.error) {
  //       closeMessage("Something went wrong", "error");
  //       return console.log("otp failed");
  //     } else {
  //       await addUser({ user: { email: email, name: name } });
  //       closeMessage("Otp sent successfully!", "success");
  //       //   router.push("/login");
  //       //   console.log("signup successful");
  //     }
  //   };
  const sendOtp = async (data) => {
    const { email } = data;
    openMessage("sending Otp...");

    const result = await signInWithOtp({ email });
    if (result.data?.error) {
      closeMessage("Something went wrong", "error");
      //   otpSent(false);
      return console.log("login otp failed");
    }
    // setOtpSent(true)
    closeMessage("OTP sent successfully!", "success");
    // router.push("/login");
    //   console.log("signup successful");
  };

  const loginHandle = async () => {
    const email = getValues("email");
    if (!email) return closeMessage("Email is required", "error");
    if (otp.length !== 6) {
      setError("OTP should be 6 digit");
      return;
    }
    openMessage("Signing In...");
    const { data: da, error } = await verifyOtp({
      email,
      otp: otp,
    });

    if (da?.user) {
      closeMessage("Login successful", "success");
      //   await getUserByEmail({ email: email });
      const nextUrl = searchParams.get("next") || "/";
      //   console.log(nextUrl);

      window.location.href = nextUrl;
      setError("");
      //   console.log("signup successful");
    } else {
      closeMessage(error?.message || "Login failed", "error");
      setError("");
      // return console.log("login failed");
    }
  };

  //   const onSubmit = async (data) => {
  //     openMessage("Logging you in...", "loading");
  //     const { email, password } = data;
  //     // console.log(email);

  //     const { data: da, error } = await verifyOtp({
  //       email,
  //       otp: token,
  //     });
  //     // const { data: da, error } = await login({
  //     //   email,
  //     //   password,
  //     // });

  //     // console.log("login result:", da);

  //     // console.log("Login error:", error);
  //     if (da?.user) {
  //       closeMessage("Login successful", "success");
  //       //   await getUserByEmail({ email: email });
  //       const nextUrl = searchParams.get("next") || "/";
  //       //   console.log(nextUrl);

  //       window.location.href = nextUrl;
  //       //   console.log("signup successful");
  //     } else {
  //       closeMessage(error?.message || "Login failed", "error");
  //       // return console.log("login failed");
  //     }
  //   };
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
                    src="/images/login1.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="lg:h-full h-full w-full object-cover md:h-[30rem]"
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

                  {/* Form Start */}

                  <div className="text-start lg:py-20 py-10">
                    <div className="grid grid-cols-1 ml-[-25px] sm:ml-0">
                      <div className="max-w-md mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                        {/* Email Input + Send OTP */}
                        <form onSubmit={handleSubmit(sendOtp)}>
                          <div className="mb-8">
                            <label
                              className="font-semibold block mb-2 text-gray-800 dark:text-gray-200"
                              htmlFor="LoginEmail"
                            >
                              Email Address
                            </label>
                            <div className="flex flex-col sm:flex-row">
                              <input
                                id="LoginEmail"
                                type="email"
                                {...register("email", { required: true })}
                                className="flex-1 py-3 px-4 h-12 bg-transparent dark:bg-slate-800 dark:text-slate-200 rounded-lg sm:rounded-r-none border border-gray-300 dark:border-gray-700 focus:ring-2 focus:black outline-none"
                                placeholder="name@example.com"
                              />
                              <button
                                type="submit"
                                className="mt-3 sm:mt-0 sm:ml-0 sm:rounded-l-none px-5 h-12 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition"
                              >
                                Send OTP
                              </button>
                            </div>
                            {errors.email && (
                              <span className="text-red-500 text-sm mt-2 block">
                                Email is required
                              </span>
                            )}
                          </div>
                        </form>

                        {/* OTP Input */}
                        <div className="mb-10">
                          <label
                            className="font-semibold block mb-3 text-gray-800 dark:text-gray-200"
                            htmlFor="otp"
                          >
                            Enter OTP
                          </label>
                          <OtpInput length={6} onChange={setOtp} />
                          {error && (
                            <span className="text-red-500 text-sm mt-2 block">
                              {error}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Login Button */}
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={loginHandle}
                        className="py-3 px-5 w-full text-base font-medium tracking-wide bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                      >
                        Login
                      </button>
                    </div>
                  </div>

                  {/* Form End */}

                  {/* <div className="grid grid-cols-1">
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
                        {errors.name && (
                          <span className="text-red-500 text-sm">
                            Email is required
                          </span>
                        )}
                      </div>

                      <input
                        type="text"
                        value={token}
                        placeholder="Enter 6-digit code"
                        className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        onChange={(e) => setToken(e.target.value)}
                      />



                      <div className="flex justify-between mb-4">

                        <p className="text-slate-400 mb-0">
                          <Link
                            href="/forgot-password"
                            className="text-slate-400"
                          >
                            Forgot password ?
                          </Link>
                        </p>
                      </div>

                      <div className="mb-4">
                        <button
                          type="submit"
                          className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-gray-800 text-white rounded-md w-full"
                          //   value="Login / Sign in"
                        >
                          Login
                        </button>
                      </div>

                      <div className="text-center">
                        <span className="text-slate-400 me-2">
                          Don't have an account ?
                        </span>{" "}
                        <Link
                          href="/signup"
                          className="text-black dark:text-white font-bold inline-block"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div> */}
                  {/* </div>  */}

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
      {/* <BackToHome /> */}
    </>
  );
}

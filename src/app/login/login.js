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
                    src="/images/login1.webp"
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
                  <div className="text-start py-10 flex justify-center">
                    <div className="grid grid-cols-1 w-full max-w-md">
                      <div className="mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 w-full">
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
                          <div className="flex justify-center gap-2">
                            <OtpInput onChange={setOtp} />
                            {/* {[...Array(6)].map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-semibold rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                      ))} */}
                          </div>
                          {error && (
                            <span className="text-red-500 text-sm mt-2 block">
                              {error}
                            </span>
                          )}
                        </div>
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
                  {/* Form End */}

                  <div className="text-center mt-6">
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

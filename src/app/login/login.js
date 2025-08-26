"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// import Switcher from "../components/switcher"
import BackToHome from "../components/back-to-home";
import { useAuth } from "ecom-user-sdk/auth/supabase";
import { useForm } from "react-hook-form";
import { useUserActions } from "ecom-user-sdk/user";
import { useSearchParams } from "next/navigation";
import useMessage from "../hook/messageHook";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const { getUserByEmail } = useUserActions();
  const searchParams = useSearchParams();

  const { closeMessage, openMessage } = useMessage();

  //   const { user } = useUserContext();
  //   console.log(user);

  const onSubmit = async (data) => {
    const { email, password } = data;
    // console.log(email);

    const { data: da, error } = await login({
      email,
      password,
    });

    console.log("login result:", da);

    console.log("Login error:", error);
    if (da?.user) {
      //   await getUserByEmail({ email: email });
      const nextUrl = searchParams.get("next") || "/";
      //   console.log(nextUrl);

      window.location.href = nextUrl;
      //   console.log("signup successful");
    } else {
      return console.log("login failed");
    }
    openMessage("Login successful", "success");
  };
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
                        src="/images/logo-main.webp"
                        width={114}
                        height={22}
                        className="mx-auto block dark:hidden"
                        alt=""
                      />
                      <Image
                        src="/images/logo-main.webp"
                        width={114}
                        height={22}
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
                          {...register("password", { required: true })}
                          className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Password:"
                        />
                        {errors.name && (
                          <span className="text-red-500 text-sm">
                            Password is required
                          </span>
                        )}
                      </div>

                      <div className="flex justify-between mb-4">
                        {/* <div className="flex items-center mb-0">
                          <input
                            className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-gray-800 focus:border-gray-800 focus:ring focus:ring-offset-0 focus:ring-gray-800 focus:ring-opacity-50 me-2"
                            type="checkbox"
                            value=""
                            id="RememberMe"
                          />
                          <label
                            className="form-checkbox-label text-slate-400"
                            htmlFor="RememberMe"
                          >
                            Remember me
                          </label>
                        </div> */}
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
                          Login / Sign in
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

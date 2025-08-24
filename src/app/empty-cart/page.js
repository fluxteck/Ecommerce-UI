import React from "react";
import Link from "next/link";
import Image from "next/image";

import Switcher from "../components/switcher";
import BackToHome from "../components/back-to-home";

export default function EmptyCart(){
    return(
        <>
        <section className="relative bg-gray-800/5">
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="text-center">
                            <Link href="/">
                                <Image src='/images/logo-main-blk.png' width={120} height={65} className="mx-auto block dark:hidden" alt=""/>
                                <Image src='/images/logo-main-blk.png' width={120} height={65} className="mx-auto hidden dark:block" alt=""/>
                            </Link>
                        </div>
                        <div className="title-heading text-center my-auto">
                            <Image src='/images/empty-cart.png' width={160} height={110} className="mx-auto w-72" alt=""/>
                            <h1 className="mt-8 mb-6 md:text-5xl text-3xl font-bold">Your Cart is Empty</h1>
                            <p className="text-slate-400">Whoops, Looks like your cart is empty.</p>
                            
                            <div className="mt-4">
                                <Link href="/" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800 hover:bg-gray-800 border-gray-800 hover:border-gray-800 text-white rounded-md">Back to Home</Link>
                            </div>
                        </div>
                        <div className="text-center mt-7">
                            <p className="mb-0 text-slate-400">© {new Date().getFullYear()} MA Mark. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://fluxteck.com/" target="_blank" className="text-reset">Fluxteck</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <Switcher/> */}
        <BackToHome/>
        </>
    )
}
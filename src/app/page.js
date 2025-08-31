import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/navbar";
import Tagline from "./components/tagline";
import CtaOne from "./components/cta-one";
import Footer from "./components/footer";
// import Switcher from "./components/switcher";

import ScrollToTop from "./components/scroll-to-top";
import { collections, newProduct } from "./data/data";
// import { FiHeart, FiEye, FiBookmark } from "./assets/icons/vander";

export default function Home() {
  return (
    <>
      <Tagline />
      <Navbar navClass="defaultscroll is-sticky tagline-height" />

      <section
        className="relative md:flex table w-full items-center py-8 md:py-36 md:bg-top mt-5 bg-center bg-no-repeat md:bg-cover bg-contain"
        style={{
          backgroundImage:
            "url('https://yxdyohefwpubwydtctbs.supabase.co/storage/v1/object/public/products/Home%20Page/Main%20Banner.png')",
        }}
      >
        <div className="container relative">
          <div className="grid grid-cols-1 justify-center">
            <div className="text-center">
              <span className="uppercase font-semibold text-xs sm:text-[10px] md:text-lg">
                Style that never fades
              </span>

              <h4 className="text-xl sm:text-2xl md:text-6xl leading-tight sm:leading-snug md:leading-normal font-bold my-3">
                Leather
                <span className="block text-lg sm:text-xl md:inline md:text-6xl md:leading-normal">
                  {" "}
                  Jackets
                </span>
              </h4>

              <div className="mt-6">
                <Link
                  href="/shop"
                  className="py-1 px-3 text-xs md:py-2 md:px-5 md:text-base inline-block font-semibold tracking-wide align-middle text-center bg-slate-900 text-white rounded-md"
                >
                  Shop Now <i className="mdi mdi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:pb-24 pb-16">
        {/* <div className="container relative">
                    <div className="grid grid-cols-1 justify-center text-center mb-6">
                        <h5 className="font-semibold text-3xl leading-normal mb-4">Shop by Collections</h5>
                    </div>

                    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 pt-6 gap-6">
                        {collections.map((item, index) => {
                            return (
                                <Link href="" className="text-center hover:text-gray-800" key={index}>
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="rounded-full shadow dark:shadow-gray-800" alt="" />
                                    <span className="text-xl font-medium mt-3 block">{item.name}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div> */}
        <CtaOne />

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 justify-center text-center mb-6">
            <h5 className="font-semibold text-xl sm:text-2xl md:text-3xl leading-normal mb-4">
              Premium Men’s Leather Jacket
            </h5>

            {/* <p className="text-slate-400 max-w-xl mx-auto">Shop the latest products from the most popular collections</p> */}
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 pt-6 gap-3">
            {newProduct.slice(0, 12).map((item, index) => {
              return (
                <div className="group mb-5" key={index}>
                  <Link href={`/product/${item.id}`}>
                    <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        src={item.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        unoptimized
                        style={{ width: "100%", height: "auto" }}
                        className=""
                        alt=""
                      />
                    </div>
                  </Link>

                  <div className="mt-1">
                    <Link href={`/product/${item.id}`}>
                      <p className="text-clamp-2 hover:text-red-500 md:text-lg text-sm font-medium">
                        {item.name}
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <p>
                          {item.desRate}{" "}
                          <del className="text-slate-400">{item.amount}</del>
                        </p>
                        {/* <ul className="font-medium text-amber-400 list-none">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul> */}
                      </div>
                    </Link>
                    {/* <div className="my-1  start-3 end-3 duration-500">
                                            <Link href="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                        </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="grid grid-cols-1">
                    <div className="py-[30px] px-0 border-t border-slate-800">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2">
                            {footerServices.map((item,index) =>{
                                return(
                                    <div className="flex items-center lg:justify-center" key={index}>
                                        <i className={`align-middle text-lg mb-0 me-2 ${item.icon}`}></i>
                                        <h6 className="mb-0 font-medium">{item.name}</h6>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div> */}

        {/* <div className="container relative md:mt-24 mt-16">
                    <div className="grid items-end md:grid-cols-2 mb-6">
                        <div className="md:text-start text-center">
                            <h5 className="font-semibold text-3xl leading-normal mb-4">Popular Items</h5>
                            <p className="text-slate-400 max-w-xl">Popular items in this week</p>
                        </div>

                        <div className="md:text-end hidden md:block">
                            <Link href="/shop-grid" className="text-slate-400 hover:text-gray-800">See More Items <i className="mdi mdi-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
                        {newProduct.slice(12, 16).map((item, index) => {
                            return (
                                <div className="group" key={index}>
                                    <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="group-hover:scale-110 duration-500" alt="" />

                                        <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                            <Link href="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                        </div>

                                        <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                                            <li><Link href="#" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiHeart className="size-4"></FiHeart></Link></li>
                                            <li className="mt-1 ms-0"><Link href="/shop-item-detail" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiEye className="size-4"></FiEye></Link></li>
                                            <li className="mt-1 ms-0"><Link href="#" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiBookmark className="size-4"></FiBookmark></Link></li>
                                        </ul>

                                        <ul className="list-none absolute top-[10px] start-4">
                                            {item.tag !== '' && (
                                                <li><Link href="#" className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">New</Link></li>
                                            )}
                                        </ul>
                                    </div>

                                    <div className="mt-4">
                                        <Link href={`/product-detail-one/${item.id}`} className="hover:text-gray-800 text-lg font-medium">{item.name}</Link>
                                        <div className="flex justify-between items-center mt-1">
                                            <p>{item.desRate}<del className="text-slate-400">{item.rate}</del></p>
                                            <ul className="font-medium text-amber-400 list-none">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-1 mt-6">
                        <div className="text-center md:hidden block">
                            <Link href="/shop-grid" className="text-slate-400 hover:text-gray-800">See More Items <i className="mdi mdi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div> */}
      </section>
      <Footer />
      {/* <Switcher /> */}
      <ScrollToTop />
    </>
  );
}

import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ScrollToTop from "../components/scroll-to-top";

import {
  FiDribbble,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "../assets/icons/vander";
import { promiseData, teamData } from "../data/data";
import About from "../components/about";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Navbar navClass="defaultscroll is-sticky" navlight={true} />

      <section className="relative text-center table w-full pt-15 pb-2 lg:pt-15 md:pt-13 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">About Us</h3>
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
                className="inline-block uppercase text-[13px] font-bold text-red-600"
                aria-current="page"
              >
                Shop Grid
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <About />

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
              <Image
                src="/images/ab2.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-b-full shadow-md dark:shadow-gray-800"
                alt=""
              />
            </div>

            <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
              <h6 className="text-gray-800 font-semibold uppercase text-lg">
                Founder
              </h6>
              <h5 className="font-semibold text-3xl leading-normal my-4">
                Mohd Faizan
              </h5>
              <p className="text-slate-400 max-w-xl"></p>

              <ul className="list-none mt-6 space-x-3">
                <li className="inline">
                  <Link
                    href="https://dribbble.com/shreethemes"
                    target="_blank"
                    className="inline-flex hover:text-gray-800 dark:hover:text-gray-800"
                  >
                    {/* <FiDribbble
                      className="size-5 align-middle"
                      title="dribbble"
                    ></FiDribbble> */}
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    href="http://linkedin.com/company/shreethemes"
                    target="_blank"
                    className="inline-flex hover:text-gray-800 dark:hover:text-gray-800"
                  >
                    <FiLinkedin
                      className="size-5 align-middle"
                      title="Linkedin"
                    ></FiLinkedin>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    href="https://www.facebook.com/shreethemes"
                    target="_blank"
                    className="inline-flex hover:text-gray-800 dark:hover:text-gray-800"
                  >
                    <FiFacebook
                      className="size-5 align-middle"
                      title="facebook"
                    ></FiFacebook>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    href="https://www.instagram.com/shreethemes/"
                    target="_blank"
                    className="inline-flex hover:text-gray-800 dark:hover:text-gray-800"
                  >
                    <FiInstagram
                      className="size-5 align-middle"
                      title="instagram"
                    ></FiInstagram>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    href="https://twitter.com/shreethemes"
                    target="_blank"
                    className="inline-flex hover:text-gray-800 dark:hover:text-gray-800"
                  >
                    {/* <FiTwitter
                      className="size-5 align-middle"
                      title="twitter"
                    ></FiTwitter> */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 justify-center text-center mb-4">
            <h6 className="text-red-500 font-semibold uppercase text-lg">
              Our
            </h6>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
            {promiseData.map((item, index) => {
              return (
                <div
                  className="p-6 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-md bg-white dark:bg-slate-900"
                  key={index}
                >
                  <i className={`text-4xl text-red-500 ${item.icon}`}></i>

                  <div className="content mt-6">
                    <Link
                      href=""
                      className="title h5 text-xl font-medium hover:text-gray-800"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 mt-3">{item.desc}</p>

                    <div className="mt-4">
                      <Link href="" className="text-red-500">
                        Read More <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 justify-center text-center mb-4">
            <h6 className="text-red-500 font-semibold uppercase text-lg">
              Our Minds
            </h6>
            <h5 className="font-semibold text-3xl leading-normal my-4">
              Meet Our Team Members
            </h5>
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
            {teamData.map((item, index) => {
              return (
                <div className="lg:col-span-3 md:col-span-6" key={index}>
                  <div className="group text-center">
                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className=""
                        alt=""
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                      <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
                        <li className="inline">
                          <Link
                            href=""
                            className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-gray-800 text-white"
                          >
                            <FiFacebook className="h-4 w-4"></FiFacebook>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href=""
                            className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-gray-800 text-white"
                          >
                            <FiInstagram className="h-4 w-4"></FiInstagram>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href=""
                            className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-gray-800 text-white"
                          >
                            <FiLinkedin className="h-4 w-4"></FiLinkedin>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="content mt-3">
                      <Link
                        href=""
                        className="text-lg font-semibold hover:text-gray-800 duration-500"
                      >
                        {item.name}
                      </Link>
                      <p className="text-slate-400">{item.possition}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </section>
      <Footer />
      {/* <Switcher /> */}
      <ScrollToTop />
    </>
  );
}

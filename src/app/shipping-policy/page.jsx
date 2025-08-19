import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import { termsData } from "../data/data";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ScrollToTop from "../components/scroll-to-top";

export default function Shipping() {
  return (
    <>
      <Navbar />
      <section className="relative table w-full py-15 lg:py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h1 className="text-3xl leading-normal font-semibold">
              Shipping Policy
            </h1>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
              <Link href="/">MA Mark</Link>
            </li>
            <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right"></i>
            </li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
              <Link href="">Utility</Link>
            </li>
            <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right"></i>
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold text-orange-500"
              aria-current="page"
            >
              Shipping Policy
            </li>
          </ul>
        </div>
      </section>
      <section className="relative md:py-10 py-10">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Thank you for choosing MA Mark!
                </h2>
                <br />

                <p>
                  We're excited to get your new leather goods to you as soon as
                  possible. This policy outlines everything you need to know
                  about shipping your order.
                </p>

                <br />

                <h3 className="text-xl font-semibold">Order Processing:</h3>
                <br />

                <ul className="list-disc pl-5">
                  <li>
                    The timeline is 1 week for your order to be processed and
                    shipped. This timeframe may be slightly longer during peak
                    seasons or holidays.You must be at least 18 years old to use
                    our Service.
                  </li>
                </ul>
                <br />
                <h3 className="text-xl font-semibold">Shipping Options:</h3>
                <br />
                <p className="mb-4">
                  We offer a variety of shipping options to meet your needs and
                  budget. These options, along with their estimated delivery
                  times and costs, will be displayed at checkout.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    <b>Standard Shipping:</b> This is our most economical
                    option, with delivery within 1 week.
                  </li>
                  <li>
                    <b>Expedited Shipping:</b> For faster delivery, choose
                    expedited shipping by contacting us on our customer support.
                  </li>
                </ul>
                <br />
                <h3 className="text-xl font-semibold">Delivery Times:</h3>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    Please note that estimated delivery times are 3-4 business
                    days and begin once your order has been shipped.
                  </li>
                  <li>
                    Factors beyond our control, such as weather or carrier
                    delays, may occasionally affect delivery times.
                  </li>
                </ul>
                <br />
                <h3 className="text-xl font-semibold">Tracking Your Order:</h3>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    You will receive a shipping confirmation email with a
                    tracking number once your order has shipped.
                  </li>
                  <li>
                    You can use this tracking number to check the status of your
                    delivery on the carrier's website or from our order tracking
                    page.
                  </li>
                </ul>
                <br />
                <h3 className="text-xl font-semibold">
                  International Shipping:
                </h3>
                <br />

                <ul className="list-disc pl-5">
                  <li>
                    For international orders, additional charges for shipping
                    and packaging will apply. Contact our customer support to
                    find out the total cost for delivery at your location.
                  </li>
                  <li>
                    Shipping costs depend on the weight of the products in your
                    order and the distance from India.
                  </li>
                  <li>
                    Estimated delivery times may vary depending on your
                    location.
                  </li>
                  <li>
                    Please note that any customs duties, taxes, or import fees
                    applicable in your country are the responsibility of the
                    recipient.
                  </li>
                  <li>
                    If you have specific requirements for shipping to P.O. boxes
                    or APO/FPO addresses, include them on your query.
                  </li>
                </ul>
                <br />

                <h3 className="text-xl font-semibold">Questions:</h3>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    If you have any questions about our shipping policy, please
                    don't hesitate to contact us at{" "}
                    <a href="mailto:care.mamark@gmail.com">
                       care.mamark@gmail.com
                    </a>
                    .
                  </li>
                </ul>
                <br />
                <h3 className="text-xl font-semibold">Happy Shopping!</h3>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
      <ScrollToTop />
    </>
  );
}

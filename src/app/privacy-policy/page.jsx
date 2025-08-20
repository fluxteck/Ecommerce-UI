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

      <section className="relative text-center table w-full pt-15 pb-2 lg:pt-15 md:pt-13 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">
              Privacy Policy
            </h3>
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
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-10 py-10">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                <p className="my-2">
                  This Privacy Policy explains how we collect, use, and disclose
                  information about you when you visit our website mamark.shop
                  and purchase our leather goods.
                </p>
                <br />

                <h3 className="text-xl font-semibold">
                  Information We Collect:
                </h3>
                <p>
                  We collect several types of information when you interact with
                  our website and services:
                </p>
                <br />

                <ul className="list-disc pl-5">
                  <li>
                    <strong>Personal Information:</strong> This includes
                    information that can be used to identify you, such as your
                    name, billing and shipping address, email address, and phone
                    number. You provide this information when you create an
                    account, place an order, or contact us.
                  </li>
                  <li>
                    <strong>Payment Information:</strong> We use a secure
                    third-party payment processor to handle your payment
                    information. We do not store your full credit card details
                    on our servers.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> We collect information about
                    your activity on our website, such as the pages you visit,
                    the products you browse, and the searches you perform. This
                    information is collected through cookies and other tracking
                    technologies.
                  </li>
                </ul>
                <br />

                <h3 className="text-xl font-semibold">
                  How We Use Your Information:
                </h3>
                <p>We use the information we collect for several purposes:</p>
                <br />

                <ul className="list-disc pl-5">
                  <li>To fulfil your orders and provide customer service.</li>
                  <li>To personalise your experience on our website.</li>
                  <li>
                    To send you marketing communications, such as newsletters
                    and promotional offers (with your consent).
                  </li>
                  <li>To improve our website and services.</li>
                  <li>To comply with legal and regulatory requirements.</li>
                </ul>
                <br />

                <h3 className="text-xl font-semibold">
                  Sharing Your Information:
                </h3>

                <p>
                  We may share your information with third-party service
                  providers who help us operate our business and website. These
                  service providers are contractually obligated to keep your
                  information confidential and secure.
                </p>
                <p>
                  We will not share your information with any third-party for
                  marketing purposes without your consent.
                </p>
                <br />
                <h3 className="text-xl font-semibold">Data Retention:</h3>
                <p>
                  We will retain your information for as long as necessary to
                  fulfill the purposes outlined in this Privacy Policy, unless a
                  longer retention period is required or permitted by law.
                </p>
                <br />

                <h3 className="text-xl font-semibold">Your Choices:</h3>
                <p>You have several choices regarding your information:</p>

                <ul className="list-disc pl-5">
                  <li>
                    You can access and update your personal information in your
                    account settings.
                  </li>
                  <li>
                    You can access and update your personal information in your
                    account settings.
                  </li>
                  <li>
                    You can unsubscribe from marketing communications by
                    following the unsubscribe instructions in the emails we send
                    you. You can opt out of cookies by adjusting your browser
                    settings.
                  </li>
                </ul>
                <br />

                <h3 className="text-xl font-semibold">Security:</h3>
                <p>
                  We take reasonable steps to protect your information from
                  unauthorized access, disclosure, alteration, or destruction.
                  However, no website or internet transmission is completely
                  secure.
                </p>
                <br />
                <h3 className="text-xl font-semibold">Children's Privacy:</h3>
                <p>
                  Our website is not directed to children under the age of 13.
                  We do not knowingly collect personal information from children
                  under 13.
                </p>
                <br />
                <h3 className="text-xl font-semibold">
                  Changes to this Privacy Policy:
                </h3>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  post any changes on this page.
                </p>
                <br />

                <h3 className="text-xl font-semibold">Contact Us:</h3>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at care.amamrk@gmail.com or on our customer support
                  contact no. +91 98737 94849.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Switcher /> */}
      <ScrollToTop />
    </>
  );
}

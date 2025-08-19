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
              <Link href="/">Cartzio</Link>
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
                {/* <h5 className="text-xl font-semibold mb-4">Overview :</h5> */}

                <h2>1. INTRODUCTION</h2>
                <br />

                <p>
                  Welcome to our Privacy Policy. We are a leading leather goods
                  and fashion brand based in India. We are committed to
                  protecting the privacy and security of our customers and site
                  visitors. The purpose of this Privacy Policy is to explain how
                  we collect, use, share, and protect your personal information
                  when you interact with us. This policy is in compliance with
                  the Indian Information Technology Act, 2000, and the
                  Information Technology (Reasonable Security Practices and
                  Procedures and Sensitive Personal Data or Information) Rules,
                  2011.
                </p>

                <br />
                <h3>2. INFORMATION WE COLLECT</h3>
                <br />

                <p>
                  We collect personal information that you provide to us such as
                  name, address, contact information, passwords and security
                  data, payment information, and social media data. We collect
                  this information for purposes such as facilitating orders,
                  providing customer service, managing your account, conducting
                  research and analysis, and communicating about our products,
                  services, and promotions.
                </p>

                <br />
                <h3>3. USE, STORAGE, AND SHARING OF INFORMATION</h3>
                <br />

                <p>
                  We use your personal information to operate, manage, and
                  maintain our business, to provide our products and services,
                  and to accomplish our business purposes and objectives. We
                  store your personal information in a secure manner and
                  implement appropriate technical and organizational measures to
                  protect it. We may share your personal information with
                  third-party service providers to perform services on our
                  behalf.
                </p>

                <br />
                <h3>4. THIRD-PARTY SERVICE PROVIDERS</h3>
                <br />

                <p>
                  MA Mark may engage third-party service providers to assist us
                  in operating our website, conducting our business, and
                  providing you with the services you request. These service
                  providers may have access to your personal information and may
                  use it on our behalf to provide services to us. We require
                  these third-party service providers to adhere to strict
                  confidentiality obligations and to comply with applicable data
                  protection laws Payment processors: To process your payments
                  for purchases made on our website. Shipping carriers: To
                  deliver your orders. Marketing and analytics providers: To
                  help us analyze website traffic, improve our marketing
                  efforts, and personalize your experience. Customer support
                  providers: To assist you with any questions or issues you may
                  have. Cloud service providers: To store and process your data.
                </p>

                <br />
                <h3>5. OPT-OUT OR DATA SUBJECT RIGHTS</h3>
                <br />

                <p>
                  You have the right to access, correct, update, or request
                  deletion of your personal information at any time. You also
                  have the right to opt-out of marketing communications we send
                  you at any time.
                </p>

                <br />
                <h3>6. DATA RETENTION AND SECURITY MEASURES</h3>
                <br />

                <p>
                  We retain your personal information for as long as necessary
                  to fulfill the purposes for which we collected it. We have
                  implemented appropriate technical and organizational security
                  measures designed to protect the security of any personal
                  information we process.
                </p>

                <br />
                <h3>7. APPLICABLE LAWS AND REGULATIONS</h3>
                <br />

                <p>
                  This Privacy Policy is in compliance with the Indian
                  Information Technology Act, 2000, and the Information
                  Technology (Reasonable Security Practices and Procedures and
                  Sensitive Personal Data or Information) Rules, 2011. By using
                  our website, you consent to the terms of this Privacy Policy.
                  We may change our Privacy Policy from time to time. We will
                  post any privacy policy changes on this page and, if the
                  changes are significant, we will provide a more prominent
                  notice. If you have any questions about this Privacy Policy,
                  please reach out to us.
                </p>
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

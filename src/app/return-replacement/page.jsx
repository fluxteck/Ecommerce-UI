import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import { termsData } from "../data/data";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ScrollToTop from "../components/scroll-to-top";

export default function ReturnReplacement() {
  return (
    <>
      <Navbar />

      <section className="relative text-center table w-full pt-15 pb-2 lg:pt-15 md:pt-13 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">
              Return, Replacement & Refund Policy
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
                Return, Replacement & Refund Policy
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
                <p className="mb-4">
                  We would like all customers to have a happy experience of
                  buying the products listed on our website by the various
                  Designers or Galleries. Our endeavor is to address any issue
                  that you may have with the product or the delivery.
                </p>
                <p className="mb-4">
                  Therefore, you may seek a Return, Replacement or Refund of a
                  purchase made by you under any of the following conditions:
                </p>

                <ul className="list-disc pl-5">
                  <li>If the product received by you is damaged.</li>
                  <li>
                    If there is a manufacturing defect in the product supplied.
                  </li>
                  <li>The product is misrepresented on our site.</li>
                  <li>
                    In the unlikely event of a mix up at our end and the wrong
                    product is shipped to you.
                  </li>
                </ul>
                <br />

                <p className="mb-4">
                  Any damage, manufacturing defect, misrepresentation or wrong
                  product supplied must be brought to our notice within3 days of
                  the receipt of the product.
                </p>
                <p className="mb-4">
                  To fairly consider your request for Return, Replacement or
                  Refund, the following process needs to be followed :
                </p>

                <ul className="list-disc pl-5">
                  <li>
                    You will need to write to us at care.mamark@gmail.com with
                    details of the reasons for your request. Please also mention
                    the order number in this email.
                  </li>
                  <li>
                    You will need to attach clear image and video evidence of
                    the issue with the product along with your email. This
                    should preferably be taken during the unboxing.
                  </li>
                  <li>
                    Your request should be made within 3 days of the receipt of
                    the product . The Return period may vary for different
                    products stock availability. This is normally within 1 week
                    of receipt of the product by you.
                  </li>
                  <li>
                    Please keep the original packing intact as the product will
                    need to be returned in the original packing.
                  </li>
                </ul>
                <br />

                <h3 className="text-xl font-semibold">Refund Processing</h3>
                <br />

                <ul className="list-disc pl-5">
                  <li>
                    We will only process agreed refunds after evaluation as
                    mentioned above. This can only be done after the returned
                    goods have been received in new condition and in the
                    original packaging. Your order total will be refunded within
                    15 working days after we receive & check the returned goods.
                    The amount will be transferred to your account from where
                    the payment was made by you.
                  </li>
                  <li>
                    In other cases where a refund does not qualify for a full
                    monetary reimbursement, we will issue store credit to your
                    MA Mark account. This store credit can be applied to any
                    future purchases made through our platform.
                  </li>
                </ul>

                <br />

                <h2 className="text-xl font-semibold">IMPORTANT INFORMATION</h2>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    Returned items must not be used or tampered with and should
                    be in a new condition and in the original packaging.
                  </li>
                  <li>
                    Items marked as ‘Final/Clearance Sale’ cannot be returned.
                  </li>
                  <li>Custom Made/Commissioned items cannot be returned.</li>

                  <li>
                    The management of MA Mark may modify the Terms and
                    conditions of the Returns policy at its discretion at any
                    time. You are advised to keep yourself abreast of the latest
                    Policy version before placing your order.
                  </li>
                  <li>
                    In the event the modified Policy is not acceptable to you,
                    you should discontinue using the service and request
                    deletion of your account on our site. However, if you
                    continue to use the service you shall be deemed to have
                    agreed to accept and abide by the modified Policy.
                  </li>
                </ul>
                <br />

                <p>
                  Note: Due to logistic reasons, the Return/Replacement policy
                  is applicable for India only.
                </p>

                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Switcher /> */}
      {/* <ScrollToTop /> */}
    </>
  );
}

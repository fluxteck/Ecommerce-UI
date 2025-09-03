import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import { termsData } from "../data/data";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ScrollToTop from "../components/scroll-to-top";

export default function Terms() {
  return (
    <>
      <Navbar />

      <section className="relative text-center table w-full pt-15 pb-2 lg:pt-15 md:pt-13 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">
              Terms & Conditions
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
                Terms & Conditions
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
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Welcome to MA Mark!
                </h2>
                <br />

                <p>
                  These Terms of Service ("Terms") govern your access to and use
                  of our website MA Mark.shop and the services we offer
                  (collectively, the "Service"). By accessing or using the
                  Service, you agree to be bound by these Terms. If you disagree
                  with any part of these Terms, you may not access or use the
                  Service.
                </p>

                <br />

                <h3 className="text-xl font-semibold">1. Use of the Service</h3>
                <br />

                <ul className="list-disc pl-5">
                  <li>You must be at least 18 years old to use our Service.</li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account and password and for restricting access to your
                    computer. You agree to accept responsibility for all
                    activities that occur under your account or password.
                  </li>
                  <li>
                    You may not use the Service for any illegal or unauthorised
                    purpose.
                  </li>
                  <li>
                    You may not interfere with or disrupt the Service or servers
                    or networks connected to the Service.
                  </li>
                  <li>
                    You may not violate any applicable laws or regulations.
                  </li>
                </ul>

                <br />
                <h3 className="text-xl font-semibold">
                  2. Intellectual Property
                </h3>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    The Service and all content included on the Service, such as
                    text, graphics, logos, images, and software, are the
                    property of MA Mark or its licensors and are protected by
                    copyright, trademark, and other intellectual property laws
                  </li>
                  <li>
                    You may not modify, publish, distribute, transmit,
                    reproduce, create derivative works from, or commercially
                    exploit any content from the Service.
                  </li>
                </ul>

                <br />
                <h3 className="text-xl font-semibold">3. User Content</h3>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    You may submit reviews, comments, photos, or other content
                    ("User Content") to the Service.
                  </li>
                  <li>You retain all ownership rights in your User Content.</li>
                  <li>
                    By submitting User Content, you grant MA Mark a
                    non-exclusive, royalty-free, worldwide licence to use,
                    modify, publish, distribute, transmit, reproduce, create
                    derivative works from, and publicly display your User
                    Content in connection with the Service.
                  </li>
                  <li>
                    You represent and warrant that you have all necessary rights
                    and permissions to submit your User Content and to grant the
                    licence set forth above.
                  </li>
                </ul>

                <br />
                <h3 className="text-xl font-semibold">4. Disclaimers</h3>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                    WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                    LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </li>
                  <li>
                    MA MARK DOES NOT WARRANT THAT THE SERVICE WILL BE
                    UNINTERRUPTED, ERROR-FREE, OR VIRUS-FREE.
                  </li>
                  <li>
                    MA Mark DOES NOT WARRANT THAT THE RESULTS THAT MAY BE
                    OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR
                    RELIABLE.
                  </li>
                </ul>

                <br />
                <h3 className="text-xl font-semibold">
                  5. Limitation of Liability
                </h3>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    IN NO EVENT SHALL MA MARK, ITS OFFICERS, DIRECTORS,
                    EMPLOYEES, OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT,
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
                    ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE
                    SERVICE, EVEN IF [Your Brand Name] HAS BEEN ADVISED OF THE
                    POSSIBILITY OF SUCH DAMAGES.
                  </li>
                </ul>

                <br />
                <h3 className="text-xl font-semibold">6. Termination</h3>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    We may terminate your access to the Service for any reason,
                    at any time, without notice.
                  </li>
                  <li>
                    You may terminate your access to the Service at any time.
                  </li>
                </ul>
                <br />

                <h3 className="text-xl font-semibold">7. Governing Law</h3>
                <br />
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of Delhi, without regard to its
                  conflict of law provisions.
                </p>
                <br />

                <h3 className="text-xl font-semibold">8. Entire Agreement</h3>
                <br />
                <p>
                  These Terms constitute the entire agreement between you and MA
                  Mark regarding your use of the Service.
                </p>
                <br />
                <h3 className="text-xl font-semibold">
                  9. Changes to the Terms
                </h3>
                <br />
                <p>
                  We may update these Terms from time to time. We will post any
                  changes on this page. You are responsible for checking these
                  Terms periodically for changes. Your continued use of the
                  Service after the posting of any changes constitutes your
                  acceptance of those changes.
                </p>
                <br />

                <h3 className="text-xl font-semibold">10. Contact Us</h3>
                <br />
                <p>
                  If you have any questions about these Terms, please contact us
                  at care.mamark@gmail.com or by phone at +91 98737 94849
                </p>
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

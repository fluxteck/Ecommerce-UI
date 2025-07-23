import React from "react";
import Link from "next/link";

import Navbar from '../components/navbar';
import FaqTwo from '../components/faq-two';
import Footer from '../components/footer';
import Switcher from '../components/switcher';
import ScrollToTop from "../components/scroll-to-top";

import {termsData} from '../data/data'

export default function Terms(){
    return(
        <>
        <Navbar navClass="defaultscroll is-sticky"/>
        <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-semibold">Terms of Services</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><Link href="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><Link href="">Utility</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold text-orange-500" aria-current="page">Terms</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <h5 className="text-xl font-semibold mb-4">Introduction :</h5>
                            <p className="text-slate-400">Terms of Service

Welcome to [Your Brand Name]!
These Terms of Service ("Terms") govern your access to and use of our website ([Your Website URL]) and the services we offer (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Service.
1. Use of the Service
You must be at least 18 years old to use the Service.
You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
You may not use the Service for any illegal or unauthorised purpose.
You may not interfere with or disrupt the Service or servers or networks connected to the Service.
You may not violate any applicable laws or regulations.
2. Intellectual Property
The Service and all content included on the Service, such as text, graphics, logos, images, and software, are the property of [Your Brand Name] or its licensors and are protected by copyright, trademark, and other intellectual property laws.
You may not modify, publish, distribute, transmit, reproduce, create derivative works from, or commercially exploit any content from the Service.
3. User Content
You may submit reviews, comments, photos, or other content ("User Content") to the Service.
You retain all ownership rights in your User Content.
By submitting User Content, you grant [Your Brand Name] a non-exclusive, royalty-free, worldwide licence to use, modify, publish, distribute, transmit, reproduce, create derivative works from, and publicly display your User Content in connection with the Service.
You represent and warrant that you have all necessary rights and permissions to submit your User Content and to grant the licence set forth above.
4. Disclaimers
THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
[Your Brand Name] DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR VIRUS-FREE.
[Your Brand Name] DOES NOT WARRANT THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE.
5. Limitation of Liability
IN NO EVENT SHALL [Your Brand Name], ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF [Your Brand Name] HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
6. Termination
We may terminate your access to the Service for any reason, at any time, without notice.
You may terminate your access to the Service at any time.
7. Governing Law
These Terms shall be governed by and construed in accordance with the laws of the State of [Your State], without regard to its conflict of law provisions.
8. Entire Agreement
These Terms constitute the entire agreement between you and [Your Brand Name] regarding your use of the Service.
9. Changes to the Terms
We may update these Terms from time to time. We will post any changes on this page. You are responsible for checking these Terms periodically for changes. Your continued use of the Service after the posting of any changes constitutes your acceptance of those changes.
10. Contact Us
If you have any questions about these Terms, please contact us at [email protected] or by phone at [phone number].
This Terms of Service is effective as of [Date].

</p>


<h1>Defalut para start</h1>
                            <h5 className="text-xl font-semibold mb-4 mt-8">User Agreements :</h5>
                            <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have <b className="text-red-600">originated</b> in the 16th century. Lorem Ipsum is <b className="text-red-600">composed</b> in a pseudo-Latin language which more or less <b className="text-red-600">corresponds</b> to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also <b className="text-red-600">incomprehensible</b>, but it imitates the rhythm of most European languages in Latin script. The <b className="text-red-600">advantage</b> of its Latin origin and the relative <b className="text-red-600">meaninglessness</b> of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's <b className="text-red-600">attention</b> from the layout.</p>
                            <p className="text-slate-400 mt-3">There is now an <b className="text-red-600">abundance</b> of readable dummy texts. These are usually used when a text is <b className="text-red-600">required purely</b> to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or <b className="text-red-600">nonsensical</b> stories.</p>
                            <p className="text-slate-400 mt-3">It seems that only <b className="text-red-600">fragments</b> of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                            
                            <h5 className="text-xl font-semibold mb-4 mt-8">Restrictions :</h5>
                            <p className="text-slate-400">You are specifically restricted from all of the following :</p>
                            <ul className="list-none text-slate-400 mt-3">
                                {termsData.map((item,index)=>{
                                    return(
                                        <li className="flex mt-2 ms-0" key={index}><i className="mdi mdi-chevron-right text-orange-500 text-lg align-middle me-2"></i>{item}</li>
                                    )
                                })}
                            </ul>

                            <h5 className="text-xl font-semibold mt-8">Users Question & Answer :</h5>

                            <FaqTwo/>

                            <div className="mt-6">
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-md">Accept</Link>
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-orange-500 border-orange-500 text-orange-500 hover:text-white rounded-md ms-2">Decline</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        <ScrollToTop/>
        </>
    )
}
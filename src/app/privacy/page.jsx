import React from "react";
import Link from "next/link";
import Navbar from '../components/navbar';
import {termsData} from '../data/data'
import Footer from '../components/footer'
import Switcher from '../components/switcher'
import ScrollToTop from "../components/scroll-to-top";

export default function Privacy(){
    return(
        <>
        <Navbar/>
        <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-semibold">Privacy Policy</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><Link href="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><Link href="">Utility</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold text-orange-500" aria-current="page">Privacy</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <h5 className="text-xl font-semibold mb-4">Overview :</h5>
                            <p className="text-slate-400">PRIVACY POLICY

1. INTRODUCTION

Welcome to our Privacy Policy. We are [Your Company Name], a leading leather goods and fashion brand based in India. We are committed to protecting the privacy and security of our customers and site visitors. The purpose of this Privacy Policy is to explain how we collect, use, share, and protect your personal information when you interact with us. This policy is in compliance with the Indian Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.

2. INFORMATION WE COLLECT

We collect personal information that you provide to us such as name, address, contact information, passwords and security data, payment information, and social media data. We collect this information for purposes such as facilitating orders, providing customer service, managing your account, conducting research and analysis, and communicating about our products, services, and promotions.

3. USE, STORAGE, AND SHARING OF INFORMATION

We use your personal information to operate, manage, and maintain our business, to provide our products and services, and to accomplish our business purposes and objectives. We store your personal information in a secure manner and implement appropriate technical and organizational measures to protect it. We may share your personal information with third-party service providers to perform services on our behalf.

4. THIRD-PARTY SERVICE PROVIDERS

Leathexa may engage third-party service providers to assist us in operating our website, conducting our business, and providing you with the services you request. These service providers may have access to your personal information and may use it on our behalf to provide services to us. We require these third-party service providers to adhere to strict confidentiality obligations and to comply with applicable data protection laws 
Payment processors: To process your payments for purchases made on our website.
Shipping carriers: To deliver your orders.
Marketing and analytics providers: To help us analyze website traffic, improve our marketing efforts, and personalize your experience.
Customer support providers: To assist you with any questions or issues you may have.
Cloud service providers: To store and process your data.


5. OPT-OUT OR DATA SUBJECT RIGHTS

You have the right to access, correct, update, or request deletion of your personal information at any time. You also have the right to opt-out of marketing communications we send you at any time.

6. DATA RETENTION AND SECURITY MEASURES

We retain your personal information for as long as necessary to fulfill the purposes for which we collected it. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.

7. APPLICABLE LAWS AND REGULATIONS

This Privacy Policy is in compliance with the Indian Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.

By using our website, you consent to the terms of this Privacy Policy. We may change our Privacy Policy from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.

If you have any questions about this Privacy Policy, please contact us at [Your Company Email Address].

.</p>


<h1>Delafut template para start</h1>
                        
                            <h5 className="text-xl font-semibold mb-4 mt-8">We use your information to :</h5>
                            <ul className="list-none text-slate-400 mt-4">
                                {termsData.map((item,index)=>{
                                    return(
                                        <li className="flex mt-2 ms-0" key={index}><i className="mdi mdi-chevron-right text-orange-500 text-lg align-middle me-2"></i>{item}</li>
                                    )
                                })}
                            </ul>

                            <h5 className="text-xl font-semibold mb-4 mt-8">Information Provided Voluntarily :</h5>
                            <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>

                            <div className="mt-8">
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-md">Print</Link>
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
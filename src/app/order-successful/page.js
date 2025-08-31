import React from "react";
import Link from "next/link";
import Image from "next/image";

import BackToHome from "../components/back-to-home";
import Navbar from "../components/navbar";

export default function OrderSuccessful() {
  return (
    <>
      <Navbar />

      <section className="relative bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          {/* Success Illustration */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/order.png"
              width={220}
              height={220}
              alt="Order Successful"
              className="w-48 md:w-56"
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Order Placed Successfully
          </h1>
          {/* Adding Order Summary Table here   */}
          {/* <OrderSummary /> */}

          {/* Order ID */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            <span className="font-semibold">Order ID:</span> #123456789
          </p>


          {/* Message */}
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Thank you for shopping with us! A confirmation email with your order
            details has been sent. You can track your order anytime from your
            account.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/user-account"
              className="w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-gray-800 rounded-xl shadow transition"
            >
              View Order Details
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 text-base font-medium border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition"
            >
              Continue Shopping
            </Link>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MA Mark. Built with ❤️ by{" "}
            <Link
              href="https://fluxteck.com/"
              target="_blank"
              className="text-green-600 hover:underline"
            >
              Fluxteck
            </Link>
          </div>
        </div>
      </section>

      <BackToHome />
    </>
  );
}


"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import BackToHome from "../components/back-to-home";

// ProductSummaryPage.jsx
// Ready-to-use Next.js + Tailwind component. Replace `sampleOrder` with real backend data

const sampleOrder = {
  id: "123456789",
  status: "Processing", // one of: 'Placed', 'Processing', 'Shipped', 'Out for delivery', 'Delivered'
  placedAt: new Date().toISOString(),
  shipping: {
    name: "Mohd Mohsin",
    addressLine1: "Flat 12, Green Apartments",
    city: "Agra",
    state: "Uttar Pradesh",
    postalCode: "282001",
    country: "India",
    phone: "+91 98765 43210",
  },
  items: [
    {
      id: "p1",
      name: "Classic Leather Sneakers",
      sku: "SNK-CL-01",
      price: 3499,
      qty: 1,
      image: "/images/product-1.jpg", // replace with backend image URL
      variant: "Size: 9 / Color: White",
    },
    {
      id: "p2",
      name: "Minimalist Wrist Watch",
      sku: "WT-ML-02",
      price: 2599,
      qty: 1,
      image: "/images/product-2.jpg",
      variant: "Color: Silver",
    },
  ],
  shippingCost: 99,
  discount: 200,
  paymentMethod: "Credit Card •••• 4242",
  currency: "INR",
};

function formatCurrency(amount, currency = "INR") {
  try {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency }).format(amount);
  } catch (e) {
    // fallback
    return `${currency} ${amount}`;
  }
}

export default function ProductSummaryPage({ order = sampleOrder }) {
  const [copied, setCopied] = useState(false);

  const itemsTotal = order.items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const subTotal = itemsTotal;
  const total = subTotal + (order.shippingCost || 0) - (order.discount || 0);

  const copyOrderId = async () => {
    if (!navigator?.clipboard) return;
    try {
      await navigator.clipboard.writeText(order.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  const statusSteps = [
    "Order placed",
    "Processing",
    "Shipped",
    "Out for delivery",
    "Delivered",
  ];

  const statusMap = {
    Placed: 0,
    Processing: 1,
    Shipped: 2,
    "Out for delivery": 3,
    Delivered: 4,
  };

  const currentStep = statusMap[order.status] ?? 1;

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* LEFT: Details (spans 2 cols on md+) */}
            <section className="md:col-span-2">
              {/* Header */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <svg
                        className="h-7 w-7 text-green-600 dark:text-green-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                      Thanks — your order is confirmed
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      We’ve emailed your receipt. You can track the progress below or view full order details.
                    </p>

                    <div className="mt-4 flex items-center gap-3 flex-wrap">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Order ID:</span>
                        <span className="ml-2 text-gray-800 dark:text-gray-100">{order.id}</span>
                      </p>

                      <button
                        onClick={copyOrderId}
                        className="text-sm px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 transition"
                      >
                        Copy
                      </button>

                      {copied && <span className="text-sm text-green-600">Copied!</span>}

                      <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                        Placed on {new Date(order.placedAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products list */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden divide-y divide-gray-100 dark:divide-gray-700">
                {order.items.map((item) => (
                  <div key={item.id} className="p-4 md:p-6 flex gap-4 items-center">
                    <div className="w-24 h-24 relative flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 dark:text-white truncate">{item.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">{item.variant}</p>

                      <div className="mt-3 flex items-center gap-4">
                        <div className="inline-flex items-center gap-2 text-sm">
                          <span className="text-gray-600 dark:text-gray-300">Qty {item.qty}</span>
                        </div>

                        <div className="ml-auto text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Unit</p>
                          <p className="font-medium text-gray-900 dark:text-white">{formatCurrency(item.price, order.currency)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right pl-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Subtotal</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{formatCurrency(item.price * item.qty, order.currency)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shipping + Timeline */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Shipping Address</h4>
                  <address className="not-italic mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {order.shipping.name}
                    <br />
                    {order.shipping.addressLine1}
                    <br />
                    {order.shipping.city}, {order.shipping.state} {order.shipping.postalCode}
                    <br />
                    {order.shipping.country}
                    <br />
                    <span className="block mt-2">{order.shipping.phone}</span>
                  </address>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Order Progress</h4>

                  <ol className="mt-4 space-y-3">
                    {statusSteps.map((s, idx) => {
                      const active = idx <= currentStep;
                      return (
                        <li key={s} className="flex items-start gap-3">
                          <span
                            aria-hidden
                            className={`mt-1 flex h-3 w-3 rounded-full ${active ? "bg-green-500" : "bg-gray-300 dark:bg-gray-700"}`}
                          />
                          <div>
                            <p className={`text-sm ${active ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>{s}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </section>

            {/* RIGHT: Summary panel */}
            <aside className="md:col-span-1">
              <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Order Summary</h3>

                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                    <span>Items</span>
                    <span>{formatCurrency(subTotal, order.currency)}</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                    <span>Shipping</span>
                    <span>{formatCurrency(order.shippingCost || 0, order.currency)}</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                    <span>Discount</span>
                    <span>-{formatCurrency(order.discount || 0, order.currency)}</span>
                  </div>

                  <div className="border-t pt-3 mt-3 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Payment</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{order.paymentMethod}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Total</p>
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">{formatCurrency(total, order.currency)}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <Link href={`/user-account/orders/${order.id}`} className="block text-center px-4 py-3 rounded-xl bg-gray-900 text-white font-medium">
                    View Order Details
                  </Link>

                  <button
                    onClick={() => window.print()}
                    className="block text-center px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    Download Invoice
                  </button>

                  <Link href="/" className="block text-center px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                    Continue Shopping
                  </Link>
                </div>

                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} MA Mark</div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <BackToHome />
    </>
  );
}

'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function WhatsAppChatButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // avoids hydration mismatch in Next.js
  }, []);

  if (!mounted) return null;

  return (
   <Link
  href="https://wa.me/+918285022383?text=Hello%20Team%2C%20I%20need%20some%20help!"
  target="_blank"
  rel="noopener noreferrer"
  id="whatsapp-chat"
  className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-3 py-1.5 sm:px-4 sm:py-2 text-white shadow-lg hover:bg-green-600 transition-all duration-300 text-sm sm:text-base"
>
  <i className="mdi mdi-whatsapp text-xl sm:text-2xl"></i>
  <span className="font-medium">Chat</span>
</Link>

  );
}

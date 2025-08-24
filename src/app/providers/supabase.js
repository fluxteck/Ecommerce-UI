// src/providers/SupabaseProvider.js
"use client";

import { useEffect } from "react";
import { supabaseClient } from "@/lib/supabase";
import { initSupabaseAuth } from "ecom-user-sdk/auth/supabase";

export default function SupabaseProvider({ children }) {
  useEffect(() => {
    const supabase = supabaseClient;
    initSupabaseAuth(supabase);
  }, []);

  return children;
}

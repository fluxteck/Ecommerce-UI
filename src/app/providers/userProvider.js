// components/NavbarClient.tsx
"use client";

import { useEffect, useState } from "react";
import { initSupabaseAuth } from "ecom-user-sdk/auth/supabase";
import { getUser } from "ecom-user-sdk/auth/supabase";
import { supabaseClient } from "@/lib/supabase";
import { useUserActions } from "ecom-user-sdk/user";

export default function UserProvider() {
  //   const [user, setUser] = useState(null);
  //   const [loading, setLoading] = useState(true);
  const { getUserByEmail } = useUserActions();

  useEffect(() => {
    async function loadUserOnce() {
      // console.log("in");

      //   const cached = await getUser();

      //   if (cached) {
      // setUser(cached);
      // setIsAuthenticated(true);
      // setAuthenticating(false);

      const supabase = supabaseClient;
      await initSupabaseAuth(supabase);
      //   await signInEmailPassword("t@gmail.com", "1234567");
      const { data, error } = await getUser();
      if (error) {
        // console.log("Error fetching user:", error);
        return;
      }
      //   console.log(data);

      getUserByEmail({ email: data.user.email });
    }

    loadUserOnce();
  }, []);

  return null;
}

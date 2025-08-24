// middleware.ts
import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request) {
  // console.log("in middleware");

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (key) => request.cookies.get(key)?.value,
        set: (key, value, options) => {
          response.cookies.set(key, value, options);
        },
        remove: (key, options) => {
          response.cookies.delete(key, options);
        },
      },
    }
  );

  const { data } = await supabase.auth.getUser();
  // console.log(data);
  const { user } = data;

  if (!user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/login";
    redirectUrl.searchParams.set(
      "next",
      request.nextUrl.pathname + request.nextUrl.search
    );
    return NextResponse.redirect(redirectUrl);
  }
  // if(user && user.user_metadata.role === "shop"){

  // }
  return response;
}

export const config = {
  matcher: ["/shop-checkout", "/shop-cart"], // Apply only to these paths
};

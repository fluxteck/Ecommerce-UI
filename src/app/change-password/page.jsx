"use client";
import React, { Suspense } from "react";
import ChangePassword from "./change-password"; 

export default function ChangePasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChangePassword />
    </Suspense>
  );
}

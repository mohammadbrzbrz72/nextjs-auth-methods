import React from "react";
import AuthLayout from "@/layouts/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <AuthLayout>{children}</AuthLayout>
    </div>
  );
}

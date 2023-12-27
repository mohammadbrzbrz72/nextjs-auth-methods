import React from "react";
import PublicLayout from "@/layouts/public";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PublicLayout>
      <div>{children}</div>
    </PublicLayout>
  );
};

export default Layout;

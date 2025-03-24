import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-payment-pattern min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default Layout;

"use client";
import { useEffect, useState } from "react";
export default function ClientOnlyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null; 
  }

  return <div className="flex flex-col min-h-screen overflow-scroll">{children}</div>;
}

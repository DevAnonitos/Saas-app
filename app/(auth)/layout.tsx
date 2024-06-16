import React, { Suspense } from "react";
import LoaderSpinner from "@/components/LoaderSpinner";
import Image from "next/image";

export default function AuthLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        
      </div>
      <Suspense fallback={<LoaderSpinner />}>
        {children}
      </Suspense>
    </main>
  );
};
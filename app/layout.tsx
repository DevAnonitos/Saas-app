import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import LoaderSpinner from "@/components/LoaderSpinner";

import AudioProvider from "@/providers/AudioProvider";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PodFy",
  creator: "DevAnonitos",
  publisher: "DevAnonitos",
  keywords: ["next.js", "react.js", "typescript", "javascript"],
  description: "PodFy is a web app to create AI SAAS development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ConvexClerkProvider>
      <html lang="en">
        {/* <AudioProvider> */}
          <Suspense fallback={<LoaderSpinner />}>
            <body className={`${manrope.className}`}>
              {children}
            </body>
          </Suspense>
        {/* </AudioProvider> */}
      </html>
    // </ConvexClerkProvider>
  );
};

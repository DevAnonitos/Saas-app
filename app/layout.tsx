import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

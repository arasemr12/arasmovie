import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Aras Movies",
  description: "Discover the latest movies and TV shows",
  openGraph:{
    title:"Aras Movies",
    description: "Discover the latest movies and TV shows",
    type:"website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={"dark"}
    >
      <body className="min-h-full flex flex-col"><Toaster />{children}</body>
    </html>
  );
}

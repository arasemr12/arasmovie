import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Aras Movies",
  description: "Discover the latest movies and TV shows",
  openGraph: {
    title: "Aras Movies",
    description: "Discover the latest movies and TV shows",
    type: "website",
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
      <body className="min-h-full flex flex-col">
        <Toaster />
        {children}
        {/*ADS SCRIPTS*/}
        <Script async data-cfasync="false" src="https://pl29197589.profitablecpmratenetwork.com/a2b666581bc43f3fdde076169b24d633/invoke.js"/>
        <Script async data-cfasync="false" src="https://pl29197590.profitablecpmratenetwork.com/70/7e/32/707e3239e29b86d1a0bff5b09e7bac4b.js"/>
      </body>
    </html>
  );
}

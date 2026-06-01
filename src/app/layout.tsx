import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Accurate Trade Links (ATL) | Enterprise Solutions",
  description: "Precision Weighing, Billing & Industrial Automation Solutions. Trusted by businesses, industries, laboratories, healthcare institutions and government organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} font-sans antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

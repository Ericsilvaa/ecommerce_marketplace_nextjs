import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import AppCartProvider from "@/components/shop/AppCartProvider";
import "./globals.css";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(oxygen.className, "min-h-screen flex flex-col")}>
        <AppCartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <div>FOOTER</div>
          <Toaster />
        </AppCartProvider>
      </body>
    </html>
  );
}

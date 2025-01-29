import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Management Dashboard",
  description: "A modern project management dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <Header />
        <main className="pl-[250px] pt-[60px] min-h-screen bg-[#F8F9FA]">
          <div className="p-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

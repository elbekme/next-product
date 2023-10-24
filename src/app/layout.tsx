import type { Metadata } from "next";
import { Inter } from "next/font/google";

import childrenType from "@/types/children";

import "../../globals.css";
import StoreProvider from "@/redux/store/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Najot e-commerce",
  description: "E-commerce website forever",
};

export default function RootLayout({ children }: childrenType) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

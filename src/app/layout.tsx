import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '/src/app/globals.css'
import Login from "../../pages/Login";
import SalePage from "../../pages/SalePage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
<div>123</div>
        {/* <Login /> */}
        {/* <SalePage /> */}

      </body>
    </html>
  );
}

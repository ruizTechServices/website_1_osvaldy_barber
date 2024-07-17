import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BurgerNavbar from "../../components/mainUI/navbar";
import { Footer } from "@/components/mainUI/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osvaldy the Barber",
  description: "Haircuts and Beauty Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black scroll-smooth`}>
          <BurgerNavbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

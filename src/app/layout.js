import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { OrderProvider } from "@/app/order/OrderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Matt's Pizzeria",
  description: "Best pizza in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        <OrderProvider>
        <Providers>
          <main className="max-w-6xl mx-auto my-4">
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
        </OrderProvider>
      </body>
    </html>
  );
}

import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Ecommerce from "@/components/E-Commerce/Ecommerce";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: "500",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: "400",
});

export default function Ecommerces() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - E-Commerce Platform</title>
        <meta
          name="description"
          content="Discover and shop for products, services, and digital goods on Vigoplace's comprehensive e-commerce platform."
        />
        <meta
          name="keywords"
          content="e-commerce, marketplace, products, services, digital goods, shop online, Vigoplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Ecommerce />
    </div>
  );
}

import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Activity from "@/components/Activity";
import MarketPlace from "@/components/E-Commerce/MarketPlace";
import ProductPost from "@/components/E-Commerce/Product";
import ServicePost from "@/components/E-Commerce/ServicePosts";
import DigitalGoods from "@/components/E-Commerce/DigitalGoods";

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

export default function Ecommerce() {
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

      <Activity />
      <MarketPlace />
      <ProductPost />
      <ServicePost />
      <DigitalGoods />
    </div>
  );
}

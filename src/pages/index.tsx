import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Hero from "@/components/Hero";
import Business from "@/components/Business";
import FinanceServices from "@/components/FinanceServices";
import GroupPlace from "@/components/GroupPlace";
import Church from "@/components/Church";
import Ecommerce from "@/components/Ecommerce";
import Benefit from "@/components/Benefit";
import Sell from "@/components/Sell";
import Contest from "@/components/Contest";
import FundRaising from "@/components/FundRaising";
import Carousel from "@/components/Carousel";
import How from "@/components/How";

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

export default function Home() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Your Tech Solution</title>
        <meta
          name="description"
          content="Vigoplace offers top-notch tech solutions for your needs."
        />
        <meta name="keywords" content="Tech, Solutions, Services, Vigoplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Business />
      <FinanceServices />
      <GroupPlace />
      <Church />
      <Ecommerce />
      <Benefit />
      <Sell />
      <Contest />
      <FundRaising />
      <Carousel />
      <How />
    </div>
  );
}

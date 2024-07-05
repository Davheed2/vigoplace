import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { BaseLayout } from "@/layouts/BaseLayout";
import Hero from "@/components/Home/Hero";
import Business from "@/components/Home/Business";
import FinanceServices from "@/components/Home/FinanceServices";
import GroupPlace from "@/components/Home/GroupPlace";
import Church from "@/components/Home/Church";
import Ecommerce from "@/components/Home/Ecommerce";
import Benefit from "@/components/Home/Benefit";
import Sell from "@/components/Home/Sell";
import Contest from "@/components/Home/Contest";
import FundRaising from "@/components/Home/FundRaising";
import Carousel from "@/components/Home/Carousel";
import How from "@/components/Home/How";

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

      <BaseLayout>
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
      </BaseLayout>
    </div>
  );
}

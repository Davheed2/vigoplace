import Head from "next/head";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import NavBar from "@/components/NavBar";
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

      <NavBar />
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
    </div>
  );
}

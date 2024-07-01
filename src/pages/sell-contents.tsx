import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Activity from "@/components/Activity";
import Channel from "@/components/SellContent/Channel";
import PayToView from "@/components/SellContent/PayToView";
import Buy from "@/components/SellContent/Buy";
import Rent from "@/components/SellContent/Rent";
import Subscription from "@/components/SellContent/Subscription";

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

export default function SellContent() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Digital Content Selling Solutions</title>
        <meta
          name="description"
          content="Explore digital content selling solutions with Vigoplace. Sell your content through various channels, offer pay-to-view options, sell products, rent services, and provide subscription-based content."
        />
        <meta
          name="keywords"
          content="digital content selling, sell digital products, pay-to-view, buy digital content, rent digital services, subscription services, Vigoplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Activity />
      <Channel />
      <PayToView />
      <Buy />
      <Rent />
      <Subscription />
    </div>
  );
}

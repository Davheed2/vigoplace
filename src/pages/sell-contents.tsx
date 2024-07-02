import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import SellContent from "@/components/SellContent/SellContent";

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

export default function SellContents() {
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

      <SellContent />
    </div>
  );
}

import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Activity from "@/components/Activity";
import Giving from "@/components/Giving";
import BiblePost from "@/components/BiblePost";
import OfferingPost from "@/components/OfferingPost";
import PrayerRequest from "@/components/PrayerRequest";

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

export default function ChurchActivity() {
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

      <Activity />
      <Giving />
      <BiblePost />
      <OfferingPost />
      <PrayerRequest />
    </div>
  );
}

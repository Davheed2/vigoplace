import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Activity from "@/components/Activity";
import Giving from "@/components/ChurchActivity/Giving";
import BiblePost from "@/components/ChurchActivity/BiblePost";
import OfferingPost from "@/components/ChurchActivity/OfferingPost";
import PrayerRequest from "@/components/ChurchActivity/PrayerRequest";

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
        <title>Vigoplace - Church Activities</title>
        <meta
          name="description"
          content="Engage in various church activities like giving, reading Bible posts, making offerings, and submitting prayer requests through Vigoplace's comprehensive platform."
        />
        <meta
          name="keywords"
          content="church activities, giving, Bible posts, offering, prayer requests, Vigoplace, tech solutions"
        />
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

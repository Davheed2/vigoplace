import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Activity from "@/components/Activity";
import ContestPlace from "@/components/OnlineContests/ContestPlace";
import Contestants from "@/components/OnlineContests/Contestants";
import PaidContest from "@/components/OnlineContests/PaidContest";
import FreeContest from "@/components/OnlineContests/FreeContest";

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

export default function Contest() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Online Contests</title>
        <meta
          name="description"
          content="Participate in exciting online contests at Vigoplace. Join contests, compete with others, and win amazing prizes."
        />
        <meta
          name="keywords"
          content="online contests, contest platform, compete, win prizes, Vigoplace, tech solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Activity />
      <ContestPlace />
      <Contestants />
      <PaidContest />
      <FreeContest />
    </div>
  );
}

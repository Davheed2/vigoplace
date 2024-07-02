import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Fundraising from "@/components/Fundraising/Fundraising";

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

export default function Fundraisings() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Fundraising Solutions</title>
        <meta
          name="description"
          content="Engage in various fundraising activities with Vigoplace's tech platform. Post your fundraising campaigns and gain support for your cause."
        />
        <meta
          name="keywords"
          content="fundraising, fundraising campaigns, support posts, tech solutions, Vigoplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fundraising />
    </div>
  );
}

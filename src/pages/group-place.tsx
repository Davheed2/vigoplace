import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import GroupPlace from "@/components/GroupPlace/GroupPlace";
import { BaseLayout } from "@/layouts/BaseLayout";

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

export default function Group() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Group Place</title>
        <meta
          name="description"
          content="View and create channel place profiles with loved ones effortlessly with Vigoplace's comprehensive tech solutions."
        />
        <meta
          name="keywords"
          content="group, create group place profiles, tech solutions, Vigoplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout>
        <GroupPlace />
      </BaseLayout>
    </div>
  );
}

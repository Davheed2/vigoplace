import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import MinistryPlace from "@/components/MinistryPlace/MinistryPlace";
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

export default function Ministry() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Ministry Place</title>
        <meta
          name="description"
          content="View and create ministry place profiles effortlessly with Vigoplace's comprehensive tech solutions."
        />
        <meta
          name="keywords"
          content="ministry, create ministry place profiles, tech solutions, Vigoplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout>
        <MinistryPlace />
      </BaseLayout>
    </div>
  );
}

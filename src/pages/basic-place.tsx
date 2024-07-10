import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import BasicPlace from "@/components/BasicPlace/BasicPlace";
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

export default function Basic() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Basic Place</title>
        <meta
          name="description"
          content="View and create basic place profiles effortlessly with Vigoplace's comprehensive tech solutions."
        />
        <meta
          name="keywords"
          content="basic place, create basic place profiles, tech solutions, Vigoplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout>
        <BasicPlace />
      </BaseLayout>
    </div>
  );
}

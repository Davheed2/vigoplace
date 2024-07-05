import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Fund from "@/components/Funding/Fund";
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

export default function Funding() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Funding Solutions</title>
        <meta
          name="description"
          content="Explore funding solutions with Vigoplace's comprehensive tech platform, designed to help you secure the financial resources you need."
        />
        <meta
          name="keywords"
          content="funding, financial solutions, tech platform, secure funding, Vigoplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout>
        <Fund />
      </BaseLayout>
    </div>
  );
}

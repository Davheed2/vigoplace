import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import BankTransfer from "@/components/BankTransfer/BankTransfer";

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

export default function BankTransfers() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Secure Bank Transfers</title>
        <meta
          name="description"
          content="Manage and process secure bank transfers with Vigoplace's advanced tech solutions."
        />
        <meta
          name="keywords"
          content="bank transfers, secure transactions, tech solutions, Vigoplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BankTransfer />
    </div>
  );
}

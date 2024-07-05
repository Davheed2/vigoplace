import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import FinancialService from "@/components/FinancialService/FinancialService";
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

export default function FinancialServices() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Financial Services</title>
        <meta
          name="description"
          content="Access a variety of financial services including multi-wallet management, KYC, online banking, transactions, transfers, and more with Vigoplace's tech solutions."
        />
        <meta
          name="keywords"
          content="financial services, multi-wallet, KYC, online banking, transactions, transfers, wallet, OTP, receipts, statements, expenses, Vigoplace, tech solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout>
        <FinancialService />
      </BaseLayout>
    </div>
  );
}

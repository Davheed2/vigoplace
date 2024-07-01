import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Activity from "@/components/Activity";
import MultiWallet from "@/components/FinancialService/Multi-Wallet";
import Kyc from "@/components/FinancialService/KYC";
import OnlineBanking from "@/components/FinancialService/OnlineBanking";
import Transaction from "@/components/FinancialService/Transaction";
import Transfer from "@/components/FinancialService/Transfer";
import Wallet from "@/components/FinancialService/Wallet";
import OTP from "@/components/FinancialService/OTP";
import Receipts from "@/components/FinancialService/Receipts";
import Statement from "@/components/FinancialService/Statement";
import Expense from "@/components/FinancialService/Expense";

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

      <Activity />
      <MultiWallet />
      <Kyc />
      <OnlineBanking />
      <Transaction />
      <Transfer />
      <Wallet />
      <OTP />
      <Receipts />
      <Statement />
      <Expense />
    </div>
  );
}

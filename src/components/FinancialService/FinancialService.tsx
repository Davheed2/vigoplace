import Image from "next/image";
import FinanceImage from "../../../public/img//Why/Frame 238218 (3).webp";
import Wallet from "../../../public/img/Wallet.svg";
import Kyc from "../../../public/img/icon-park_customer.svg";
import Bank from "../../../public/img/arcticons_raiffeisen-e-banking.svg";
import Card from "../../../public/img/Card.svg";
import Transfer from "../../../public/img/Transfer.svg";
import SolarCard from "../../../public/img/solar_card-transfer-broken.svg";
import OTP from "../../../public/img/arcticons_authenticate.svg";
import Transaction from "../../../public/img/carbon_receipt.svg";
import Statement from "../../../public/img/lucide_receipt.svg";
import ExpenseTrack from "../../../public/img/hugeicons_text-tracking.svg";

const FinancialService: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu sm:text-center md:text-4xl lg:text-4xl xl:text-5xl">
          Financial Service
        </h2>

        <p className="mb-4 sm:text-center sm:w-[70%] sm:mx-auto sm:mb-9 md:w-[60%] md:text-base lg:text-lg">
          Vigoplace provides a secure and user-friendly financial management
          system.
        </p>

        <div className="mb-4">
          <Image
            src={FinanceImage}
            alt="Finance Image"
            priority={true}
            fetchPriority="high"
            height={400}
            width={400}
            layout="responsive"
          />
        </div>
      </section>

      <section
        id="multi-wallet-system"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Wallet}
              alt="Wallet Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Multi-wallet system
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Manage multiple currency wallets within the app, supporting
              international transactions
            </p>
          </div>
        </div>
      </section>

      <section id="kyc" className="rounded-t-md pt-4 pb-8 font-nunito bg-white">
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              KYC (Know Your Customer)
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Ensure secure user verification to protect against fraud.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Kyc}
              alt="KYC Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="secure-online-banking"
        className="pt-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Bank}
              alt="Bank Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Secured online banking
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Safe and secure online banking features for peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section
        id="cardless-transaction"
        className="mb-8 rounded-b-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Cardless transaction
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Use virtual wallets for seamless and secure transactions without
              needing physical cards.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Card}
              alt="Card Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="inter-bank-transfers"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Transfer}
              alt="Transfer Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Inter-bank transfer
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Easily transfer funds between different banks.
            </p>
          </div>
        </div>
      </section>

      <section
        id="wallet-to-wallet"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Wallet to wallet
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Transfer money between Vigoplace wallets quickly and securely.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={SolarCard}
              alt="Solar Card Wallet Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="otp-for-transfers"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={OTP}
              alt="OTP Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              OTP For transfer
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Enhanced security with One-Time Password requirements for all
              transfers.
            </p>
          </div>
        </div>
      </section>

      <section
        id="transaction-receipts"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Transaction receipts
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Transaction Receipts: Keep detailed records of all transactions.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Transaction}
              alt="Transaction Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="transaction-statements"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Statement}
              alt="Statement Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Transaction statements
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Access comprehensive financial statements for better financial
              planning.
            </p>
          </div>
        </div>
      </section>

      <section
        id="expense-tracking"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Expense tracking
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Monitor and manage your spending within the app.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={ExpenseTrack}
              alt="Expense Track Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialService;

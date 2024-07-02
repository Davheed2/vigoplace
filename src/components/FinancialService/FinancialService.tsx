import Image from "next/image";
import ActivityImage from "../../../public/img/vigo-removebg-preview 1.svg";

const FinancialService: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">
          Financial Service{" "}
        </h2>

        <p className="mb-4">
          For a successful transaction, every transaction on the app incurs a
          minor percentage-based fee.{" "}
        </p>

        <div className="mb-4 bg-theme rounded">
          <Image
            src={ActivityImage}
            alt="Activity Image"
            //   width={25}
            //   height={25}
            className="mx-auto"
          />
        </div>
      </section>

      <section id="multi-wallet-system" className="mb-8 rounded-md py-4 font-nunito bg-white">
        <div className="flex items-center">
          <div className="bg-theme pt-5 rounded ml-2 mr-12 h-32 w-96">
            {/* <Image
      src={ActivityImage}
      alt="Check Icon"
      //   width={25}
      //   height={25}
      //className="mr-3 mt-1 ml-2"
    /> */}
          </div>
          <div className="mr-2">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Multi-wallet system
            </h2>

            <p className="mb-2">
              For a successful transaction, every transaction on the app incurs
              a minor percentage-based fee.{" "}
            </p>
          </div>
        </div>
      </section>

      <section id="kyc" className="rounded-t-md pt-4 pb-8 font-nunito bg-white">
      <div className="flex items-center px-4">
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">
            {" "}
            KYC (Know Your Customer)
          </h2>

          <p className="mb-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </p>
        </div>

        <div className="bg-theme pt-5 rounded ml-2 h-32 w-96">
          {/* <Image
            src={BiblePostImage}
            alt="Bible Post Image"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
      </div>
    </section>

    <section id="secure-online-banking" className="pt-4 pb-8 font-nunito bg-white">
      <div className="flex items-center">
        <div className="bg-theme pt-5 rounded ml-2 mr-12 h-32 w-96">
          {/* <Image
            src={ActivityImage}
            alt="Check Icon"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">Secured online banking</h2>

          <p className="mb-2">
            For a successful transaction, every transaction on the app incurs a
            minor percentage-based fee.{" "}
          </p>
        </div>
      </div>
    </section>

    <section id="cardless-transaction" className="mb-8 rounded-b-md py-4 font-nunito bg-white">
      <div className="flex items-center px-4">
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">Cardless transaction</h2>

          <p className="mb-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </p>
        </div>

        <div className="bg-theme pt-5 rounded ml-2 h-32 w-96">
          {/* <Image
            src={BiblePostImage}
            alt="Bible Post Image"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
      </div>
    </section>

    <section id="inter-bank-transfers" className="mb-8 rounded-md py-4 font-nunito bg-white">
      <div className="flex items-center">
        <div className="bg-theme pt-5 rounded ml-2 mr-12 h-32 w-96">
          {/* <Image
            src={ActivityImage}
            alt="Check Icon"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">Inter-bank transfer</h2>

          <p className="mb-2">
            For a successful transaction, every transaction on the app incurs a
            minor percentage-based fee.{" "}
          </p>
        </div>
      </div>
    </section>

    <section id="wallet-to-wallet" className="mb-8 rounded-md py-4 font-nunito bg-white">
      <div className="flex items-center px-4">
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">Wallet to wallet</h2>

          <p className="mb-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </p>
        </div>

        <div className="bg-theme pt-5 rounded ml-2 h-32 w-96">
          {/* <Image
            src={BiblePostImage}
            alt="Bible Post Image"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
      </div>
    </section>

    <section id="otp-for-transfers" className="mb-8 rounded-md py-4 font-nunito bg-white">
      <div className="flex items-center">
        <div className="bg-theme pt-5 rounded ml-2 mr-12 h-32 w-96">
          {/* <Image
            src={ActivityImage}
            alt="Check Icon"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">OTP For transfer</h2>

          <p className="mb-2">
            For a successful transaction, every transaction on the app incurs a
            minor percentage-based fee.{" "}
          </p>
        </div>
      </div>
    </section>

    <section id="transaction-receipts" className="mb-8 rounded-md py-4 font-nunito bg-white">
      <div className="flex items-center px-4">
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">Transaction receipts</h2>

          <p className="mb-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </p>
        </div>

        <div className="bg-theme pt-5 rounded ml-2 h-32 w-96">
          {/* <Image
            src={BiblePostImage}
            alt="Bible Post Image"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
      </div>
    </section>

    <section id="transaction-statements" className="mb-8 rounded-md py-4 font-nunito bg-white">
      <div className="flex items-center">
        <div className="bg-theme pt-5 rounded ml-2 mr-12 h-32 w-96">
          {/* <Image
            src={ActivityImage}
            alt="Check Icon"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">Transaction statements</h2>

          <p className="mb-2">
            For a successful transaction, every transaction on the app incurs a
            minor percentage-based fee.{" "}
          </p>
        </div>
      </div>
    </section>

    <section id="expense-tracking" className="mb-8 rounded-md py-4 font-nunito bg-white">
      <div className="flex items-center px-4">
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">
            Expense tracking
          </h2>

          <p className="mb-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </p>
        </div>

        <div className="bg-theme pt-5 rounded ml-2 h-32 w-96">
          {/* <Image
            src={BiblePostImage}
            alt="Bible Post Image"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
      </div>
    </section>
    </>
  );
};

export default FinancialService;
import Image from "next/image";
import ActivityImage from "../../../public/img/vigo-removebg-preview 1.svg";
import Check from "../../../public/img/icon-park-solid_check-one purple.svg";

const Charge: React.FC = () => {
  return (
    <>
      <section className="mb-8 font-nunito">
        <h2 className="mb-2 text-2xl font-bold font-ubuntu">Funding Wallet</h2>
        <h2 className="mb-2 text-2xl font-bold font-ubuntu">
          Charges on Earnings
        </h2>
        <div className="rounded-md bg-white px-3 py-4 ">
          <p className="mb-8 font-semibold">
            Earnings from products and services
          </p>
          <div className="mb-8">
            <div className="flex mb-8 items-center">
              <Image
                src={Check}
                alt="Check Icon"
                width={25}
                height={25}
                className="mr-3 mb-auto mt-1"
              />

              <p className="">Product and service charge (P&SC) = 5%</p>
            </div>
          </div>

          <div>
            <p className="mb-5 font-semibold">Example:</p>
            <p className="mb-4">Transaction amount = 1000</p>
            <p className="mb-4">Bank Transfer charge = 50 (5% of 10000)</p>
            <p className="mb-4">Total Fee = 50</p>
            <p className="mb-2">Funds to be received = 950 (1000 – 50)</p>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-md font-nunito bg-pricingbackground1">
        <div className=" px-3 py-4">
          <p className="mb-8 font-semibold">Earnings from Gift posts</p>
          <div className="mb-4">
            <div className="flex mb-8 items-center">
              <Image
                src={Check}
                alt="Check Icon"
                width={25}
                height={25}
                className="mr-3 mb-auto mt-1 items-center"
              />
              <div className="">
                <p className="">Gift Charge (GC) = 10%</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 font-semibold">Example:</p>
            <p className="mb-4">Transaction amount = 1000</p>
            <p className="mb-4">Charge amount = 100 (10% of 1000)</p>

            <p className="mb-4">Total fee = 100</p>
            <p className="mb-2">Funds to be received = 900 (1000 – 100)</p>
          </div>
        </div>
      </section>

      <section className="mb-8 font-nunito">
        <div className="rounded-md bg-white px-3 py-4">
          <p className="mb-8 font-semibold">Earnings from voting posts</p>
          <div className="mb-8">
            <div className="flex mb-4 items-center">
              <Image
                src={Check}
                alt="Check Icon"
                width={25}
                height={25}
                className="mr-3 mb-auto mt-1"
              />

              <p className="">Voting charge (VC) = 5%</p>
            </div>
          </div>

          <div>
            <p className="mb-5 font-semibold">Example:</p>
            <p className="mb-4">Transaction amount = 1000</p>
            <p className="mb-4">Charge amount = 50 (5% of 1000)</p>

            <p className="mb-4">Total fee = 50</p>
            <p className="mb-2">Funds to be received = 950 (1000 – 50)</p>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-md font-nunito bg-pricingbackground3">
        <div className="px-3 py-4">
          <p className="mb-8 font-semibold">
            Earnings from subscribing, renting and buying:
          </p>
          <div className="mb-8">
            <div className="flex mb-8 items-center">
              <Image
                src={Check}
                alt="Check Icon"
                width={25}
                height={25}
                className="mr-3 mb-auto mt-1"
              />

              <p className="">Channel place charge (CC) = 5%</p>
            </div>
          </div>

          <div>
            <p className="mb-5 font-semibold">Example:</p>
            <p className="mb-4">Transaction amount = 1000</p>
            <p className="mb-4">Charge amount = 50 (5% of 1000)</p>
            <p className="mb-4">Total fee = 50</p>
            <p className="mb-2">Funds to be received = 950 (1000 – 50)</p>
          </div>
        </div>
      </section>

      <section className="mb-8 font-nunito">
        <h2 className="mb-4 text-2xl w-[60%] font-bold font-ubuntu">
          Earnings from fundraising post
        </h2>

        <div className="rounded-md px-3 py-4 bg-white">
          <p className="mb-8 font-semibold">Earnings from voting posts</p>
          <div className="mb-4">
            <div className="flex mb-8 items-center">
              <Image
                src={Check}
                alt="Check Icon"
                width={25}
                height={25}
                className="mr-3 mb-auto mt-1"
              />
              <div className="">
                <p className="">USD Fundraising charge (FRC) = 6%</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 font-semibold">Example:</p>
            <p className="mb-4">Transaction amount = 1000</p>
            <p className="mb-4">Charge amount = 60 (6% of 1000)</p>
            <p className="mb-4">Total fee = 60</p>
            <p className="mb-2">Funds to be received = 940 (1000 – 60)</p>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-md font-nunito bg-pricingbackground2">
        <div className="px-3 py-4">
          <p className="mb-8 font-semibold">Earnings from voting posts</p>
          <div className="mb-8">
            <div className="flex mb-8 items-center">
              <Image
                src={Check}
                alt="Check Icon"
                width={25}
                height={25}
                className="mr-3 mb-auto mt-1"
              />

              <p className="">NGN Fundraising charge (FRC) = 5%</p>
            </div>
          </div>

          <div>
            <p className="mb-5 font-semibold">Example:</p>
            <p className="mb-4">Transaction amount = 1000</p>
            <p className="mb-4">Charge amount = 50 (5% of 1000)</p>
            <p className="mb-4">Total fee = 50</p>
            <p className="mb-2">Funds to be received = 950 (1000 – 50)</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Charge;

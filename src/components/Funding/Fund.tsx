import Image from "next/image";
import FundingImage from "../../../public/img/Frame 238218 (7).svg";
import Check from "../../../public/img/icon-park-solid_check-one purple.svg";

const Fund: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-center md:text-4xl lg:text-4xl xl:text-5xl">
          Pricing
        </h2>

        <p className="mb-4 md:text-center md:text-base lg:text-lg">
          For a successful transaction, every transaction on the app incurs a
          minor percentage-based fee.
        </p>

        <div className="mb-4">
          <Image
            src={FundingImage}
            alt="Pricing Image"
            priority={true}
            fetchPriority="high"
            className="w-[100%]"
          />
        </div>
      </section>

      <section id="funding-naira-card" className="mb-8 font-nunito">
        <h2 className="mb-2 text-2xl font-bold font-ubuntu md:text-center md:mb-10">
          Funding Wallet
        </h2>
        <div className="rounded-md px-3 py-4 bg-pricingbackground1">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Funding Naira wallet using a Naira card
              </p>

              <div className="">
                <div className="flex mb-4 items-center">
                  <Image
                    src={Check}
                    alt="Check Icon"
                    width={25}
                    height={25}
                    className="mr-3 mb-auto mt-1"
                  />

                  <p className="">Card processing fee (CPF) = 1.5% + 100</p>
                </div>
                <div className="flex mb-4 items-center">
                  <Image
                    src={Check}
                    alt="Check Icon"
                    width={25}
                    height={25}
                    className="mr-3 mb-auto mt-1 items-center"
                  />
                  <div className="">
                    <p className="">
                      Funding charge (FC) = 10% of Card processing fee.
                    </p>
                  </div>
                </div>
                <div className="flex mb-4 items-center">
                  <Image
                    src={Check}
                    alt="Check Icon"
                    width={25}
                    height={25}
                    className="mr-3 mb-auto mt-1"
                  />
                  <div className="">
                    <p className="">Total charge = CPF + FC</p>
                  </div>
                </div>

                <div className="flex mb-8 items-center">
                  <Image
                    src={Check}
                    alt="Check Icon"
                    width={25}
                    height={25}
                    className="mr-3 mb-auto mt-1"
                  />
                  <div className="">
                    <p className="">
                      <span className="font-bold">Note:</span> 100 fee is waived
                      for transactions under 2,500
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 1000</p>
              <p className="mb-4">Card processing fee = 29 (2.9% of 1000)</p>
              <p className="mb-4">Funding charge = 2.9 (10% of 29)</p>
              <p className="mb-4">Total Fee = 31.9</p>
              <p className="mb-2">Funds to be received = 961 (1000 – 31.9)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="funding-usd-card" className="mb-8 font-nunito">
        <div className="rounded-md bg-white px-3 py-4">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Funding US dollar wallet using a USD card
              </p>

              <div className="">
                <div className="mb-4">
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">
                      Card processing fee (CPF) = 2.9% + a fixed 0.3 cent
                    </p>
                  </div>
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1 items-center"
                    />
                    <div className="">
                      <p className="">
                        Funding charge (FC) = 10% of Card processing fee (CPF)
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />
                    <div className="">
                      <p className="">Total charge = CPF + FC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 1000</p>
              <p className="mb-4">Card processing fee = 49 (4.9% of 1000)</p>
              <p className="mb-4">Funding charge = 4.9 (10% of 49)</p>
              <p className="mb-4">Total fee = 53.9</p>
              <p className="mb-2">Funds to be received = 946.1 (1000 – 53.9)</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="funding-non-us-card"
        className="mb-8 font-nunito bg-pricingbackground1 rounded-md"
      >
        <div className="px-3 py-4">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Funding US dollar wallet using a non-US card
              </p>

              <div className="">
                <div className="mb-4">
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">
                      Card processing fee (CPF) = 4.9% + a fixed 0.3 cent
                    </p>
                  </div>
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1 items-center"
                    />
                    <div className="">
                      <p className="">
                        Funding charge (FC) = 10% of Card processing fee (CPF)
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />
                    <div className="">
                      <p className="">Total charge = CPF + FC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 1000</p>
              <p className="mb-4">Card processing fee = 49 (4.9% of 1000)</p>
              <p className="mb-4">Funding charge = 4.9 (10% of 49)</p>
              <p className="mb-4">Total fee = 53.9</p>
              <p className="mb-2">Funds to be received = 946.1 (1000 – 53.9)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="funding-virtual-account" className="mb-8 font-nunito">
        <div className="rounded-md bg-white px-3 py-4">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">Funding via virtual account</p>

              <div className="">
                <div className="mb-8">
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Virtual account charge (VAC) = 1%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 100</p>
              <p className="mb-4">Charge amount = 1 (1% of 100)</p>
              <p className="mb-4">Funding charge = 0.1 (10% of 1)</p>
              <p className="mb-4">Total fee = 1.1</p>
              <p className="mb-2">Funds to be received = 98.9 (100 – 1.1)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fund;

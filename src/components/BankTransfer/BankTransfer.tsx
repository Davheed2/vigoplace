import Image from "next/image";
import BankTransferImage from "../../../public/img/Frame 238218 (8).svg";
import Check from "../../../public/img/icon-park-solid_check-one purple.svg";

const BankTransfer: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-center">
          Pricing
        </h2>

        <p className="mb-4 md:text-center">
          For a successful transaction, every transaction on the app incurs a
          minor percentage-based fee
        </p>

        <div className="mb-4">
          <Image
            src={BankTransferImage}
            alt="Pricing Image"
            priority={true}
            fetchPriority="high"
            className="w-[100%]"
          />
        </div>
      </section>

      <section id="regular-usd" className="mb-8 font-nunito">
        <h2 className="mb-2 text-2xl font-bold font-ubuntu md:text-center md:mb-10">
          Funding Wallet
        </h2>
        <div className="rounded-md bg-white px-3 py-4">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Regular or Normal Bank Transfer for USD:
              </p>

              <div className="md:flex-1">
                <div className="flex mb-4 items-center">
                  <Image
                    src={Check}
                    alt="Check Icon"
                    width={25}
                    height={25}
                    className="mr-3 mb-auto mt-1"
                  />

                  <p className="">
                    Takes 2-3 business days before Bank Transfer is completed
                  </p>
                </div>
                <div className="flex mb-8 items-center">
                  <Image
                    src={Check}
                    alt="Check Icon"
                    width={25}
                    height={25}
                    className="mr-3 mb-auto mt-1 items-center"
                  />
                  <div className="">
                    <p className="">Bank Transfer charge (BTC) = 2%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex-1 md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 1000</p>
              <p className="mb-4">Bank Transfer charge = 20 (2% of 1000)</p>
              <p className="mb-4">Funding charge = 4.9 (10% of 49)</p>
              <p className="mb-4">Total Fee = 20</p>
              <p className="mb-2">Funds to be received = 980 (1000 – 20)</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="expedite-usd"
        className="mb-8 rounded-md font-nunito bg-pricingbackground1"
      >
        <div className=" px-3 py-4">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Expedited Bank Transfer for USD
              </p>

              <div className="md:flex-1">
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
                      Takes 1-2 business days before Bank Transfer is completed
                    </p>
                  </div>
                  <div className="flex mb-8 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1 items-center"
                    />
                    <div className="">
                      <p className="">Bank Transfer charge (BTC) = 3%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex-1 md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 1000</p>
              <p className="mb-4">Card processing fee = 30 (3% of 1000)</p>
              <p className="mb-4">Funding charge = 4.9 (10% of 49)</p>
              <p className="mb-4">Total fee = 30</p>
              <p className="mb-2">Funds to be received = 970 (1000 – 30)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="regular-ngn" className="mb-8 font-nunito">
        <h2 className="mb-2 text-2xl font-bold font-ubuntu">
          Regular or Normal Bank Transfer for NGN:
        </h2>

        <p className="mb-4">Takes 2-3 business days to be completed</p>
        <div className="rounded-md px-3 py-4 bg-pricingbackground2">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Transaction range - From 0 - 5000
              </p>

              <div className="md:flex-1">
                <div className="mb-4">
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Card processing fee (CPF) = 10</p>
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
                        Bank Transfer charge (BTC) = 10% of Card processing fee
                        (CPF)
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
                      <p className="">Total charge = CPF + BTC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex-1 md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 1000</p>
              <p className="mb-4">Bank Transfer charge = 10 (10% of 1000)</p>
              <p className="mb-4">Transfer fee = 10</p>
              <p className="mb-4">Total fee = 11</p>
              <p className="mb-2">Funds to be received = 989 (1000 – 11)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 font-nunito">
        <div className="rounded-md bg-white px-3 py-4">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Transaction range - From 5,001 - 50,000
              </p>

              <div className="md:flex-1">
                <div className="mb-8">
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Card processing fee (CPF) = 25</p>
                  </div>

                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">
                      Bank Transfer charge (BTC) = 10% of Card processing fee
                      (CPF)
                    </p>
                  </div>

                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Total charge = CPF + BTC</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex-1 md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 10,000</p>
              <p className="mb-4">Card processing fee = 25</p>
              <p className="mb-4">Bank Transfer charge = 2.5 (10% of 25)</p>
              <p className="mb-4">Total fee = 27.5</p>
              <p className="mb-2">
                Funds to be received = 9,972.5 (10,000 – 27.5)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-md font-nunito bg-pricingbackground3">
        <div className="px-3 py-4">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Transaction range - Above 50,000
              </p>

              <div className="md:flex-1">
                <div className="mb-8">
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Card processing fee (CPF) = 50</p>
                  </div>

                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">
                      Bank Transfer charge (BTC) = 10% of Card processing fee
                      (CPF)
                    </p>
                  </div>

                  <div className="flex mb-8 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Total charge = CPF + BTC</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex-1 md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 10,000</p>
              <p className="mb-4">Card processing fee = 50</p>
              <p className="mb-4">Bank Transfer charge = 5 (10% of 50)</p>
              <p className="mb-4">Total fee = 55</p>
              <p className="mb-2">
                Funds to be received = 99,945 (100,000 – 55)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="expedite-ngn" className="mb-8 font-nunito">
        <h2 className="mb-2 text-2xl font-bold font-ubuntu">
          Expedited Bank Transfer for NGN:
        </h2>

        <p className="mb-4">Takes 1-2 business days to be completed</p>

        <div className="rounded-md px-3 py-4 bg-white">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Transaction range - From 0 - 5000
              </p>

              <div className="md:flex-1">
                <div className="mb-4">
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Card processing fee (CPF) = 10</p>
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
                        Bank Transfer charge (BTC) = 20% of Card processing fee
                        (CPF)
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
                      <p className="">Total charge = CPF + BTC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex-1 md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 1000</p>
              <p className="mb-4">Card processing fee = 10</p>
              <p className="mb-4">Bank Transfer charge = 2 (20% of 10)</p>
              <p className="mb-4">Total fee = 12</p>
              <p className="mb-2">Funds to be received = 988 (1000 – 12)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-md font-nunito bg-pricingbackground4">
        <div className="px-3 py-4">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Transaction range - From 5,001 - 50,000
              </p>

              <div className="md:flex-1">
                <div className="mb-8">
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Card processing fee (CPF) = 25</p>
                  </div>

                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">
                      Bank Transfer charge (BTC) = 20% of Card processing fee
                      (CPF)
                    </p>
                  </div>

                  <div className="flex mb-8 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Total charge = CPF + BTC</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex-1 md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 10,000</p>
              <p className="mb-4">Card processing fee = 25</p>
              <p className="mb-4">Bank Transfer charge = 5 (20% of 25)</p>
              <p className="mb-4">Total fee = 30</p>
              <p className="mb-2">Funds to be received = 9,970 (10,000 – 30)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-md font-nunito bg-pricingbackground3">
        <div className="px-3 py-4">
          <div className="md:flex md:px-4 md:w-[100%]">
            <div className="md:mr-8 md:w-[50%]">
              <p className="mb-8 font-semibold">
                Transaction range - Above 50,000
              </p>

              <div className="md:flex-1">
                <div className="mb-8">
                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Card processing fee (CPF) = 50</p>
                  </div>

                  <div className="flex mb-4 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">
                      Bank Transfer charge (BTC) = 20% of Card processing fee
                      (CPF)
                    </p>
                  </div>

                  <div className="flex mb-8 items-center">
                    <Image
                      src={Check}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className="mr-3 mb-auto mt-1"
                    />

                    <p className="">Total charge = CPF + BTC</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex-1 md:w-[50%]">
              <p className="mb-5 font-semibold">Example:</p>
              <p className="mb-4">Transaction amount = 100,000</p>
              <p className="mb-4">Card processing fee = 25</p>
              <p className="mb-4">Bank Transfer charge = 10 (20% of 50)</p>
              <p className="mb-4">Total fee = 60</p>
              <p className="mb-2">
                Funds to be received = 99,940 (100,000 – 60)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BankTransfer;

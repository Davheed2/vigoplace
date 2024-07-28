import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one purple.svg";
import Group from "../../../public/img/Home/Group 464.webp";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const FinanceServices: React.FC = () => {
  const router = useRouter();

  const handleSeeMoreClick = () => {
    router.push("/financial-service");
  };

  return (
    <section className="mb-8 bg-text rounded-md px-3 py-4 bg-white font-nunito md:py-10 md:px-10">
      <div className="md:text-center md:mb-10">
        <div className="md:flex md:justify-center md:items-center">
          <div className="hidden md:block bg-theme h-1 w-7 mb-4"></div>
          <h2 className="mb-4 text-2xl font-bold font-ubuntu md:ml-4 md:w-auto w-[60%] md:text-center md:text-3xl">
            Inbuilt financial services
          </h2>
        </div>

        <p className="w-[70%] mb-5 md:mx-auto">
          Vigoplace provides a secure and user-friendly financial management
          system.
        </p>
      </div>

      <div className="md:flex md:flex-row-reverse">
        <div className="md:w-1/2">
          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1"
            />
            <div className="">
              <h3 className="font-bold">Inter-bank transfer</h3>
              <p className="">Easily transfer funds between different banks.</p>
            </div>
          </div>
          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1"
            />
            <div className="">
              <h3 className="font-bold">Cardless transaction</h3>
              <p className="">
                Use virtual wallets for seamless and secure transactions without
                needing physical cards.
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1"
            />
            <div className="">
              <h3 className="font-bold">Secured online banking</h3>
              <p className="">
                Safe and secure online banking features for peace of mind.
              </p>
            </div>
          </div>

          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1"
            />
            <div className="">
              <h3 className="font-bold">KYC (Know Your Customer)</h3>
              <p className="">
                Ensure secure user verification to protect against fraud.
              </p>
            </div>
          </div>

          <div className="flex mb-8">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1"
            />
            <div className="">
              <h3 className="font-bold">Multi-wallet system</h3>
              <p className="">
                Manage multiple currency wallets within the app, supporting
                international transactions.
              </p>
            </div>
          </div>

          <div className="mb-8 md:mr-8">
            <Button
              className="bg-theme hover:bg-businessimage"
              onClick={handleSeeMoreClick}
            >
              See more
            </Button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="bg-financeimage pt-8 pb-4 rounded-lg md:h-[fit-content] md:w-[80%] md:mx-auto md:bg-heading">
            <div className="w-[80%] mx-auto">
              <Image
                src={Group}
                alt="Finance Image"
                height={200}
                width={400}
                priority={true}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceServices;

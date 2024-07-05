import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one purple.svg";
import Group from "../../../public/img/Group 464.svg";
import { Button } from "../ui/button";

const FinanceServices: React.FC = () => {
  return (
    <section className="mb-8 bg-text rounded-md px-3 py-4 bg-white font-nunito">
      <h2 className="mb-4 text-2xl w-[60%] font-bold font-ubuntu">
        Inbuilt financial services
      </h2>

      <p className="w-[70%] mb-5">
        Vigoplace provides a secure and user-friendly financial management
        system.
      </p>

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

      <div className="mb-8">
        <Button className="bg-theme">See more</Button>
      </div>

      <div className="bg-financeimage pt-8 pb-4 rounded-lg">
        <div className="w-[80%] mx-auto">
          <Image
            src={Group}
            alt="Business Image"
            loading="lazy"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default FinanceServices;

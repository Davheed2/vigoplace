import Image from "next/image";
import Check from "../../public/img/icon-park-solid_check-one.svg";
import BusinessIcon from "../../public/img/Business.svg";

const Business: React.FC = () => {
  return (
    <section className="mb-8 bg-theme rounded-md px-3 py-4 font-nunito">
      <h2 className="mb-6 text-2xl w-[60%] text-white font-ubuntu font-bold">
        Business social media networking.
      </h2>

      <div className="flex mb-4">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 h-6"
        />
        <p className="text-white">
          Manage your finances with ease using our dual-currency wallet,
          supporting both naira and dollar
        </p>
      </div>
      <div className="flex mb-4">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 h-6"
        />
        <p className="text-white">
          Seamlessly make transfers in and out of Vigoplace, handling all your
          financial transactions within the app.
        </p>
      </div>
      <div className="flex mb-6">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 h-6"
        />
        <p className="text-white">
          Monitor your earnings, transactions, and balance in real-time
        </p>
      </div>

      <div className="bg-businessimage pt-8 pb-4 rounded-lg">
        <Image
          src={BusinessIcon}
          alt="Business Image"
          width={279}
          height={248}
          className="mx-auto"
          //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
};

export default Business;

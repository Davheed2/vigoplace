import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one.svg";
import BusinessIcon from "../../../public/img/Business.svg";
import BusinessImage from "../../../public/img/BusinessM.svg";

const Business: React.FC = () => {
  return (
    <section className="mb-8 bg-theme rounded-md px-3 py-4 font-nunito md:py-10 md:px-10">
      <div className="md:flex">
        <div className="md:w-[50%]">
          <h2 className="mb-6 text-2xl w-[60%] text-white font-ubuntu font-bold md:w-[90%] md:text-3xl">
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
              Seamlessly make transfers in and out of Vigoplace, handling all
              your financial transactions within the app.
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
        </div>

        <div className="md:w-[50%] md:my-auto">
          <div className="bg-businessimage pt-8 pb-4 rounded-lg md:bg-white md:w-[70%] md:mx-auto">
            <div className="w-[80%] mx-auto">
              <Image
                src={BusinessImage}
                alt="Business Image"
                // width={279}
                // height={248}
                loading="lazy"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;

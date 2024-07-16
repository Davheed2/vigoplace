import Image from "next/image";
import SellContentImage from "../../../public/img/Sell content.svg";
import Channel from "../../../public/img/uil_channel-add.svg";
import View from "../../../public/img/material-symbols_view-day-outline.svg";
import Buy from "../../../public/img/icons8_buy.svg";
import Rent from "../../../public/img/icon-park_afferent.svg";
import Subscription from "../../../public/img/eos-icons_product-subscriptions-outlined.svg";

const SellContent: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu sm:text-center md:text-4xl lg:text-4xl xl:text-5xl">
          Sell Digital Contents
        </h2>

        <p className="mb-4 sm:text-center sm:w-[70%] sm:mx-auto sm:mb-9 md:w-[60%] md:text-base lg:text-lg">
          Monetize your digital content effortlessly with Vigoplace’s Channel
          Place.
        </p>

        <div className="mb-4">
          <Image
            src={SellContentImage}
            alt="Sell Content Image"
            priority={true}
            fetchPriority="high"
            className="w-[100%]"
          />
        </div>
      </section>

      <section
        id="channel-place"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Channel}
              alt="Channel Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Channel place
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Create exclusive content and monetize it through various means.
            </p>
          </div>
        </div>
      </section>

      <section
        id="pay-to-view-post"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Pay to view posts
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Charge users a fee to access premium content.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={View}
              alt="View Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section id="buy" className="mb-8 rounded-md py-4 font-nunito bg-white">
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Buy}
              alt="Buy Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Buy
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Put your contents up for sell so other users can buy them.
            </p>
          </div>
        </div>
      </section>

      <section id="rent" className="mb-8 rounded-md py-4 font-nunito bg-white">
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Rent
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Contents can also be rented for a period of time.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Rent}
              alt="Rent Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="subscription"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Subscription}
              alt="Subscription Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Subscription
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Offer subscription-based access to your content, ensuring a steady
              revenue stream.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellContent;

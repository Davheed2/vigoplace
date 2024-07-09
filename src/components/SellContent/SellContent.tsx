import Image from "next/image";
import SellContentImage from "../../../public/img/Frame 238218 (4).svg";
import Channel from "../../../public/img/uil_channel-add.svg";
import View from "../../../public/img/material-symbols_view-day-outline.svg";
import Buy from "../../../public/img/icons8_buy.svg";
import Rent from "../../../public/img/icon-park_afferent.svg";
import Subscription from "../../../public/img/eos-icons_product-subscriptions-outlined.svg";

const SellContent: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">
          Sell Digital Contents
        </h2>

        <p className="mb-4">
          Monetize your digital content effortlessly with Vigoplace’s Channel
          Place.
        </p>

        <div className="mb-4">
          <Image
            src={SellContentImage}
            alt="Sell Content Image"
            priority={true}
            fetchPriority="high"
          />
        </div>
      </section>

      <section
        id="channel-place"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Channel}
              alt="Channel Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Channel place
            </h2>

            <p className="mb-2">
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
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Pay to view posts
            </h2>

            <p className="mb-2">
              Charge users a fee to access premium content.
            </p>
          </div>

          <div className="w-[40%] mx-2">
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
          <div className="w-[40%] mx-2">
            <Image
              src={Buy}
              alt="Buy Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">Buy</h2>

            <p className="mb-2">
              Put your contents up for sell so other users can buy them.
            </p>
          </div>
        </div>
      </section>

      <section id="rent" className="mb-8 rounded-md py-4 font-nunito bg-white">
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">Rent</h2>

            <p className="mb-2">
              Contents can also be rented for a period of time.
            </p>
          </div>

          <div className="w-[40%] mx-2">
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
          <div className="w-[40%] mx-2">
            <Image
              src={Subscription}
              alt="Subscription Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Subscription
            </h2>

            <p className="mb-2">
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

import Image from "next/image";
import SellContentImage from "../../../public/img/Frame 238218 (4).svg";

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
            alt="Activity Image"
          />
        </div>
      </section>

      <section
        id="channel-place"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
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
          <div className="mr-2">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Pay to view posts
            </h2>

            <p className="mb-2">
              Charge users a fee to access premium content.
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

      <section id="buy" className="mb-8 rounded-md py-4 font-nunito bg-white">
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
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">Buy</h2>

            <p className="mb-2">
              Put your contents up for sell so other users can buy them.
            </p>
          </div>
        </div>
      </section>

      <section id="rent" className="mb-8 rounded-md py-4 font-nunito bg-white">
        <div className="flex items-center px-4">
          <div className="mr-2">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">Rent</h2>

            <p className="mb-2">
              Contents can also be rented for a period of time.
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

      <section
        id="subscription"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
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

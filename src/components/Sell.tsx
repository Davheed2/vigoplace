import Image from "next/image";
import Check from "../../public/img/icon-park-solid_check-one purple.svg";
import { Button } from "./ui/button";

const Sell: React.FC = () => {
  return (
    <section className="mb-8 bg-text rounded-md px-3 py-4 bg-white">
      <h2 className="mb-4 text-2xl font-bold">Sell digital content</h2>

      <p className="mb-4">
        Monetize your digital content effortlessly with Vigoplace’s Channel
        Place.
      </p>

      <div className="flex mb-4 bg-white">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold">Channel place</h3>
          <p className="">
          Create exclusive content and monetize it through various means.
          </p>
        </div>
      </div>
      <div className="flex mb-4 bg-white">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold">Pay-to-view post</h3>
          <p className="">
          Charge users a fee to access premium content.
          </p>
        </div>
      </div>
      <div className="flex mb-4 bg-white">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold">Buy</h3>
          <p className="">
          Put your contents up for sell so other users can buy them..
          </p>
        </div>
      </div>

      <div className="flex mb-4 bg-white">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold">Rent</h3>
          <p className="">
          Contents can also be rented for a period of time.
          </p>
        </div>
      </div>

      <div className="flex mb-6 bg-white">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold">Subsccription</h3>
          <p className="">
          Offer subscription-based access to your content, ensuring a steady revenue stream.
          </p>
        </div>
      </div>


      <div className="mb-4">
        <Button className="bg-theme">See more</Button>
      </div>
    </section>
  );
};

export default Sell;

import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one purple.svg";
import FundraisingImage from "../../../public/img/iphone-12--product-red.svg";

const FundRaising: React.FC = () => {
  return (
    <section className="mb-8 bg-text rounded-md px-3 py-4 bg-white font-nunito">
      <h2 className="mb-4 text-2xl w-[60%] font-bold font-ubuntu">
        Fundraising
      </h2>

      <div className="flex mb-4">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold">Fundraising</h3>
          <p className="">Create posts to raise funds for various causes.</p>
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
          <h3 className="font-bold">Support/Donate post</h3>
          <p className="">Facilitate donations and support.</p>
        </div>
      </div>

      <div className="bg-financeimage pt-8 rounded-lg">
        <div className="w-[80%] mx-auto">
          <Image
            src={FundraisingImage}
            alt="Business Image"
            layout="responsive"
            className="mx-auto w-[60%]"
          />
        </div>
      </div>
    </section>
  );
};

export default FundRaising;

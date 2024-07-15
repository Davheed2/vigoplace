import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one purple.svg";
import FundraisingImage from "../../../public/img/iphone-12--product-red.svg";

const FundRaising: React.FC = () => {
  return (
    <section className="mb-8 bg-text rounded-md px-3 py-4 bg-white font-nunito md:py-10 md:px-10">
      <div className="md:flex md:justify-center md:items-center md:mb-6">
        <div className="hidden md:block bg-theme h-1 w-7 mb-4"></div>
        <h2 className="mb-4 text-2xl w-[60%] font-bold font-ubuntu md:ml-4 md:w-auto md:text-center md:text-3xl">
          Fundraising
        </h2>
      </div>

      <div className="md:flex">
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
              <h3 className="font-bold">Fundraising</h3>
              <p className="">
                Create posts to raise funds for various causes.
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
              <h3 className="font-bold">Support/Donate post</h3>
              <p className="">Facilitate donations and support.</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="bg-financeimage pt-8 rounded-lg md:h-[fit-content] md:w-[80%] md:mx-auto md:bg-theme md:rounded-3xl">
            <div className="w-[80%] mx-auto md:w-[40%]">
              <Image
                src={FundraisingImage}
                alt="Business Image"
                layout="responsive"
                className="mx-auto w-[60%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundRaising;

import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one.svg";
import EcommerceImages from "../../../public/img/Frame 238313.svg";
import EcommerceImage from "../../../public/img/Group 463.svg";

const Ecommerce: React.FC = () => {
  return (
    <section className="mb-8 bg-theme rounded-md px-3 py-4 font-nunito md:py-10 md:px-10">
      <div className="md:text-center md:mb-10">
        <div className="md:flex md:justify-center md:items-center">
          <div className="hidden md:block bg-white h-1 w-7 mb-6"></div>
          <h2 className="mb-6 text-2xl w-[60%] text-white font-bold font-ubuntu md:ml-4 md:w-auto md:text-center md:text-3xl">
            E-commerce
          </h2>
        </div>

        <p className="text-white mb-4 md:mx-auto md:w-[70%]">
          Vigoplace’s Marketplace is a robust platform for buying and selling
          products and services.
        </p>
      </div>

      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="">
              <h3 className="font-bold text-white md:font-black">
                Product post
              </h3>
              <p className="text-white">
                Advertise and sell a wide range of products, from handmade
                crafts to electronics.
              </p>
            </div>
          </div>

          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="">
              <h3 className="font-bold text-white md:font-black">
                Service post
              </h3>
              <p className="text-white">
                Offer services such as consulting, tutoring, and freelance work.
              </p>
            </div>
          </div>

          <div className="flex mb-6">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="">
              <h3 className="font-bold text-white md:font-black">
                Digital goods
              </h3>
              <p className="text-white">
                Sell digital products like e-books, software, and online
                courses.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="bg-businessimage pt-8 rounded-lg md:h-[fit-content] md:w-[80%] md:mx-auto md:bg-white md:pb-8">
            <div className="w-[80%] mx-auto">
              <Image
                src={EcommerceImage}
                alt="Ecommerce Image"
                layout="responsive"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;

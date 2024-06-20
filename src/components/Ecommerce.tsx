import Image from "next/image";
import Check from "../../public/img/icon-park-solid_check-one.svg";
import EcommerceImage from "../../public/img/Frame 238313.svg";

const Ecommerce: React.FC = () => {
  return (
    <section className="mb-8 bg-theme rounded-md px-3 py-4 font-nunito">
      <h2 className="mb-6 text-2xl w-[60%] text-white font-bold font-ubuntu">
        E-commerce
      </h2>

      <p className="text-white mb-4">
        Vigoplace’s Marketplace is a robust platform for buying and selling
        products and services.
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
          <h3 className="font-bold text-white">Product post</h3>
          <p className="text-white">
            Advertise and sell a wide range of products, from handmade crafts to
            electronics.
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
          <h3 className="font-bold text-white">Service post</h3>
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
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold text-white">Digital goods</h3>
          <p className="text-white">
            Sell digital products like e-books, software, and online courses.
          </p>
        </div>
      </div>

      <div className="bg-businessimage pt-8 rounded-lg">
        <Image
          src={EcommerceImage}
          alt="Business Image"
          width={279}
          height={248}
          className="mx-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Ecommerce;

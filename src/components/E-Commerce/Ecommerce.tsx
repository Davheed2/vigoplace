import Image from "next/image";
import EcommerceImage from "../../../public/img/Frame 238218 (2).svg";
import Market from "../../../public/img/Market.svg";
import Product from "../../../public/img/Product.svg";
import Service from "../../../public/img/Service.svg";
import Digital from "../../../public/img/Digital.svg";

const Ecommerce: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Ecommerce </h2>

        <p className="mb-4">
          Vigoplace’s Marketplace is a robust platform for buying and selling
          products and services.
        </p>

        <div className="mb-4">
          <Image
            src={EcommerceImage}
            alt="Ecommerce Image"
            priority={true}
            fetchPriority="high"
          />
        </div>
      </section>

      <section
        id="marketplace"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Market}
              alt="Market Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">Marketplace</h2>

            <p className="mb-2">A comprehensive platform for e-commerce.</p>
          </div>
        </div>
      </section>

      <section
        id="product-posts"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Product Posts
            </h2>

            <p className="mb-2">
              Advertise and sell a wide range of products, from handmade crafts
              to electronics.
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Product}
              alt="Product Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="service-posts"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Service}
              alt="Service Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Service posts
            </h2>

            <p className="mb-2">
              Offer services such as consulting, tutoring, and freelance work.
            </p>
          </div>
        </div>
      </section>

      <section
        id="digital-goods"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Digital Goods
            </h2>

            <p className="mb-2">
              Sell digital products like e-books, software, and online courses.
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Digital}
              alt="Digital Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ecommerce;

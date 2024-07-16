import Image from "next/image";
import MarketImage from "../../../public/img/Frame 238218 (13).svg";
import Product from "../../../public/img/gridicons_product.svg";
import Transactions from "../../../public/img/grommet-icons_transaction.svg";
import Inventory from "../../../public/img/ic_round-inventory.svg";
import Customer from "../../../public/img/Customer.svg";

const MarketPlace: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-4 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu sm:text-center md:text-4xl lg:text-4xl xl:text-5xl">
          Learn
        </h2>

        <p className="mb-4 sm:text-center sm:w-[70%] sm:mx-auto sm:mb-9 md:w-[60%] md:text-base lg:text-lg">
          Vigoplace provides a secure and user-friendly financial management
          system.
        </p>

        <div className="mb-4">
          <Image
            src={MarketImage}
            alt="Market Place Image"
            priority={true}
            fetchPriority="high"
            className="w-[100%]"
          />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-4xl lg:text-4xl xl:text-5xl">
          Market place
        </h2>
      </section>

      <section
        id="product-posting"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Product}
              alt="Product Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Product/Service posting
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Create and manage posts for products and services you want to
              sell. This feature allows you to showcase your offerings to a wide
              audience.
            </p>
          </div>
        </div>
      </section>

      <section
        id="transaction-tools"
        className="rounded-md mb-8 py-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Transaction tools
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Secure payment processing and order management tools ensure safe
              and smooth transactions. This builds trust with your customers and
              simplifies the buying process.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Transactions}
              alt="Transactions Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="inventory-management"
        className="rounded-t-md pt-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Inventory}
              alt="Inventory Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Inventory Management
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Keep track of stock levels and manage the progress of your
              product. This tool helps in maintaining a consistent supply for
              your customers.
            </p>
          </div>
        </div>
      </section>

      <section
        id="customer-interaction"
        className="mb-8 rounded-b-md pb-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Customer Interaction
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Communicate with buyers through messaging and comments. This
              interaction is crucial for addressing customer queries and
              building a loyal customer base.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Customer}
              alt="Customer Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketPlace;

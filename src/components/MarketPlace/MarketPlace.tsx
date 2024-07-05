import Image from "next/image";
import ActivityImage from "../../../public/img/vigo-removebg-preview 1.svg";

const MarketPlace: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-4 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Learn</h2>

        <p className="mb-4">
          Vigoplace provides a secure and user-friendly financial management
          system.
        </p>

        <div className="mb-4 bg-theme rounded">
          <Image
            src={ActivityImage}
            alt="Activity Image"
            //   width={25}
            //   height={25}
            className="mx-auto"
          />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Market place</h2>
      </section>

      <section
        id="product-posting"
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
              Product/Service posting
            </h2>

            <p className="mb-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
          </div>
        </div>
      </section>

      <section
        id="transaction-tools"
        className="rounded-md mb-8 py-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Transaction tools
            </h2>

            <p className="mb-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
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
        id="inventory-management"
        className="rounded-t-md pt-4 pb-8 font-nunito bg-white"
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
              Inventory Management
            </h2>

            <p className="mb-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
          </div>
        </div>
      </section>

      <section
        id="customer-interaction"
        className="mb-8 rounded-b-md pb-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Customer Interaction
            </h2>

            <p className="mb-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
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
    </>
  );
};

export default MarketPlace;

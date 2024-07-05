import Image from "next/image";
import ActivityImage from "../../../public/img/vigo-removebg-preview 1.svg";

const Fundraising: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Fundraising</h2>

        <p className="mb-4">
          For a successful transaction, every transaction on the app incurs a
          minor percentage-based fee.
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

      <section
        id="fundraising-posts"
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
              Fundraising posts
            </h2>

            <p className="mb-2">
              Create posts to raise funds for various causes.
            </p>
          </div>
        </div>
      </section>

      <section
        id="support/donate-posts"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Support/donate posts
            </h2>

            <p className="mb-2">Facilitate donations and support.</p>
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

export default Fundraising;

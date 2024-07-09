import Image from "next/image";
import FundRaisingImage from "../../../public/img/Frame 238218 (6).svg";
import Fund from "../../../public/img/FundPost.svg";
import Support from "../../../public/img/streamline_blood-drop-donation.svg";

const Fundraising: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Fundraising</h2>

        <p className="mb-4">
          For a successful transaction, every transaction on the app incurs a
          minor percentage-based fee.
        </p>

        <div className="mb-4">
          <Image
            src={FundRaisingImage}
            alt="Fundraising Image"
            priority={true}
            fetchPriority="high"
          />
        </div>
      </section>

      <section
        id="fundraising-posts"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Fund}
              alt="Fundraising Post Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
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
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Support/donate posts
            </h2>

            <p className="mb-2">Facilitate donations and support.</p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Support}
              alt="Support Post Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Fundraising;

import Image from "next/image";
import ContestImage from "../../../public/img/Frame 238218 (5).svg";
import Contest from "../../../public/img/lucide_vote.svg";
import Contestants from "../../../public/img/arcticons_voter-helpline.svg";
import Paid from "../../../public/img/mdi_vote-outline.svg";
import Free from "../../../public/img/material-symbols_how-to-vote-outline.svg";

const OnlineContest: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">
          Organize Online Contest
        </h2>

        <p className="mb-4">Host and manage online contests.</p>

        <div className="mb-4">
          <Image
            src={ContestImage}
            alt="Contest Image"
            priority={true}
            fetchPriority="high"
          />
        </div>
      </section>

      <section
        id="contest-place"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Contest}
              alt="Contest Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Contest place
            </h2>

            <p className="mb-2">Host and manage online contests.</p>
          </div>
        </div>
      </section>

      <section
        id="contestant"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">Contestants</h2>

            <p className="mb-2">Engage with participants and manage entries.</p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Contestants}
              alt="Contestants Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="paid-contests"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Paid}
              alt="Paid contest Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Paid contests
            </h2>

            <p className="mb-2">Host and participate in paid voting</p>
          </div>
        </div>
      </section>

      <section
        id="free-contest"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Free contests
            </h2>

            <p className="mb-2">
              Also Vigoplace offers you an avenue where you can also host and
              participate free voting
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Free}
              alt="Free Contest Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineContest;

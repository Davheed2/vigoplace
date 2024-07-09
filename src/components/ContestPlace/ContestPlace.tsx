import Image from "next/image";
import ContestImage from "../../../public/img/Frame 238218 (12).svg";
import Contest from "../../../public/img/Contest.svg";
import Entry from "../../../public/img/octicon_no-entry-16.svg";
import Voting from "../../../public/img/material-symbols-light_how-to-vote-outline.svg";
import Price from "../../../public/img/solar_tag-price-outline.svg";

const ContestPlace: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-4 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Learn</h2>

        <p className="mb-4">
          Vigoplace provides a secure and user-friendly financial management
          system.
        </p>

        <div className="mb-4">
          <Image
            src={ContestImage}
            alt="Contest Place Image"
            priority={true}
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Contest place</h2>
      </section>

      <section
        id="contest-creation"
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
              Contest creation
            </h2>

            <p className="mb-2">
              Set up contests with specific rules, entry requirements, and
              deadlines. This feature allows you to create engaging competitions
              that attract participation and excitement.
            </p>
          </div>
        </div>
      </section>

      <section
        id="entry-management"
        className="rounded-md mb-8 py-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Entry Management
            </h2>

            <p className="mb-2">
              Review and manage contest entries efficiently. This tool helps in
              organizing the entries and ensuring a smooth contest experience.
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Entry}
              alt="Entry Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="voting-system"
        className="rounded-md py-4 mb-8 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Voting}
              alt="Voting Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Voting System
            </h2>

            <p className="mb-2">
              Enable paid or free voting for contest entries. This feature adds
              an interactive element to the contest, allowing participants to
              engage more.
            </p>
          </div>
        </div>
      </section>

      <section
        id="price-distribution"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Price Distribution
            </h2>

            <p className="mb-2">
              Manage and distribute prizes to winners seamlessly. This ensures
              that winners are rewarded promptly, maintaining the integrity and
              excitement of the contest.
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Price}
              alt="Price Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContestPlace;

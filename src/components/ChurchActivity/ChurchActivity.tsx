import Image from "next/image";
import ChurchImage from "../../../public/img/Why/Frame 238218.webp";
import BibleImage from "../../../public/img/Vector.svg";
import BibleImage2 from "../../../public/img/bx_bible.svg";
import StreamGift from "../../../public/img/streamline_give-gift.svg";
import Donate from "../../../public/img/mdi_donation-outline.svg";
import Prayer from "../../../public/img/hugeicons_hand-prayer.svg";
import { useEffect, useState } from "react";

const ChurchActivity: React.FC = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu sm:text-center md:text-4xl lg:text-4xl xl:text-5xl">
          Church activity management
        </h2>

        <p className="mb-6 sm:text-center sm:w-[70%] sm:mx-auto sm:mb-9 md:w-[60%] md:text-base lg:text-lg">
          Vigoplace gives you the avenue for church activity management, making
          it easier for congregations to connect and engage.
        </p>

        <div className="mb-4">
          <Image
            src={ChurchImage}
            alt="Activity Image"
            priority={true}
            fetchPriority="high"
            height={400}
            width={400}
            layout="responsive"
          />
        </div>
      </section>

      <section
        id="daily-reading-post"
        className="mb-8 rounded-md py-5 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="w-[60%] mr-3">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              <span>Daily </span>
              {!isMediumScreen && <br />}
              Reading Posts
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Share daily devotionals, scripture readings, and reflections to
              keep your community spiritually engaged.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={BibleImage}
              alt="Daily Reading Post Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="bible-post"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={BibleImage2}
              alt="Bible Post Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Bible Posts
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Create and share Bible study notes, sermon highlights, and
              theological discussions.
            </p>
          </div>
        </div>
      </section>

      <section
        id="giving"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Giving
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Simplified donation processes that encourage generosity.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={StreamGift}
              alt="Gift Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="offering-post"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Donate}
              alt="Donate Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Offering Posts
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Post specific offering needs and track contributions.
            </p>
          </div>
        </div>
      </section>

      <section
        id="prayer-request"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Prayer Request
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Allow members to submit prayer requests and provide a platform for
              communal prayer.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Prayer}
              alt="Prayer Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChurchActivity;

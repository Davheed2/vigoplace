import Image from "next/image";
import ChurchImage from "../../../public/img/Frame 238218.svg";
import BibleImage from "../../../public/img/Vector.svg";
import BibleImage2 from "../../../public/img/bx_bible.svg";
import StreamGift from "../../../public/img/streamline_give-gift.svg";
import Donate from "../../../public/img/mdi_donation-outline.svg";
import Prayer from "../../../public/img/hugeicons_hand-prayer.svg";

const ChurchActivity: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">
          Church activity management
        </h2>

        <p className="mb-4">
          Vigoplace gives you the avenue for church activity management, making
          it easier for congregations to connect and engage.
        </p>

        <div className="mb-4">
          <Image
            src={ChurchImage}
            alt="Activity Image"
            priority={true}
            fetchPriority="high"
          />
        </div>
      </section>

      <section
        id="daily-reading-post"
        className="mb-8 rounded-md py-5 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="w-[60%] mr-3">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              <span>Daily</span> <br /> Reading Posts
            </h2>

            <p className="mb-2">
              Share daily devotionals, scripture readings, and reflections to
              keep your community spiritually engaged.
            </p>
          </div>

          <div className="w-[40%] mx-2">
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
          <div className="w-[40%] mx-2">
            <Image
              src={BibleImage2}
              alt="Bible Post Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">Bible Posts</h2>

            <p className="mb-2">
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
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">Giving</h2>

            <p className="mb-2">
              Simplified donation processes that encourage generosity.
            </p>
          </div>

          <div className="w-[40%] mx-2">
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
          <div className="w-[40%] mx-2">
            <Image
              src={Donate}
              alt="Donate Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Offering Posts
            </h2>

            <p className="mb-2">
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
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Prayer Request
            </h2>

            <p className="mb-2">
              Allow members to submit prayer requests and provide a platform for
              communal prayer.
            </p>
          </div>

          <div className="w-[40%] mx-2">
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

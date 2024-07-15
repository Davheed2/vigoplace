import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one.svg";
import ChurchImage from "../../../public/img/Group 462.svg";
import Ellipse from "../../../public/img/Ellipse 44.svg"

const Church: React.FC = () => {
  return (
    <section className="mb-8 bg-theme rounded-md px-3 py-4 font-nunito md:py-10 md:px-10">
      <div className="md:text-center md:mb-10">
        <div className="md:flex md:justify-center md:items-center">
          <div className="hidden md:block bg-white h-1 w-7 mb-6"></div>
          <h2 className="mb-6 text-2xl w-[60%] text-white font-bold font-ubuntu md:ml-4 md:w-auto md:text-center md:text-3xl">
            Church activity management
          </h2>
        </div>

        <p className="text-white mb-4 md:mx-auto md:w-[70%]">
          Vigoplace gives you the avenue for church activity management, making
          it easier for congregations to connect and engage.
        </p>
      </div>

      <div className="md:flex md:flex-row-reverse">
        <div className="md:w-1/2">
          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="">
              <h3 className="font-bold text-white">Daily reading post</h3>
              <p className="text-white">
                Share daily devotionals, scripture readings, and reflections to
                keep your community spiritually engaged.
              </p>
            </div>
          </div>

          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="">
              <h3 className="font-bold text-white">Bible post</h3>
              <p className="text-white">
                Create and share Bible study notes, sermon highlights, and
                theological discussions.
              </p>
            </div>
          </div>

          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="">
              <h3 className="font-bold text-white">Collection post</h3>
              <p className="text-white">
                Efficiently manage church donations, offerings, and tithes.
              </p>
            </div>
          </div>

          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="">
              <h3 className="font-bold text-white">Give</h3>
              <p className="text-white">
                Simplified donation processes that encourage generosity.
              </p>
            </div>
          </div>

          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="">
              <h3 className="font-bold text-white">Offering post</h3>
              <p className="text-white">
                Post specific offering needs and track contributions.
              </p>
            </div>
          </div>

          <div className="flex mb-6">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="">
              <h3 className="font-bold text-white">Prayer request</h3>
              <p className="text-white">
                Allow members to submit prayer requests and provide a platform
                for communal prayer.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:my-auto">
          <div className="bg-businessimage pt-8 pb-4 rounded-lg md:bg-theme">
            <div className="w-[80%] mx-auto">
              <Image
                src={ChurchImage}
                alt="Church activity Image"
                layout="responsive"
                loading="lazy"
                className="md:w-[80%] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Church;

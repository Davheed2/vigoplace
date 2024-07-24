import Image from "next/image";
import MinistryImage from "../../../public/img/Frame 238218 (14).svg";
import Profile from "../../../public/img/iconamoon_profile.svg";
import Offer from "../../../public/img/mdi_offer.svg";
import Media from "../../../public/img/material-symbols_perm-media-outline.svg";
import Communication from "../../../public/img/fluent_communication-24-regular.svg";
import Prayer from "../../../public/img/Prayer.svg";
import Analytics from "../../../public/img/material-symbols_analytics-outline.svg";

const MinistryPlace: React.FC = () => {
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
            src={MinistryImage}
            alt="Ministry Place Image"
            priority={true}
            fetchPriority="high"
            className="w-[100%]"
          />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-4xl lg:text-4xl xl:text-5xl">
          Ministry place
        </h2>
      </section>

      <section
        id="profile-creation"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Profile}
              alt="Profile Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Profile creation
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Create detailed profiles with the ministry name, contact
              information, and mission statement. This helps in establishing a
              clear and professional presence.
            </p>

            <div className="mt-4 mb-2">
              <a className="text-theme hover:text-businessimage hover:cursor-pointer font-[600]">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="offering-tools"
        className="rounded-md mb-8 py-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Offering tools
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Easily set up offering pages to collect donations during services
              or events. This tool streamlines the process of gathering
              financial support from your community.
            </p>

            <div className="mt-4 mb-2">
              <a className="text-theme hover:text-businessimage hover:cursor-pointer font-[600]">
                Learn more
              </a>
            </div>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Offer}
              alt="Offer Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="media-sharing"
        className="rounded-md py-4 mb-8 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Media}
              alt="Media Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Media Sharing
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Upload and share photos, videos, and audio recordings to engage
              your community. This feature helps in sharing messages, sermons,
              and other important content.
            </p>

            <div className="mt-4 mb-2">
              <a className="text-theme hover:text-businessimage hover:cursor-pointer font-[600]">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="communication-tools"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Communication tools
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Use direct messaging, group chats, and discussion forums to foster
              communication within your community. These tools are vital for
              building strong relationships and a sense of belonging.
            </p>

            <div className="mt-4 mb-2">
              <a className="text-theme hover:text-businessimage hover:cursor-pointer font-[600]">
                Learn more
              </a>
            </div>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Communication}
              alt="Communication Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="prayer-requests"
        className="rounded-md py-4 mb-8 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Prayer}
              alt="Prayer Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Prayer request
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Collect and manage prayer requests from your community. This
              feature helps in addressing the spiritual needs of your members.
            </p>

            <div className="mt-4 mb-2">
              <a className="text-theme hover:text-businessimage hover:cursor-pointer font-[600]">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="analytics"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Analytics and reporting
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Track engagement, donations, and event attendance to gauge the
              impact of your activities. This data is crucial for planning
              future events and initiatives.
            </p>

            <div className="mt-4 mb-2">
              <a className="text-theme hover:text-businessimage hover:cursor-pointer font-[600]">
                Learn more
              </a>
            </div>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Analytics}
              alt="Analytics Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MinistryPlace;

import Image from "next/image";
import ChannelImage from "../../../public/img/Frame 238218 (11).svg";
import PayToView from "../../../public/img/lucide_view.svg";
import Content from "../../../public/img/iconoir_post.svg";
import Subscriber from "../../../public/img/iconamoon_profile-light.svg";
import Analytics from "../../../public/img/ion_analytics-outline.svg";

const ChannelPlace: React.FC = () => {
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
            src={ChannelImage}
            alt="Channel Place Image"
            priority={true}
            fetchPriority="high"
            className="w-[100%]"
          />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-4xl lg:text-4xl xl:text-5xl">
          Channel place
        </h2>
      </section>

      <section
        id="pay-to-view"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={PayToView}
              alt="Pay To View Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Pay-To-View Tools
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Post contents that can be bought, rented and subscribed to by your
              audience. This feature is ideal for influencers, educators, and
              content creators looking to reach a wide audience in real-time.
            </p>
          </div>
        </div>
      </section>

      <section
        id="content-management"
        className="rounded-md mb-8 py-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Content Management
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Change the settings and manage your content. This allows for
              better planning and consistency in your content delivery.
            </p>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Content}
              alt="Content Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="subscribers"
        className="rounded-t-md pt-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Subscriber}
              alt="Subscriber Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Subscribers Interaction
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Engage with your subscribers through comments and live chats. This
              interaction helps build a loyal following and encourages more
              active participation from your audience.
            </p>
          </div>
        </div>
      </section>

      <section
        id="analytics"
        className="mb-8 rounded-b-md pb-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Analytics
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Track viewership stats, engagement, and growth metrics to
              understand how your content is performing. This data helps in
              refining your content strategy and improving overall engagement.
            </p>
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

export default ChannelPlace;

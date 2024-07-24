import Image from "next/image";
import BasicImage from "../../../public/img/Frame 238218 (10).svg";
import Profile from "../../../public/img/carbon_user-profile.svg";
import Post from "../../../public/img/material-symbols_post-add.svg";
import Interaction from "../../../public/img/Interaction.svg";
import Message from "../../../public/img/tabler_message.svg";
import Notication from "../../../public/img/mingcute_notification-line.svg";
import { Button } from "../ui/button";

const BasicPlace: React.FC = () => {
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
            src={BasicImage}
            alt="Basic Place Image"
            priority={true}
            fetchPriority="high"
            className="w-[100%]"
          />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-4xl lg:text-4xl xl:text-5xl">
          Basic place
        </h2>
      </section>

      <section
        id="profile-manage"
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
              Profile management
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Update personal information, profile picture, and cover photo to
              maintain a fresh and appealing profile. This helps others identify
              and connect with you more easily.
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
        id="post-creation"
        className="rounded-md mb-8 py-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Posts creation
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Share a variety of content such as photos, videos, and links. This
              feature is perfect for keeping your friends and followers updated
              on your activities and interests.
            </p>

            <div className="mt-4 mb-2">
              <a className="text-theme hover:text-businessimage hover:cursor-pointer font-[600]">
                Learn more
              </a>
            </div>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Post}
              alt="Post Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="interaction-tools"
        className="rounded-md py-4 pb-8 mb-8 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Interaction}
              alt="Interaction Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Interaction tools
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Engage with other users by liking, commenting, and sharing their
              posts. This fosters a sense of community and encourages
              interaction on the platform.
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
        id="messaging"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Messaging
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Use direct messaging to have private conversations with friends
              and other users. This tool is essential for building and
              maintaining personal connections.
            </p>

            <div className="mt-4 mb-2">
              <a className="text-theme hover:text-businessimage hover:cursor-pointer font-[600]">
                Learn more
              </a>
            </div>
          </div>

          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[15%]">
            <Image
              src={Message}
              alt="Message Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="notifications"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2 sm:!w-[30%] md:!w-[15%] md:ml-[3%]">
            <Image
              src={Notication}
              alt="Notication Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%] sm:mr-2 sm:ml-auto">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu md:text-3xl">
              Notifications
            </h2>

            <p className="mb-2 md:text-base lg:text-lg">
              Stay informed about interactions, updates, and important events
              through real-time notifications. This ensures you never miss any
              important activity on your profile.
            </p>

            <div className="mt-4 mb-2">
              <a className="text-theme hover:text-businessimage hover:cursor-pointer font-[600]">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasicPlace;

import Image from "next/image";
import BasicImage from "../../../public/img/Frame 238218 (10).svg";
import Profile from "../../../public/img/carbon_user-profile.svg";
import Post from "../../../public/img/material-symbols_post-add.svg";
import Interaction from "../../../public/img/Interaction.svg";
import Message from "../../../public/img/tabler_message.svg";
import Notication from "../../../public/img/mingcute_notification-line.svg";

const BasicPlace: React.FC = () => {
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
            src={BasicImage}
            alt="Basic Place Image"
            priority={true}
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Basic place</h2>
      </section>

      <section
        id="profile-manage"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Profile}
              alt="Profile Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Profile management
            </h2>

            <p className="mb-2">
              Update personal information, profile picture, and cover photo to
              maintain a fresh and appealing profile. This helps others identify
              and connect with you more easily.
            </p>
          </div>
        </div>
      </section>

      <section
        id="post-creation"
        className="rounded-md mb-8 py-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Posts creation
            </h2>

            <p className="mb-2">
              Share a variety of content such as photos, videos, and links. This
              feature is perfect for keeping your friends and followers updated
              on your activities and interests.
            </p>
          </div>

          <div className="w-[40%] mx-2">
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
          <div className="w-[40%] mx-2">
            <Image
              src={Interaction}
              alt="Interaction Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Interaction tools
            </h2>

            <p className="mb-2">
              Engage with other users by liking, commenting, and sharing their
              posts. This fosters a sense of community and encourages
              interaction on the platform.
            </p>
          </div>
        </div>
      </section>

      <section
        id="messaging"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">Messaging</h2>

            <p className="mb-2">
              Use direct messaging to have private conversations with friends
              and other users. This tool is essential for building and
              maintaining personal connections.
            </p>
          </div>

          <div className="w-[40%] mx-2">
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
          <div className="w-[40%] mx-2">
            <Image
              src={Notication}
              alt="Notication Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Notifications
            </h2>

            <p className="mb-2">
              Stay informed about interactions, updates, and important events
              through real-time notifications. This ensures you never miss any
              important activity on your profile.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasicPlace;

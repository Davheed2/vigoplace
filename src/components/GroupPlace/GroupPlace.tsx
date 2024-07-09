import Image from "next/image";
import GroupImage from "../../../public/img/Frame 238218 (15).svg";
import Group from "../../../public/img/lucide_group.svg";
import Members from "../../../public/img/lets-icons_group.svg";
import Share from "../../../public/img/ph_share.svg";
import Event from "../../../public/img/material-symbols-light_event-outline.svg";
import Discussion from "../../../public/img/Discussion.svg";
import Notification from "../../../public/img/hugeicons_notification-03.svg";

const GroupPlace: React.FC = () => {
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
            src={GroupImage}
            alt="Group Place Image"
            priority={true}
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Group place</h2>
      </section>

      <section
        id="creation"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Group}
              alt="Group Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Group creation
            </h2>

            <p className="mb-2">
              Create groups based on common interests or goals. This feature
              helps in forming communities with shared interests, fostering a
              sense of belonging.
            </p>
          </div>
        </div>
      </section>

      <section
        id="management"
        className="rounded-md mb-8 py-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Members Management
            </h2>

            <p className="mb-2">
              Invite and manage group members to maintain an active and engaged
              group. This tool is essential for growing and sustaining your
              community.
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Members}
              alt="Members Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="content-sharing"
        className="rounded-md py-4 mb-8 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Share}
              alt="Share Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Content sharing
            </h2>

            <p className="mb-2">
              Share posts, media, and updates within the group to keep members
              informed and engaged. This feature ensures continuous interaction
              and participation.
            </p>
          </div>
        </div>
      </section>

      <section
        id="event-coordination"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Event Coordination
            </h2>

            <p className="mb-2">
              Organize group events and track attendance to facilitate community
              activities. This tool helps in planning and executing group
              gatherings effectively.
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Event}
              alt="Event Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="discussion"
        className="rounded-md py-4 mb-8 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Discussion}
              alt="Discussion Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Discussion forum
            </h2>

            <p className="mb-2">
              Facilitate group discussions on various topics. This feature
              encourages members to share ideas and engage in meaningful
              conversations.
            </p>
          </div>
        </div>
      </section>

      <section
        id="notification"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Notification
            </h2>

            <p className="mb-2">
              Keep members informed about group activities and updates through
              real-time notifications. This ensures that everyone stays
              up-to-date with the latest happenings.
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Notification}
              alt="Notification Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupPlace;

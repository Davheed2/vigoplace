import Image from "next/image";
import GroupImage from "../../../public/img/Frame 238218 (1).svg";
import Group from "../../../public/img/Group (2).svg";
import Family from "../../../public/img/Family.svg";
import Hobby from "../../../public/img/Hobby.svg";
import Study from "../../../public/img/Study.svg";
import Support from "../../../public/img/Support.svg";
import Networking from "../../../public/img/carbon_hybrid-networking.svg";
import Professional from "../../../public/img/grommet-icons_user-expert.svg";
import Alumni from "../../../public/img/Alumni.svg";
import Volunteer from "../../../public/img/arcticons_volunteer-exchange.svg";
import Sport from "../../../public/img/Sport.svg";
import Community from "../../../public/img/ic_outline-interests.svg";

const GroupManagement: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-8 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">
          Groups/Community activity management
        </h2>

        <p className="mb-4">
          Manage and engage with various groups and communities effortlessly
          using Vigoplace’s Group Place feature.
        </p>

        <div className="mb-4">
          <Image
            src={GroupImage}
            alt="Activity Image"
            priority={true}
            fetchPriority="high"
          />
        </div>
      </section>

      <section
        id="collection-posts"
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
              Collection posts
            </h2>

            <p className="mb-2">
              Facilitate group fund collections and manage group finances.
            </p>
          </div>
        </div>
      </section>

      <section
        id="family-groups"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Family Groups
            </h2>

            <p className="mb-2">Stay connected with family members.</p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Family}
              alt="Family Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="hobby-groups"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Hobby}
              alt="Hobby Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Hobby Groups
            </h2>

            <p className="mb-2">
              Share interests and hobbies with like-minded individuals.
            </p>
          </div>
        </div>
      </section>

      <section
        id="study-groups"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Study Groups
            </h2>

            <p className="mb-2">
              Collaborate on academic projects and share resources.
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Study}
              alt="Study Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="support-groups"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Support}
              alt="Support Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Support Groups
            </h2>

            <p className="mb-2">
              Provide and receive support for various issues.
            </p>
          </div>
        </div>
      </section>

      <section
        id="networking-groups"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Networking Groups
            </h2>

            <p className="mb-2">
              Expand professional connections and opportunities.
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Networking}
              alt="Networking Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="professional-association"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Professional}
              alt="Professional Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Professional Association
            </h2>

            <p className="mb-2">
              Join industry-specific groups for networking and growth.
            </p>
          </div>
        </div>
      </section>

      <section
        id="alumni-groups"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Alumni Groups
            </h2>

            <p className="mb-2">
              Reconnect with former classmates and organize reunions.
            </p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Alumni}
              alt="Alumni Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="volunteer-groups"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Volunteer}
              alt="Volunteer Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>

          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Volunteer Groups
            </h2>

            <p className="mb-2">
              Coordinate volunteer activities and initiatives.
            </p>
          </div>
        </div>
      </section>

      <section
        id="sports-team"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">Sport Teams</h2>

            <p className="mb-2">Manage team activities and events.</p>
          </div>

          <div className="w-[40%] mx-2">
            <Image
              src={Sport}
              alt="Sport Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
        </div>
      </section>

      <section
        id="interest-based-communities"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center">
          <div className="w-[40%] mx-2">
            <Image
              src={Community}
              alt="Community Image"
              layout="responsive"
              className="mx-auto w-[100%]"
            />
          </div>
          <div className="mx-2 w-[60%]">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Interest based communities
            </h2>

            <p className="mb-2">
              Create groups around specific interests or causes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupManagement;

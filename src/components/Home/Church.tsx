import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one.svg";
import ChurchImages from "../../../public/img/Frame 238243.svg";
import ChurchImage from "../../../public/img/Group 462.svg";

const Church: React.FC = () => {
  return (
    <section className="mb-8 bg-theme rounded-md px-3 py-4 font-nunito">
      <h2 className="mb-6 text-2xl w-[60%] text-white font-bold font-ubuntu">
        Church activity management
      </h2>

      <p className="text-white mb-4">
        Vigoplace gives you the avenue for church activity management, making it
        easier for congregations to connect and engage.
      </p>

      <div className="flex mb-4">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold text-white">Daily reading post</h3>
          <p className="text-white">
            Share daily devotionals, scripture readings, and reflections to keep
            your community spiritually engaged.
          </p>
        </div>
      </div>

      <div className="flex mb-4">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
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
          className="mr-3 mb-auto mt-1"
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
          className="mr-3 mb-auto mt-1"
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
          className="mr-3 mb-auto mt-1"
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
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold text-white">Prayer request</h3>
          <p className="text-white">
            Allow members to submit prayer requests and provide a platform for
            communal prayer.
          </p>
        </div>
      </div>

      <div className="bg-businessimage pt-8 pb-4 rounded-lg">
        <div className="w-[80%] mx-auto">
          <Image
            src={ChurchImage}
            alt="Church activity Image"
            layout="responsive"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Church;

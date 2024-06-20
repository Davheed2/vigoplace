import Image from "next/image";
import Check from "../../public/img/icon-park-solid_check-one purple.svg";
import Group from "../../public/img/Frame 238312.svg";
import { Button } from "./ui/button";

const GroupPlace: React.FC = () => {
  return (
    <section className="mb-8 bg-text rounded-md px-3 py-4 bg-white font-nunito">
      <h2 className="mb-4 text-2xl w-[60%] font-bold font-ubuntu">
        <span className="text-theme">Group</span>/Community Activity{" "}
        <span className="text-theme">Management</span>
      </h2>

      <p className="w-[70%] mb-5">
        Manage and engage with various groups and communities effortlessly using
        Vigoplace’s Group Place feature.
      </p>

      <p className="mb-3 text-theme font-bold">Types of group place</p>

      <div className="flex mb-4">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold">Family group</h3>
          <p className="">Stay connected with family members.</p>
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
          <h3 className="font-bold">Hobby group</h3>
          <p className="">
            Share interests and hobbies with like-minded individuals.
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
          <h3 className="font-bold">Study group</h3>
          <p className="">
            Collaborate on academic projects and share resources.
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
          <h3 className="font-bold">Support group</h3>
          <p className="">Provide and receive support for various issues.</p>
        </div>
      </div>

      <div className="flex mb-8">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold">Networking group</h3>
          <p className="">Expand professional connections and opportunities.</p>
        </div>
      </div>

      <div className="mb-8">
        <Button className="bg-theme">See more</Button>
      </div>

      <div className="bg-financeimage pt-8 rounded-lg">
        <Image
          src={Group}
          alt="Business Image"
          width={279}
          height={248}
          className="mx-auto"
          //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
};

export default GroupPlace;

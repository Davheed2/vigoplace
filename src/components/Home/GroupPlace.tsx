import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one purple.svg";
import Group from "../../../public/img/iphone-12--product-red.svg";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const GroupPlace: React.FC = () => {
  const router = useRouter();

  const handleSeeMoreClick = () => {
    router.push("/group-management");
  };

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
        <Button
          className="bg-theme hover:bg-businessimage"
          onClick={handleSeeMoreClick}
        >
          See more
        </Button>
      </div>

      <div className="bg-financeimage pt-8 rounded-lg">
        <div className="w-[80%] mx-auto">
          <Image
            src={Group}
            alt="Business Image"
            layout="responsive"
            className="mx-auto w-[60%]"
          />
        </div>
      </div>
    </section>
  );
};

export default GroupPlace;

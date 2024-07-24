import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one purple.svg";
import Group from "../../../public/img/iphone-12--product-re.svg";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const GroupPlace: React.FC = () => {
  const router = useRouter();

  const handleSeeMoreClick = () => {
    router.push("/group-management");
  };

  return (
    <section className="mb-8 bg-text rounded-md px-3 py-4 bg-white font-nunito md:py-10 md:px-10">
      <div className="md:text-center md:mb-10">
        <div className="md:flex md:justify-center md:items-center">
          <div className="hidden md:block bg-theme h-1 w-7 mb-4"></div>
          <h2 className="mb-4 text-2xl w-[60%] font-bold font-ubuntu md:ml-4 md:w-auto md:text-center md:text-3xl">
            <span className="text-theme">Group</span>/Community Activity
            <span className="text-theme"> Management</span>
          </h2>
        </div>

        <p className="w-[70%] mb-5 md:mx-auto">
          Manage and engage with various groups and communities effortlessly
          using Vigoplace’s Group Place feature.
        </p>
      </div>

      <div className="md:flex md:flex-row-reverse">
        <div className="md:w-1/2">
          <p className="mb-3 text-theme font-bold">Types of group place</p>

          <div className="flex mb-4">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="md:ml-8">
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
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="md:ml-8">
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
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="md:ml-8">
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
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="md:ml-8">
              <h3 className="font-bold">Support group</h3>
              <p className="">
                Provide and receive support for various issues.
              </p>
            </div>
          </div>

          <div className="flex mb-8">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 md:hidden"
            />
            <div className="md:ml-8">
              <h3 className="font-bold">Networking group</h3>
              <p className="">
                Expand professional connections and opportunities.
              </p>
            </div>
          </div>

          <div className="mb-8 md:ml-8">
            <Button
              className="bg-theme hover:bg-businessimage"
              onClick={handleSeeMoreClick}
            >
              See more
            </Button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="bg-financeimage pt-8 rounded-lg md:h-[fit-content] md:w-[80%] md:mx-auto md:bg-theme md:rounded-3xl">
            <div className="w-[80%] mx-auto ">
              <Image
                src={Group}
                alt="Business Image"
                layout="responsive"
                className="mx-auto w-[60%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupPlace;

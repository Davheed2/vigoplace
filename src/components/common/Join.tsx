import Image from "next/image";
import Google from "../../../public/img/Group.svg";
import Apple from "../../../public/img/Group (1).svg";
import JoinImage from "../../../public/img/Join 2.svg";

const Join: React.FC = () => {
  return (
    <section className="mb-8 bg-theme rounded-md px-3 py-4 font-nunito md:px-4">
      <div className="md:flex md:mx-8">
        <div className="md:w-[50%] relative">
          <h2 className="mb-6 text-2xl w-[60%] text-white font-bold font-ubuntu md:w-[100%]">
            Join the Vigoplace community
          </h2>
          <p className="text-white mb-4">
            Discover a new way to connect, engage, and earn. Join Vigoplace
            today and start exploring the endless possibilities.
          </p>

          <div className="flex mb-4 w-[70%] md:w-[90%]">
            <div className="z-20 md:mr-1rem">
              <a
                target="__blank"
                href="https://play.google.com/store/apps/details?id=com.vigoplace.vigoplace"
              >
                <Image
                  src={Google}
                  alt="Download on playstore"
                  width={25}
                  height={25}
                  className="mr-3 mb-auto mt-1 w-auto"
                />
              </a>
            </div>

            <div className="z-20">
              <a
                target="__blank"
                href="https://apps.apple.com/ng/app/vigoplace/id1622191142"
              >
                <Image
                  src={Apple}
                  alt="Download on playstore"
                  width={25}
                  height={25}
                  className="mr-3 mb-auto mt-1 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-[50%] relative overflow-hidden md:ml-16">
          <div className="bg-businessimage pb-8 rounded-lg relative md:bg-heading md:h-[100%] md:pb-6">
            <div className="w-[80%] mx-auto relative">
              <Image
                src={JoinImage}
                alt="Join Image"
                layout="responsive"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;

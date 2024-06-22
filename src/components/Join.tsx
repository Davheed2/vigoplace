import Image from "next/image";
import Check from "../../public/img/icon-park-solid_check-one.svg";
import EcommerceImage from "../../public/img/Frame 238313.svg";
import Google from "../../public/img/Group.svg";
import Apple from "../../public/img/Group (1).svg";
import JoinImage from "../../public/img/Frame 238312 (2).svg";

const Join: React.FC = () => {
  return (
    <section className="mb-8 bg-theme rounded-md px-3 py-4 font-nunito">
      <h2 className="mb-6 text-2xl w-[60%] text-white font-bold font-ubuntu">
        Join the Vigoplace community
      </h2>

      <p className="text-white mb-4">
        Discover a new way to connect, engage, and earn. Join Vigoplace today
        and start exploring the endless possibilities.
      </p>

      <div className="flex mb-4 w-[70%]">
        <div>
          <a
            target="__blank"
            href="https://play.google.com/store/apps/details?id=com.vigoplace.vigoplace"
          ></a>
        </div>
        <Image
          src={Google}
          alt="Download on playstore"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1 w-auto"
        />

        <div>
          <a
            target="__blank"
            href="https://apps.apple.com/ng/app/vigoplace/id1622191142"
          ></a>
        </div>
        <Image
          src={Apple}
          alt="Download on playstore"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1 w-auto"
        />
      </div>

      <div className="bg-businessimage pt-8 rounded-lg">
        <Image
          src={JoinImage}
          alt="Business Image"
          width={279}
          height={248}
          className="mx-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Join;

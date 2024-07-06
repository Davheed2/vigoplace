import Image from "next/image";
import Check from "../../public/img/icon-park-solid_check-one.svg";
import EcommerceImage from "../../public/img/Frame 238313.svg";
import Google from "../../../public/img/Group.svg";
import Apple from "../../../public/img/Group (1).svg";
import JoinImage from "../../../public/img/iphone-12--product-red.svg";

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

        <div>
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

      {/* <div className=" pt-8 rounded-lg">
        <Image
          src={JoinImage}
          alt="Business Image"
          width={279}
          height={248}
          className="mx-auto"
          loading="lazy"
        />
      </div> */}

      <div className="bg-businessimage pt-8 rounded-lg">
        <div className="w-[80%] mx-auto">
          <Image
            src={JoinImage}
            alt="Business Image"
            layout="responsive"
            className="mx-auto w-[60%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Join;

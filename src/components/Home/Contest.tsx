import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one.svg";

const Contest: React.FC = () => {
  return (
    <section className="mb-8 bg-foreground rounded-md px-3 py-4 font-nunito md:py-10 md:px-10 md:bg-heading">
      <div className="md:flex md:justify-start md:items-center md:mb-11">
        <div className="hidden md:block bg-theme h-1 w-7 mb-0 md:mb-4 md:mr-6"></div>
        <h2 className="mb-6 text-2xl w-[60%] text-white font-bold font-ubuntu md:ml-4 md:w-auto md:text-center md:text-3xl">
          Organize online contest
        </h2>
      </div>

      <div className="flex mb-6">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1 md:hidden"
        />
        <div className="">
          <h3 className="font-bold text-white">Contest Place</h3>
          <p className="text-white">Host and manage online contests.</p>
        </div>
      </div>

      <div className="flex mb-6">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1 md:hidden"
        />
        <div className="">
          <h3 className="font-bold text-white">Contestants</h3>
          <p className="text-white">
            Engage with participants and manage entries.
          </p>
        </div>
      </div>

      <div className="flex mb-6">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1 md:hidden"
        />
        <div className="">
          <h3 className="font-bold text-white">Paid Contests</h3>
          <p className="text-white">Host and participate in paid voting</p>
        </div>
      </div>

      <div className="flex mb-6">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1 md:hidden"
        />
        <div className="">
          <h3 className="font-bold text-white">Free Contests</h3>
          <p className="text-white">
            Also Vigoplace offers you an avenue where you can also host and
            participate free voting
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contest;

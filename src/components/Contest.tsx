import Image from "next/image";
import Check from "../../public/img/icon-park-solid_check-one.svg";

const Contest: React.FC = () => {
  return (
    <section className="mb-8 bg-foreground rounded-md px-3 py-4 font-nunito">
      <h2 className="mb-6 text-2xl w-[60%] text-white font-bold font-ubuntu">
        Organize online contest
      </h2>

      <div className="flex mb-4">
        <Image
          src={Check}
          alt="Check Icon"
          width={25}
          height={25}
          className="mr-3 mb-auto mt-1"
        />
        <div className="">
          <h3 className="font-bold text-white">Contest Place</h3>
          <p className="text-white">Host and manage online contests.</p>
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
          className="mr-3 mb-auto mt-1"
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
          className="mr-3 mb-auto mt-1"
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

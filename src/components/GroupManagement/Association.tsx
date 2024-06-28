import Image from "next/image";
import ActivityImage from "../../../public/img/vigo-removebg-preview 1.svg";

const Association: React.FC = () => {
  return (
    <section className="mb-8 rounded-md py-4 font-nunito bg-white">
      <div className="flex items-center">
        <div className="bg-theme pt-5 rounded ml-2 mr-12 h-32 w-96">
          {/* <Image
            src={ActivityImage}
            alt="Check Icon"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">
            Professional Association
          </h2>

          <p className="mb-2">
            For a successful transaction, every transaction on the app incurs a
            minor percentage-based fee.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Association;

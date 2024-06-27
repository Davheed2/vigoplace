import Image from "next/image";
import ActivityImage from "../../public/img/vigo-removebg-preview 1.svg";
import { Button } from "./ui/button";

const Activity: React.FC = () => {
  return (
    <section className="mb-8 bg-text rounded-md pt-4 font-nunito">
      <h2 className="mb-4 text-2xl font-bold font-ubuntu">
        Church activity management{" "}
      </h2>

      <p className="mb-4">
        For a successful transaction, every transaction on the app incurs a
        minor percentage-based fee.{" "}
      </p>

      <div className="mb-4 bg-theme rounded">
        <Image
          src={ActivityImage}
          alt="Activity Image"
          //   width={25}
          //   height={25}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Activity;

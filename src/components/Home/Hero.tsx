import Image from "next/image";
import { Button } from "../ui/button";
import Frame1207 from "../../../public/img/Frame 1207.svg";
import image from "../../../public/img/Image.svg";

const Hero: React.FC = () => {
  return (
    <section className="mt-16 mb-8 font-nunito">
      <h1 className="mb-3 text-4xl w-[80%] font-bold font-ubuntu">
        Welcome to Vigoplace
      </h1>
      <h2 className="mb-3 text-xl w-[80%]">
        Business, Social Media, and Financial Services.
      </h2>
      <p className="mb-4 w-[80%]">
        Vigoplace is a FinTech and business social media platform that brings
        people and businesses together.
      </p>
      <div>
        <Button className="bg-theme">Learn more</Button>
      </div>
      <div className="mt-6">
        <Image
          src={image}
          alt="Hero Image"
          //loading="lazy"
          priority={true}
          layout="responsive"
          className="w-[100%]"
        />
      </div>
    </section>
  );
};

export default Hero;

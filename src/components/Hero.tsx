import Image from "next/image";
import { Button } from "./ui/button";
import Frame1207 from "../../public/img/Frame 1207.svg";

const Hero: React.FC = () => {
  return (
    <section className="mb-8 w-[80%] font-nunito">
      <h1 className="mb-3 text-3xl font-bold font-ubuntu">Welcome to Vigoplace</h1>
      <h2 className="mb-3 text-xl">
        Business, Social Media, and Financial Services.
      </h2>
      <p className="mb-4">
        Vigoplace is a FinTech and business social media platform that brings
        people and businesses together.
      </p>
      <div>
        <Button className="bg-theme">Learn more</Button>
      </div>
      <div>
        <Image src={Frame1207} alt="Hero Image" width={279} height={248} loading="lazy"/>
      </div>
    </section>
  );
};

export default Hero;

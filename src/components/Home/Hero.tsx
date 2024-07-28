import Image from "next/image";
import { Button } from "../ui/button";
import image from "../../../public/img/Home/Image.webp";
import Ellipse from "../../../public/img/Ellipse 44.svg";

const Hero: React.FC = () => {
  return (
    <section className="mt-16 mb-8 font-nunito py-6 md:px-10 md:bg-white md:rounded-md md:bg-hero-pattern md:mt-20">
      <div className="md:flex">
        <div className="md:w-[50%] custom:w-[60%]">
          <h1 className="mb-3 text-4xl w-[80%] font-bold font-ubuntu md:text-5xl md:w-[90%] md:mb-6 md:font-nunito">
            Welcome To <span className="md:text-theme">Vigoplace</span>
          </h1>

          <div className="md:bg-pricingbackground2 md:rounded-md md:py-1 md:pl-4 md:w-[80%] custom:w-[inherit] md:mb-6">
            <h2 className="mb-3 text-xl w-[80%] md:font-bold">
              Business, Social Media, and Financial Services.
            </h2>
          </div>

          <p className="mb-4 w-[80%] md:mb-6">
            Vigoplace is a FinTech and business social media platform that bring
            people and businesses together and provide digital banking services
            such as fund collections for SMEs and un-officially groups. .
          </p>

          <div className="md:hidden">
            <Button className="bg-theme hover:bg-businessimage">
              Learn more
            </Button>
          </div>

          <div className="hidden md:block">
            <a className="text-theme hover:text-businessimage hover:cursor-pointer">
              Learn more
            </a>
          </div>
        </div>

        <div className="md:w-[50%] custom:w-[40%] md:relative md:my-auto lg:w-[35%] 2xl:w-[30%]">
          <div className="mt-6 z-20 md:absolute md:top-8 hero1:!right-10 hero2:top-10 hero2:!right-12">
            <Image
              src={image}
              alt="Hero Image"
              priority={true}
              height={200}
              width={400}
            />
          </div>

          <div className="hidden md:block z-10">
            <Image
              src={Ellipse}
              alt="Circle Image"
              priority={true}
              height={200}
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

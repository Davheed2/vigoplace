import Image from "next/image";
import Logo from "../../public/img/Logo.svg";

const Footer: React.FC = () => {
  return (
    <section className="mb-8 bg-white rounded-md px-3 py-4 font-nunito">
      <div className="flex mb-8">
        <Image
          src={Logo}
          alt="Vigoplace Logo"
          // width={150}
          // height={30}
          className="h-14 w-auto"
          //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="my-auto ml-3">
          <p className="text-xxs">TM</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 font-semibold text-theme">COMPANY</h3>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 font-semibold text-theme">SERVICES</h3>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 font-semibold text-theme">RESOURCES</h3>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
      </div>
    </section>
  );
};

export default Footer;

import Image from "next/image";
import Check from "../../../public/img/icon-park-solid_check-one purple.svg";
import { Button } from "../ui/button";

const Benefit: React.FC = () => {
  return (
    <section className="mb-8 bg-text rounded-md px-3 pt-4 font-nunito md:py-10 md:px-10">
      <h2 className="mb-4 text-2xl font-bold text-center font-ubuntu md:text-3xl">
        User <span className="text-theme"> Benefits </span>
      </h2>

      <div className="md:flex md:gap-x-6">
        <div className="flex-1">
          <div className="flex mb-4 bg-white py-5 rounded pr-2">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 ml-2"
            />
            <div className="">
              <h3 className="font-bold">Unified management</h3>
              <p className="">
                Handle all your activities within one app, simplifying your
                digital life.
              </p>
            </div>
          </div>


          <div className="flex mb-4 bg-white py-5 rounded pr-2 md:h-[210px] benefit:h-[180px] benefit3:h-[160px] benefit5:h-[140px] benefit7:h-auto">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 ml-2"
            />
            <div className="">
              <h3 className="font-bold">Profile fellowship</h3>
              <p className="">
                When you create a new profile place, followers from your
                existing profile are automatically added to the new one.
              </p>
            </div>
          </div>

          
          <div className="flex mb-4 bg-white py-5 rounded pr-2 md:h-[135px] benefit4:h-[110px] benefit8:h-auto">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 ml-2"
            />
            <div className="">
              <h3 className="font-bold">Earn from activities</h3>
              <p className="">
                Get paid for your engagement and activities on the app.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex mb-4 bg-white py-5 rounded pr-2 md:h-[135px] benefit2:h-[110px] benefit6:h-auto">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 ml-2"
            />
            <div className="">
              <h3 className="font-bold">Promotion opportunity</h3>
              <p className="">
                Earn money by following certain accounts and promoting content.
              </p>
            </div>
          </div>

          <div className="flex mb-4 bg-white py-5 rounded pr-2">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 ml-2"
            />
            <div className="">
              <h3 className="font-bold">Transaction dispute</h3>
              <p className="pr-2">
                Users can dispute any transaction if they are not satisfied with
                the product they bought or with the customer, ensuring a fair
                and secure marketplace.
              </p>
            </div>
          </div>

          <div className="flex mb-8 bg-white py-5 rounded pr-2">
            <Image
              src={Check}
              alt="Check Icon"
              width={25}
              height={25}
              className="mr-3 mb-auto mt-1 ml-2"
            />
            <div className="">
              <h3 className="font-bold">Chat with loved ones</h3>
              <p className="">
                Connect with loved ones from anywhere in the world through our
                messaging feature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;

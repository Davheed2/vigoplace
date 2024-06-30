import Image from "next/image";
import BiblePostImage from "../../../public/img/vigo-removebg-preview 1.svg";

const Receipts: React.FC = () => {
  return (
    <section className="mb-8 rounded-md py-4 font-nunito bg-white">
      <div className="flex items-center px-4">
        <div className="mr-2">
          <h2 className="mb-4 text-2xl font-bold font-ubuntu">Transaction receipts</h2>

          <p className="mb-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </p>
        </div>

        <div className="bg-theme pt-5 rounded ml-2 h-32 w-96">
          {/* <Image
            src={BiblePostImage}
            alt="Bible Post Image"
            //   width={25}
            //   height={25}
            //className="mr-3 mt-1 ml-2"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Receipts;

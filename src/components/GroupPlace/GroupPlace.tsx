import Image from "next/image";
import GroupImage from "../../../public/img/Frame 238218 (15).svg";

const GroupPlace: React.FC = () => {
  return (
    <>
      <section className="mt-16 mb-4 bg-text rounded-md pt-4 font-nunito">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Learn</h2>

        <p className="mb-4">
          Vigoplace provides a secure and user-friendly financial management
          system.
        </p>

        <div className="mb-4">
          <Image src={GroupImage} alt="Group Place Image" />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-2xl font-bold font-ubuntu">Group place</h2>
      </section>

      <section
        id="creation"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
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
              Group creation
            </h2>

            <p className="mb-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
          </div>
        </div>
      </section>

      <section
        id="management"
        className="rounded-md mb-8 py-4 pb-8 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Members Management
            </h2>

            <p className="mb-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
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

      <section
        id="content-sharing"
        className="rounded-md py-4 mb-8 pb-8 font-nunito bg-white"
      >
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
              Content sharing
            </h2>

            <p className="mb-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
          </div>
        </div>
      </section>

      <section
        id="event-coordination"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Event Coordination
            </h2>

            <p className="mb-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
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

      <section
        id="discussion"
        className="rounded-md py-4 mb-8 pb-8 font-nunito bg-white"
      >
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
              Discussion forum
            </h2>

            <p className="mb-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
          </div>
        </div>
      </section>

      <section
        id="notification"
        className="mb-8 rounded-md py-4 font-nunito bg-white"
      >
        <div className="flex items-center px-4">
          <div className="mr-2">
            <h2 className="mb-4 text-2xl font-bold font-ubuntu">
              Notification
            </h2>

            <p className="mb-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
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
    </>
  );
};

export default GroupPlace;

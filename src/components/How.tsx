import Image from "next/image";

const How: React.FC = () => {
  return (
    <section className="mb-8 bg-text px-3 py-4 font-nunito">
      <h2 className="mb-8 text-2xl font-bold font-ubuntu text-center">
        How vigoplace works
      </h2>

      <div className="flex mb-4 bg-howcard1 py-5 rounded">
        <p
          className="mr-3 mb-auto ml-2 bg-theme text-white w-8 h-8 flex items-center justify-center"
          style={{ borderRadius: "100%" }}
        >
          1
        </p>
        <div className="">
          <h3 className="font-bold">Download the app</h3>
          <p className="w-[80%]">
            Available on both the [Play Store] and the [App Store].
          </p>
        </div>
      </div>
      <div className="flex mb-4 bg-howcard2 py-5 rounded">
        <p
          className="mr-3 mb-auto ml-2 bg-theme text-white w-12 h-8 flex items-center justify-center"
          style={{ borderRadius: "100%" }}
        >
          2
        </p>

        <div className="">
          <h3 className="font-bold">Create your profile</h3>
          <p className="w-[80%]">
            Set up your Basic Place and explore other profile options to
            maximize your experience.
          </p>
        </div>
      </div>
      <div className="flex mb-8 bg-howcard3 py-5 rounded">
        <p
          className="mr-3 mb-auto ml-2 bg-theme text-white w-12 h-8 flex items-center justify-center"
          style={{ borderRadius: "100%" }}
        >
          3
        </p>
        <div className="">
          <h3 className="font-bold">Engage and earn</h3>
          <p className="w-[80%]">
            Post content, host contests, sell products, and manage your
            finances—all within one app.
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;

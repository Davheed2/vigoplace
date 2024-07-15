import Image from "next/image";

const How: React.FC = () => {
  return (
    <section className="mb-8 bg-text px-3 pt-4 font-nunito">
      <div className="md:flex md:justify-center md:items-center">
        <div className="hidden md:block bg-theme h-1 w-7 mb-6"> </div>
        <h2 className="mb-8 text-2xl font-bold font-ubuntu text-center md:ml-4 md:w-auto md:text-center md:text-3xl">
          How vigoplace works
        </h2>
      </div>

      <div className="md:hidden">
        <div>
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
        </div>

        <div>
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
        </div>
      </div>

      {/* TABLET VIEW */}

      <div className="hidden md:flex md:gap-x-6">
        <div>
          <div className="md:flex md:mb-4 md:bg-howcard1 md:py-5 md:rounded">
            <p
              className="md:mr-3 md:mb-auto md:ml-2 md:bg-theme md:text-white md:w-8 md:h-8 md:flex md:items-center md:justify-center"
              style={{ borderRadius: "100%" }}
            >
              1
            </p>
            <div className="">
              <h3 className="md:font-bold">Download the app</h3>
              <p className="md:w-[80%]">
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
        </div>

        <div>
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
        </div>
      </div>
    </section>
  );
};

export default How;

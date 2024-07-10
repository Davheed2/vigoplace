import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/router";
import ErrorImage from "../../public/img/404.svg";
import { BaseLayout } from "@/layouts/BaseLayout";
import { Nunito, Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: "500",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: "400",
});

const NotFound = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <section className={`${ubuntu.variable} ${nunito.variable}`}>
        <div className="mt-16 mb-8 justify-center bg-white items-center font-nunito py-4 rounded-md px-4">
          <div className="mb-8">
            <Image
              src={ErrorImage}
              alt="404 Error Image"
              role="presentation"
              // sizes="(min-width: 808px) 50vw, 100vw"
              priority
              className="w-[80%] mx-auto"
            />
          </div>

          <div className="">
            <div className="">
              <h1 className="mb-5  font-ubuntu text-center font-black">
                Oops, page not found
              </h1>
              <h3 className="text-center">
                Sorry, the page you are looking for does not exist or has been
                moved.
              </h3>

              <div className="my-6  text-center">
                <Button
                  //size="lg"
                  //variant="primary"
                  className="bg-theme hover:bg-businessimage"
                  onClick={() => router.push("/")}
                >
                  Back to homepage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default NotFound;

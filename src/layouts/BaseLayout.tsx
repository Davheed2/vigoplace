import Image from "next/image";
import NavBar from "@/components/common/NavBar";
import Join from "@/components/common/Join";
import Join2 from "@/components/common/Join2";
import Footer from "@/components/common/Footer";
import Margin from "@/components/common/Margin";
import type { BaseLayoutProps } from "@/Interface";
import Ellipse from "../../public/img/Ellipse 43.svg";
import { DesktopNav } from "@/components/NavItems/desktopNav";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <> 
      <DesktopNav/>
     <NavBar/>
      <div className="relative">
        <div className="relative">
          {children}
          <Join />
          <Join2 />
          <Footer />
          <Margin />
        </div>
        <div className="hidden md:block absolute bottom-0 right-[2%] z-10">
          <Image src={Ellipse} alt="Circle image" width={700} height={900} className="lg:w-[750px]"/>
        </div>
      </div>
    </>
  );
};

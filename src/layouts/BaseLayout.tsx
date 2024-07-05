import NavBar from "@/components/common/NavBar";
import Join from "@/components/common/Join";
import Join2 from "@/components/common/Join2";
import Footer from "@/components/common/Footer";
import Margin from "@/components/common/Margin";
import type { BaseLayoutProps } from "@/Interface";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Join />
      <Join2 />
      <Footer />
      <Margin />
    </>
  );
};

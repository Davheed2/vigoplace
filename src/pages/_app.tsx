import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";
import Join from "@/components/Join";
import Join2 from "@/components/Join2";
import Footer from "@/components/Footer";
import Margin from "@/components/Margin";
import { WhyVigoPlace } from "@/components/WhyVigoPlace/WhyVigoPlace";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <WhyVigoPlace/>
      <Component {...pageProps} />
      <Join />
      <Join2 />
      <Footer />
      <Margin />
    </>
  );
}

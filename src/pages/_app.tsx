import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";
import Join from "@/components/Join";
import Join2 from "@/components/Join2";
import Footer from "@/components/Footer";
import Margin from "@/components/Margin";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Join />
      <Join2 />
      <Footer />
      <Margin />
    </>
  );
}

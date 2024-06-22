import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Join2 from "@/components/Join2";
import Footer from "@/components/Footer";
import Dummy from "@/components/dummy";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Join2 />
      <Footer />
      <Dummy />
    </>
  );
}

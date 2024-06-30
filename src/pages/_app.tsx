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
      {/* Render NavBar only if Component is not null */}
      {Component && <NavBar />}

      {/* Render the current page component */}
      {Component && <Component {...pageProps} />}

      {/* Render Join component only if Component is not null */}
      {Component && <Join />}

      {/* Render Join2 component only if Component is not null */}
      {Component && <Join2 />}

      {/* Render Footer component only if Component is not null */}
      {Component && <Footer />}

      {/* Render Margin component only if Component is not null */}
      {Component && <Margin />}
    </>
  );
}

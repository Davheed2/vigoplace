import { useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.type = "text/javascript";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          //includedLanguages: "es,fr,de,zh-CN,ru",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    //@ts-ignore
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  useEffect(() => {
    // Add custom styles for the Google Translate element
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate { display: none !important; }
      body { top: 0px !important; }
      .goog-te-gadget-icon {
        display: none;
      }
      #google_translate_element .goog-te-gadget-simple {
        background-color: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-family: 'Nunito', sans-serif;
        display: inline-block;
        height: auto; /* Ensure it doesn't have a fixed height */
      }
      #google_translate_element .goog-te-gadget-simple .goog-te-menu-value {
        color: #4a5568;
        padding: 0.25rem; /* Reduce padding to make it smaller */
      }
      #google_translate_element .goog-te-gadget-simple .goog-te-menu-value span {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      #google_translate_element .goog-te-gadget-simple .goog-te-menu-value span:hover {
        text-decoration: none;
      }
      /* Remove the dropdown arrow */
      #google_translate_element .goog-te-gadget-simple .goog-te-menu-value span:after {
        content: '';
      }
      /* Hide the language options dropdown */
      .goog-te-combo option:not(:first-child) {
        display: none;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="mb-8 bg-white rounded-md px-3 py-4 font-nunito">
      <div className="flex mb-8">
        <Image
          src={Logo}
          alt="Vigoplace Logo"
          // width={150}
          // height={30}
          className="h-14 w-auto"
          //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="my-auto ml-3">
          <p style={{ fontSize: "0.35rem" }}>TM</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-2 font-semibold text-theme">COMPANY</h3>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
      </div>

      <div className="mb-8">
        <h3 className="mb-2 font-semibold text-theme">SERVICES</h3>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
      </div>

      <div className="mb-8">
        <h3 className="mb-2 font-semibold text-theme">RESOURCES</h3>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
        <p>Donec dignism</p>
      </div>

      <div className="mb-8 flex space-x-4">
        <div className="bg-socialbackground rounded-full p-2">
          <div>
            <a target="__blank" href="https://facebook.com/vigoplace">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-social w-4 h-4"
              />
            </a>
          </div>
        </div>

        <div className="bg-socialbackground rounded-full p-2">
          <div>
            <a
              target="__blank"
              href="https://www.linkedin.com/company/vigoplace/"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-social w-4 h-4"
              />
            </a>
          </div>
        </div>

        <div className="bg-socialbackground rounded-full p-2">
          <div>
            <a target="__blank" href="https://x.com/vvigoplace?s=11">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-social w-4 h-4"
              />
            </a>
          </div>
        </div>
        <div className="bg-socialbackground rounded-full p-2">
          <div>
            <a
              target="__blank"
              href="https://www.instagram.com/thevigoplace?igsh=NW1pOGFsNml4NTVk"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-social w-4 h-4"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mb-8 w-[80%]">
        <p>
          Nam posuere accumsan porta. Integer id orci sed ante tincidunt
          tincidunt sit amet sed libero.
        </p>
      </div>

      <div className="mb-8 font-bold">
        <p> © Vigobrand Inc. {currentYear}</p>
      </div>

      <div id="google_translate_element" className="my-4"></div>
    </section>
  );
};

export default Footer;

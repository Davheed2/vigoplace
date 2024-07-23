import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { MobileNav } from "../NavItems/mobileNav";
import { DesktopNav } from "../NavItems/desktopNav";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDesktopMenuOpen, setDesktopIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      const currentScrollY =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeDesktopMenu = () => {
    setDesktopIsMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{ transition: "ease-in .7s", scrollBehavior: "smooth" }}
        className={`${
          isScrolled ? "fixed shadow-md" : "absolute"
        }   top-0 left-0 w-full flex justify-between  p-4 z-30 px-8 md:hidden`}
      >
        <div>
          <Image src={Logo} alt="Vigoplace Logo" className="h-10 w-auto" />
        </div>

        <div className="flex items-center md:hidden">
          <div className="p-2">
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="text-social w-4 h-4 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </nav>

      <nav className="hidden md:flex rounded-md justify-between items-center">
        <div className="w-[100%]">
          {/* <DesktopNav closeDesktopMenu={closeDesktopMenu} /> */}
          <DesktopNav />
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-md z-30">
          <div className="p-4 mt-4">
            <MobileNav closeMenu={closeMenu} />
          </div>
          <div className="absolute top-8 right-8">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-social w-4 h-4 cursor-pointer"
              onClick={closeMenu}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

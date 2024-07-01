import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavItems } from "./NavItems/NavItems";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between bg-primary shadow-md p-4 z-10">
        <div>
          <Image src={Logo} alt="Vigoplace Logo" className="h-10 w-auto" />
        </div>
        <div className="flex items-center">
          <div className="p-2">
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="text-social w-4 h-4 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-md z-10">
          <div className="p-4 mt-4">
            <NavItems closeMenu={closeMenu} />
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

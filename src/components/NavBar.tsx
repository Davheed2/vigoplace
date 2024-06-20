import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/Logo.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between mb-8">
      <div>
        <Image
          src={Logo}
          alt="Vigoplace Logo"
          // width={150}
          // height={30}
          className="h-10 w-auto"
          //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <button className="text-black" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

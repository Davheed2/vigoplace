import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import useToggle from "@/hooks/useToggle";
// import { MenuIcon } from "lucide-react";
// import { SidebarCloseIcon } from "lucide-react";
//import { ArrowDown } from "lucide-react";
// import menu from "../../public/img/ci--hamburger-md.png";
// import close from "../../public/img/ic--round-close.png";


const navLinks = [
  {
    name: "Why Vigoplace", ///This should have the dropdown
    subNavLinks: [
      {
        name: "Church Activity Management",
        url: "/church-activity",
      },
      {
        name: "Groups/Community Activity Management",
        url: "/group-management",
      },
      {
        name: "E-Commerce",
        url: "/e-commerce",
      },
      {
        name: "Financial Services",
        url: "/financial-services",
      },
      {
        name: "Sell digital content",
        url: "/sell",
      },
      {
        name: "Organize online contest",
        url: "/contest",
      },
      {
        name: "Fundraising",
        url: "/fundraising",
      },
    ],
  },

  {
    name: "Pricing", ///This should have the dropdown
    subNavLinks: [
      {
        name: "Funding wallet",
        url: "/funding",
      },
      {
        name: "Bank transfer",
        url: "/transfer",
      },
      {
        name: "Charges from earnings",
        url: "/earning",
      },
    ],
  },

  {
    name: "Learn", ///This should have the dropdown
    subNavLinks: [
      {
        name: "Basic Place",
        url: "/basic-place",
      },
      {
        name: "Channel Place",
        url: "/channel-place",
      },
      {
        name: "Contest Place",
        url: "/contest-place",
      },
      {
        name: "Market Place",
        url: "/market-place",
      },
      {
        name: "Ministry Place",
        url: "/Ministry-place",
      },
      {
        name: "Group Place",
        url: "/group-place",
      },
    ],
  },

  {
    name: "Join Our Community", ///This should have the dropdown
    subNavLinks: [
      {
        name: "Login",
        url: "/login",
      },
      {
        name: "Create Free Account",
        url: "/register",
      },
      {
        name: "Download IOS App",
        url: "/download-ios",
      },
      {
        name: "Download Android App",
        url: "/download-android",
      },
    ],
  },
];

const NavBar: React.FC = () => {
  const [isMobileNavOpen, toggleMobileNav] = useToggle(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
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
        {/* <button className="text-black" onClick={toggleMenu}>

          </button> */}
      </div>

      <div className="p-2">
        <div>
          <a
            target="__blank"
            href="https://www.instagram.com/thevigoplace?igsh=NW1pOGFsNml4NTVk"
          >
            <FontAwesomeIcon icon={faBars} className="text-social w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

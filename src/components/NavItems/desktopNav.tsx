import Link from "next/link";
import { useState } from "react";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiDropdownList,
} from "react-icons/ri";
import Logo from "../../../public/img/Logo.svg";

import createAccount from "../../../public/icons/Join/CreateAccountIconDesktop.svg";
import downloadAndroid from "../../../public/icons/Join/DownloadAndroidIconDesktop.svg";
import downloadIos from "../../../public/icons/Join/DownloadIosIconDesktop.svg";
import logIn from "../../../public/icons/Join/LoginIconDesktop.svg";

import basicPlace from "../../../public/icons/Learn/BasicPlaceIconDesktop.svg";
import channelPlace from "../../../public/icons/Learn/ChannelPlaceIconDesktop.svg";
import contestPlace from "../../../public/icons/Learn/ContestPlaceIconDesktop.svg";
import groupPlace from "../../../public/icons/Learn/GroupPlaceIconDesktop.svg";
import marketPlace from "../../../public/icons/Learn/MarketPlaceIconDesktop.svg";
import ministryPlace from "../../../public/icons/Learn/MinistryPlaceIconDesktop.svg";

import bankTransfer from "../../../public/icons/Pricing/BankTransferIconDesktop.svg";
import earningsCharge from "../../../public/icons/Pricing/EarningsChargeIconDesktop.svg";
import fundWallet from "../../../public/icons/Pricing/FundWalletIconDesktop.svg";

import church from "../../../public/icons/Why/ChurchIconDesktop.svg";
import digitalContent from "../../../public/icons/Why/DigitalContentIconDesktop.svg";
import ecommerce from "../../../public/icons/Why/EcommerceIconDesktop.svg";
import finance from "../../../public/icons/Why/FinanceIconDesktop.svg";
import fundRaising from "../../../public/icons/Why/FundraisingIconDesktop.svg";
import group from "../../../public/icons/Why/GroupIconDesktop.svg";
import onlineContest from "../../../public/icons/Why/OnlineContestIconDesktop.svg";
import Image from "next/image";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Button } from "../ui/button";

type NavLink = {
  name: string;
  link: string;
};

type SubNavLink = NavLink & {
  nameSubLinks?: NavLink[];
  icon: any;
};

type MainNavLink = {
  name: string;
  link?: string;
  nameSubLinks?: SubNavLink[];
};

interface NavItemsProps {
  closeDesktopMenu: () => void;
}

export const DesktopNav: React.FC<NavItemsProps> = ({ closeDesktopMenu }) => {
  const navs: MainNavLink[] = [
    {
      name: "Why Vigoplace?",
      nameSubLinks: [
        {
          name: "Church Activity Management",
          link: "/church-activity",
          icon: church,
          nameSubLinks: [
            {
              name: "Daily Reading Post",
              link: "/church-activity#daily-reading-post",
            },
            { name: "Bible Post", link: "/church-activity#bible-post" },
            { name: "Giving", link: "/church-activity#giving" },
            { name: "Offering Post", link: "/church-activity#offering-post" },
            { name: "Prayer Request", link: "/church-activity#prayer-request" },
          ],
        },
        {
          name: "Groups/Community Activity Management",
          link: "/group-management",
          icon: group,
          nameSubLinks: [
            {
              name: "Collection Post",
              link: "/group-management#collection-posts",
            },
            { name: "Family Groups", link: "/group-management#family-groups" },
            { name: "Hobby Groups", link: "/group-management#hobby-groups" },
            { name: "Study Groups", link: "/group-management#study-groups" },
            {
              name: "Support Groups",
              link: "/group-management#support-groups",
            },
            {
              name: "Networking Groups",
              link: "/group-management#networking-groups",
            },
            {
              name: "Professional Association",
              link: "/group-management#professional-association",
            },
            { name: "Alumni Groups", link: "/group-management#alumni-groups" },
            {
              name: "Volunteer Groups",
              link: "/group-management#volunteer-groups",
            },
            { name: "Sports Team", link: "/group-management#sports-team" },
            {
              name: "Interest-Based Communities",
              link: "/group-management#interest-based-communities",
            },
          ],
        },
        {
          name: "Financial Services",
          link: "/financial-service",
          icon: finance,
          nameSubLinks: [
            {
              name: "Multi-Wallet System",
              link: "/financial-service#multi-wallet-system",
            },
            {
              name: "KYC (Know Your Customer)",
              link: "/financial-service#kyc",
            },
            {
              name: "Secure Online Banking",
              link: "/financial-service#secure-online-banking",
            },
            {
              name: "Cardless Transaction",
              link: "/financial-service#cardless-transaction",
            },
            {
              name: "Inter-Bank Transfers",
              link: "/financial-service#inter-bank-transfers",
            },
            {
              name: "Wallet to Wallet",
              link: "/financial-service#wallet-to-wallet",
            },
            {
              name: "OTP for Transfers",
              link: "/financial-service#otp-for-transfers",
            },
            {
              name: "Transaction Receipts",
              link: "/financial-service#transaction-receipts",
            },
            {
              name: "Transaction Statements",
              link: "/financial-service#transaction-statements",
            },
            {
              name: "Expense Tracking",
              link: "/financial-service#expense-tracking",
            },
          ],
        },
        {
          name: "Ecommerce",
          link: "/e-commerce",
          icon: ecommerce,
          nameSubLinks: [
            { name: "Marketplace", link: "/e-commerce#marketplace" },
            { name: "Product Posts", link: "/e-commerce#product-posts" },
            { name: "Service Posts", link: "/e-commerce#service-posts" },
            { name: "Digital Goods", link: "/e-commerce#digital-goods" },
          ],
        },

        {
          name: "Sell Digital Content",
          link: "/sell-contents",
          icon: digitalContent,
          nameSubLinks: [
            { name: "Channel Place", link: "/sell-contents#channel-place" },
            {
              name: "Pay to View Post",
              link: "/sell-contents#pay-to-view-post",
            },
            { name: "Buy", link: "/sell-contents#buy" },
            { name: "Rent", link: "/sell-contents#rent" },
            { name: "Subscription", link: "/sell-contents#subscription" },
          ],
        },
        {
          name: "Organize Online Contest",
          link: "/contest",
          icon: onlineContest,
          nameSubLinks: [
            { name: "Contest Place", link: "/contest#contest-place" },
            { name: "Contestant", link: "/contest#contestant" },
            { name: "Paid Contests", link: "/contest#paid-contests" },
            { name: "Free Contest", link: "/contest#free-contest" },
          ],
        },
        {
          name: "Fundraising",
          link: "/fundraising",
          icon: fundRaising,
          nameSubLinks: [
            {
              name: "Fundraising Posts",
              link: "/fundraising#fundraising-posts",
            },
            {
              name: "Support/Donate Posts",
              link: "/fundraising#support/donate-posts",
            },
          ],
        },
      ],
    },
    {
      name: "Pricing",
      nameSubLinks: [
        {
          name: "Funding",
          link: "/funding",
          icon: fundWallet,
          nameSubLinks: [
            {
              name: "Funding Naira Wallet Using a Naira Card",
              link: "/funding#funding-naira-card",
            },
            {
              name: "Funding US Dollar Wallet Using a USD Card",
              link: "/funding#funding-usd-card",
            },
            {
              name: "Funding US Dollar Wallet Using a Non-US Card",
              link: "/funding#funding-non-us-card",
            },
            {
              name: "Funding Via Virtual Account",
              link: "/funding#funding-virtual-account",
            },
          ],
        },
        {
          name: "Bank transfer",
          link: "/bank-transfer",
          icon: bankTransfer,
          nameSubLinks: [
            {
              name: "Regular or Normal Bank Transfer for USD",
              link: "/bank-transfer#regular-usd",
            },
            {
              name: "Expedited Bank Transfer for USD",
              link: "/bank-transfer#expedite-usd",
            },
            {
              name: "Regular or Normal Bank Transfer for NGN",
              link: "/bank-transfer#regular-ngn",
            },
            {
              name: "Expedited Bank Transfer for NGN",
              link: "/bank-transfer#expedite-ngn",
            },
          ],
        },
        {
          name: "Charges from earnings",
          link: "/charges",
          icon: earningsCharge,
          nameSubLinks: [
            {
              name: "Earnings From Products or Services",
              link: "/charges#product-earnings",
            },
            {
              name: "Earnings From Gift Post",
              link: "/charges#gift-post-earnings",
            },
            {
              name: "Earnings From Voting Post",
              link: "/charges#voting-post-earnings",
            },
            {
              name: "Earnings From Subscribing, Renting and Buying",
              link: "/charges#purchase-earnings",
            },
            {
              name: "Earnings From Fundraising Post",
              link: "/charges#fundraising-post-earnings",
            },
          ],
        },
      ],
    },
    {
      name: "Learn",
      nameSubLinks: [
        {
          name: "Basic Place",
          link: "/basic-place",
          icon: basicPlace,
          nameSubLinks: [
            { name: "Profile Management", link: "/basic-place#profile-manage" },
            { name: "Post Creation", link: "/basic-place#post-creation" },
            {
              name: "Interaction Tools",
              link: "/basic-place#interaction-tools",
            },
            { name: "Messaging", link: "/basic-place#messaging" },
            { name: "Notifications", link: "/basic-place#notifications" },
          ],
        },
        {
          name: "Channel Place",
          link: "/channel-place",
          icon: channelPlace,
          nameSubLinks: [
            { name: "Pay-To-View Tools", link: "/channel-place#pay-to-view" },
            {
              name: "Content Management",
              link: "/channel-place#content-management",
            },
            {
              name: "Subscriber Interaction",
              link: "/channel-place#subscribers",
            },
            { name: "Analytics", link: "/channel-place#analytics" },
          ],
        },
        {
          name: "Contest Place",
          link: "/contest-place",
          icon: contestPlace,
          nameSubLinks: [
            {
              name: "Contest Creation",
              link: "/contest-place#contest-creation",
            },
            {
              name: "Entry Management",
              link: "/contest-place#entry-management",
            },
            { name: "Voting system", link: "/contest-place#voting-system" },
            {
              name: "Price distribution",
              link: "/contest-place#price-distribution",
            },
          ],
        },

        {
          name: "Ministry Place",
          link: "/ministry-place",
          icon: ministryPlace,
          nameSubLinks: [
            {
              name: "Profile creation",
              link: "/ministry-place#profile-creation",
            },
            { name: "Offering Tools", link: "/ministry-place#offering-tools" },
            { name: "Media Sharing", link: "/ministry-place#media-sharing" },
            {
              name: "Communication tools",
              link: "/ministry-place#communication-tools",
            },
            {
              name: "Prayer requests",
              link: "/ministry-place#prayer-requests",
            },
            {
              name: "Analytics and Reporting",
              link: "/ministry-place#analytics",
            },
          ],
        },
        {
          name: "Group Place",
          link: "/group-place",
          icon: groupPlace,
          nameSubLinks: [
            { name: "Group creation", link: "/group-place#creation" },
            { name: "Members management", link: "/group-place#management" },
            { name: "Content Sharing", link: "/group-place#content-sharing" },
            {
              name: "Event Coordination",
              link: "/group-place#event-coordination",
            },
            { name: "Discussion forum", link: "/group-place#discussion" },
            { name: "Notifications", link: "/group-place#notification" },
          ],
        },
        {
          name: "Market Place",
          link: "/market-place",
          icon: marketPlace,
          nameSubLinks: [
            {
              name: "Product/Service posting",
              link: "/market-place#product-posting",
            },
            {
              name: "Transaction tools",
              link: "/market-place#transaction-tools",
            },
            {
              name: "Inventory Management",
              link: "/market-place#inventory-management",
            },
            {
              name: "Customer Interaction",
              link: "/market-place#customer-interaction",
            },
          ],
        },
      ],
    },
  ];

  const joinVigoPlace = {
    name: "Join Our Community",
    nameSubLinks: [
      {
        name: "Login",
        link: "https://web.vigoplace.com/signin",
        icon: logIn,
      },
      {
        name: "Create Free Account",
        link: "https://web.vigoplace.com/signup",
        icon: createAccount,
      },
      {
        name: "Download IOS App",
        link: "https://apps.apple.com/ng/app/vigoplace/id1622191142",
        icon: downloadIos,
      },
      {
        name: "Download Android App",
        link: "https://play.google.com/store/apps/details?id=com.vigoplace.vigoplace",
        icon: downloadAndroid,
      },
    ],
  };

  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [activeSubNav, setActiveSubNav] = useState<string | null>(null);
  const [subsubLink, setSubSubLink] = useState(true);
  const [subLinkIndex, setSubLinkIndex] = useState(0);

  const [joinCommunityDisplay, setJoinCommunityDisplay] =
    useState<boolean>(false);

  const handleMainNavClick = (name: string) => {
    setJoinCommunityDisplay(false);
    if (activeNav === name) {
      setActiveNav(null);

      setActiveSubNav(null);
    } else {
      setActiveNav(name);
    }
  };

  const handleLinkClick = () => {
    closeDesktopMenu();
    setActiveNav(null);
  };

  return (
    <>
      <div className="hidden md:flex py-4 items-center z-[100] rounded-md bg-white justify-between fixed left-[40px] right-[40px] top-[10px] md:px-6 benefit2:px-7 custom:px-10">
        <div className="">
          <Image src={Logo} alt="Vigoplace Logo" className="h-10 w-auto" />
        </div>

        <div className="flex flex-2 justify-around benefit2:mx-4 custom:mx-8 lg:mx-16 xl:mx-40">
          <div className="text-theme cursor-pointer my-auto">
            <Link href="/">
              <ul>
                <li className="font-[600]">Home</li>
              </ul>
            </Link>
          </div>
          {navs.map((name, index) => {
            return (
              <ul key={index} className="">
                <li
                  onClick={() => handleMainNavClick(name.name)}
                  // onMouseEnter={() => handleMouseEnter(name.name)}
                  // onMouseLeave={handleMouseLeave}
                  className="text-heading cursor-pointer flex items-center"
                >
                  <span> {name.name}</span>
                  <span className="">
                    {activeNav === name.name ? (
                      <RiArrowDropUpLine className="text-[25px] h-full mt-[5px]" />
                    ) : (
                      <RiArrowDropDownLine className="text-[25px] h-full mt-[5px]" />
                    )}{" "}
                  </span>
                </li>
                {activeNav === name.name && (
                  <ul
                    className={`absolute md:left-[0%] benefit3:left-[5%] lg:left-[10%] lg:right-[10%] md:top-[100px] lg:top-[100px] md:right-[30%] md:w-[100%] benefit3:w-[90%] lg:w-[80%] py-[20px] rounded-[10px] flex flex-col gap-[15px] bg-[#FFFFFF] px-[20px] before:content-[''] before:absolute before:top-[-8px] before:w-[15px] before:h-[15px] before:bg-[#FFF] before:rotate-45 before:z-0 ${
                      index === 1 ? "h-[55vh]" : "h-[80vh]"
                    } ${
                      index === 0 &&
                      "md:before:right-[65%] lg:before:right-[60%]"
                    } ${index === 1 && "md:before:right-[47%]"} ${
                      index === 2 && "md:before:right-[35%]"
                    }`}
                  >
                    {name.nameSubLinks?.map((name, index) => {
                      return (
                        <div key={index} className=" flex relative gap-[16px]">
                          <li
                            onClick={() => {
                              subsubLink && subLinkIndex === index
                                ? setSubSubLink(false)
                                : setSubSubLink(true);
                              setSubLinkIndex(index);
                              handleLinkClick();
                            }}
                            onMouseEnter={() => {
                              subsubLink && subLinkIndex === index
                                ? setSubSubLink(false)
                                : setSubSubLink(true);
                              setSubLinkIndex(index);
                            }}
                            className={`flex gap-[16px] ${
                              subsubLink &&
                              subLinkIndex === index &&
                              "bg-[#FAFAFA]"
                            } cursor-pointer w-[300px] items-center `}
                          >
                            <Link
                              href={name.link}
                              className="flex gap-5 items-center"
                            >
                              <Image
                                className="w-[50px]"
                                src={name.icon}
                                alt={name.name}
                              />{" "}
                              <span className="text-[#181616] font-[600]">
                                {" "}
                                {name.name}
                              </span>
                            </Link>
                          </li>

                          {subLinkIndex === index && subsubLink && (
                            <div className="bg-[#FAFAFA] w-[350px] absolute !top-0 right-0 p-[8px] flex flex-col gap-[5px] ">
                              {name.nameSubLinks?.map((name, index) => {
                                return (
                                  <Link
                                    className="text-[#282424]"
                                    key={index}
                                    onClick={handleLinkClick}
                                    href={name.link}
                                  >
                                    {name.name}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </ul>
                )}
              </ul>
            );
          })}
        </div>

        <div className="rounded-md cursor-pointer">
          <Button variant="outline" className="py-6">
            <ul className="relative">
              <li
                onClick={() => {
                  joinCommunityDisplay
                    ? setJoinCommunityDisplay(false)
                    : setJoinCommunityDisplay(true);
                  setActiveNav(null);
                }}
                className="text-theme flex items-center"
              >
                {joinVigoPlace.name}
                {joinCommunityDisplay ? (
                  <RiArrowDropUpLine className="text-[25px] h-full" />
                ) : (
                  <RiArrowDropDownLine className="text-[25px] h-full" />
                )}
              </li>
              {joinCommunityDisplay && (
                <ul className="absolute top-[70px] shadow rounded bg-[#FFF] right-[-55px] py-[30px] px-[20px] w-[600px] grid grid-cols-2 gap-5 before:content-[''] before:absolute before:top-[-8px] before:right-[80px] before:w-[15px] before:h-[15px] before:bg-[#FFF] before:rotate-45 before:z-0">
                  {joinVigoPlace.nameSubLinks.map((name, index) => {
                    return (
                      <Link
                        href={name.link}
                        className="flex gap-5 items-center"
                        key={index}
                      >
                        <Image src={name.icon} alt={name.name} />
                        <h3 className="text-[#000000]">{name.name}</h3>
                      </Link>
                    );
                  })}
                </ul>
              )}
            </ul>
          </Button>
        </div>
      </div>
    </>
  );
};

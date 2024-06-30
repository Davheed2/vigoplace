import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

// Define TypeScript types
type NavLink = {
  name: string;
  link: string;
};

type SubNavLink = NavLink & {
  nameSubLinks?: NavLink[];
};

type MainNavLink = {
  name: string;
  nameSubLinks?: SubNavLink[];
};

export const NavItems = () => {
  const navs: MainNavLink[] = [
    {
      name: "Why Vigoplace",
      nameSubLinks: [
        {
          name: "Church Activity Management",
          link: "/church-activity",
          nameSubLinks: [
            { name: "Daily Reading Post", link: "/daily-reading-post" },
            { name: "Bible Post", link: "/bible-post" },
            { name: "Giving", link: "/giving" },
            { name: "Offering Post", link: "/offering-post" },
            { name: "Prayer Request", link: "/prayer-request" },
          ],
        },
        {
          name: "Groups/Community Activity Management",
          link: "/group-management",
          nameSubLinks: [
            { name: "Collection Post", link: "/collection-posts" },
            { name: "Family Groups", link: "/family-groups" },
            { name: "Hobby Groups", link: "/hobby-groups" },
            { name: "Study Groups", link: "/study-groups" },
            { name: "Support Groups", link: "/support-groups" },
            { name: "Networking Groups", link: "/networking-groups" },
            {
              name: "Professional Association",
              link: "/professional-association",
            },
            { name: "Alumni Groups", link: "/alumni-groups" },
            { name: "Volunteer Groups", link: "/volunteer-groups" },
            { name: "Sports Team", link: "/sports-team" },
            {
              name: "Interest-Based Communities",
              link: "/interest-based-communities",
            },
          ],
        },
        {
          name: "Ecommerce",
          link: "/e-commerce",
          nameSubLinks: [
            { name: "Marketplace", link: "/marketplace" },
            { name: "Product Posts", link: "/product-posts" },
            { name: "Service Posts", link: "/service-posts" },
            { name: "Digital Goods", link: "/digital-goods" },
          ],
        },
        {
          name: "Financial Services",
          link: "/financial-services",
          nameSubLinks: [
            { name: "Multi-Wallet System", link: "/multi-wallet-system" },
            { name: "KYC (Know Your Customer)", link: "/kyc" },
            { name: "Secure Online Banking", link: "/secure-online-banking" },
            { name: "Cardless Transaction", link: "/cardless-transaction" },
            { name: "Inter-Bank Transfers", link: "/inter-bank-transfers" },
            { name: "Wallet to Wallet", link: "/wallet-to-wallet" },
            { name: "OTP for Transfers", link: "/otp-for-transfers" },
            { name: "Transaction Receipts", link: "/transaction-receipts" },
            { name: "Transaction Statements", link: "/transaction-statements" },
            { name: "Expense Tracking", link: "/expense-tracking" },
          ],
        },
        {
          name: "Sell Digital Content",
          link: "/sell",
          nameSubLinks: [
            { name: "Channel Place", link: "/channel-place" },
            { name: "Pay to View Post", link: "/pay-to-view-post" },
            { name: "Buy", link: "/buy" },
            { name: "Rent", link: "/rent" },
            { name: "Subscription", link: "/subscription" },
          ],
        },
        {
          name: "Organize Online Contest",
          link: "/contest",
          nameSubLinks: [
            { name: "Contest Place", link: "/contest-place" },
            { name: "Contestant", link: "/contestant" },
            { name: "Paid Contests", link: "/paid-contests" },
            { name: "Free Contest", link: "/free-contest" },
          ],
        },
        {
          name: "Fundraising",
          link: "/fundraising",
          nameSubLinks: [
            { name: "Fundraising Posts", link: "/fundraising-posts" },
            { name: "Support/Donate Posts", link: "/support/donate-posts" },
          ],
        },
      ],
    },
    {
      name: "Pricing",
      nameSubLinks: [
        {
          name: "Ecommerce",
          link: "/ecommerce-pricing",
          nameSubLinks: [
            { name: "Plan A", link: "/plan-a" },
            { name: "Plan B", link: "/plan-b" },
            { name: "Plan C", link: "/plan-c" },
          ],
        },
        // Add other pricing categories as needed
      ],
    },
    {
      name: "Learn",
      nameSubLinks: [
        {
          name: "Ecommerce",
          link: "/learn-ecommerce",
          nameSubLinks: [
            { name: "Introduction", link: "/intro" },
            { name: "Advanced Topics", link: "/advanced" },
            { name: "FAQs", link: "/faqs" },
          ],
        },
        // Add other learning categories as needed
      ],
    },
    {
      name: "Join Community",
      nameSubLinks: [
        {
          name: "Community Groups",
          link: "/community-groups",
        },
        {
          name: "Discussion Forums",
          link: "/discussion-forums",
        },
        {
          name: "Meetups",
          link: "/meetups",
        },
        {
          name: "Events",
          link: "/events",
        },
      ],
    },
  ];

  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [activeSubNav, setActiveSubNav] = useState<string | null>(null);

  const handleMainNavClick = (name: string) => {
    if (activeNav === name) {
      setActiveNav(null);
      setActiveSubNav(null);
    } else {
      setActiveNav(name);
    }
  };

  return (
    <div className="px-4 pt-12 text-slate-900 rounded-[5px] bg-white overflow-y-auto max-h-[100dvh]">
      {navs.map((nav) => (
        <ul key={nav.name} className="bg-white relative flex flex-col mb-5">
          <li
            className="flex items-center justify-between cursor-pointer gap-0 w-full mb-7"
            onClick={() => handleMainNavClick(nav.name)}
          >
            <span>{nav.name}</span>
            {activeNav === nav.name ? (
              <RiArrowDropUpLine className="text-[20px] h-full" />
            ) : (
              <RiArrowDropDownLine className="text-[20px] h-full" />
            )}
          </li>
          {activeNav === nav.name && (
            <ul className="bg-slate-200 block mb-7 p-[10px] rounded-[5px]">
              {nav.nameSubLinks?.map((subLink, index) => (
                <ul key={subLink.name} className="flex flex-col mb-5">
                  <li
                    className={`flex cursor-pointer items-center justify-between gap-0 w-full mb-3 ml-1 ${
                      index === 0 && "mt-6"
                    }`}
                  >
                    {subLink.link ? (
                      <Link href={subLink.link}>{subLink.name}</Link>
                    ) : (
                      subLink.name
                    )}
                    {subLink.nameSubLinks ? (
                      activeSubNav === subLink.name ? (
                        <RiArrowDropUpLine
                          onClick={() => setActiveSubNav(null)}
                          className="text-[20px] h-full"
                        />
                      ) : (
                        <RiArrowDropDownLine
                          onClick={() => setActiveSubNav(subLink.name)}
                          className="text-[20px] h-full"
                        />
                      )
                    ) : null}
                  </li>
                  {activeSubNav === subLink.name && subLink.nameSubLinks && (
                    <ul className="flex flex-col bg-white p-[10px] rounded-[5px] mb-7">
                      {subLink.nameSubLinks.map((link, index) => (
                        <Link
                          href={link.link}
                          key={link.name}
                          className={`mb-7 ml-5 ${
                            index === 0 && "mt-6" // Adjust margin here
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </ul>
                  )}
                </ul>
              ))}
            </ul>
          )}
        </ul>
      ))}
    </div>
  );
};

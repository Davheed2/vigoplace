import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

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

interface NavItemsProps {
  closeMenu: () => void;
}

export const NavItems: React.FC<NavItemsProps> = ({ closeMenu }) => {
  const navs: MainNavLink[] = [
    {
      name: "Why Vigoplace",
      nameSubLinks: [
        {
          name: "Church Activity Management",
          link: "/church-activity",
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
          name: "Ecommerce",
          link: "/e-commerce",
          nameSubLinks: [
            { name: "Marketplace", link: "/e-commerce#marketplace" },
            { name: "Product Posts", link: "/e-commerce#product-posts" },
            { name: "Service Posts", link: "/e-commerce#service-posts" },
            { name: "Digital Goods", link: "/e-commerce#digital-goods" },
          ],
        },
        {
          name: "Financial Services",
          link: "/financial-service",
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
          name: "Sell Digital Content",
          link: "/sell-contents",
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
          name: "Market Place",
          link: "/market-place",
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
        {
          name: "Ministry Place",
          link: "/ministry-place",
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
      ],
    },
    {
      name: "Join Community",
      nameSubLinks: [
        {
          name: "Login",
          link: "https://web.vigoplace.com/signin",
        },
        {
          name: "Create Free Account",
          link: "https://web.vigoplace.com/signup",
        },
        {
          name: "Download IOS App",
          link: "https://apps.apple.com/ng/app/vigoplace/id1622191142",
        },
        {
          name: "Download Android App",
          link: "https://play.google.com/store/apps/details?id=com.vigoplace.vigoplace",
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

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div className="px-4 pt-12 text-slate-900 rounded-[5px] bg-white overflow-y-auto max-h-[100vh]">
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
                      <Link onClick={handleLinkClick} href={subLink.link}>
                        {subLink.name}
                      </Link>
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
                          onClick={handleLinkClick}
                          className={`mb-7 ml-5 ${index === 0 && "mt-6"}`}
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

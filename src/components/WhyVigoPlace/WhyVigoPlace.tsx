import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

export const WhyVigoPlace = () => {

    const NavLink = ['Why Vigoplace', "Pricing", "Learn", "Join Our Community"]


    const navs = [
        {
            name: "Vigo Place",
            nameSubLinks: [
                {
                    name: "Church Activity Management",
                    nameSubLinks: [
                        {
                        name: "Daily Reading Post",
                        link: "Daily-Reading-Post"
                        },
                        {
                            name: "Bible Post",
                            link: "Bible-post"
                        },
                        {
                            name: "Giving",
                            link: "Giving"
                            },
                            {
                                name: "Offering Post",
                                link: "Offering-post"
                        },
                        {
                            name: "Prayer Request",
                            link: "Prayer-request"
                        },
                    ]
                },
                {
                    name: "Groups/Community Activity Management",
                    nameSubLinks: [
                        {
                        name: "Collection Post",
                        link: "Collection-posts"
                        },
                        {
                            name: "Family groups",
                            link: "Family-groups"
                        },
                           {
                        name: "Hobby groups",
                        link: "Hobby-groups"
                        },
                        {
                            name: "Study groups",
                            link: "Study-groups"
                        },
                        {
                            name: "Suport Groups",
                            link: "Suppor-groups"
                            },
                            {
                                name: "networking groups",
                                link: "networking-groups"
                            },
                               {
                            name: "Proffesional Association",
                            link: "Proffesional-association"
                            },
                            {
                                name: "Alumni groups",
                                link: "Alumni-groups"
                        },
                        {
                            name: "Voluneer groups",
                            link: "Voluneer-groups"
                        },
                           {
                        name: "Sports team",
                        link: "Sports-team"
                        },
                        {
                            name: "Interest-Based communities",
                            link: "Interest-Based-communities"
                        },
                    ]
                },
                {
                    name: "Ecommerce",
                    nameSubLinks: [
                        {
                        name: "Marketplace",
                        link: "Marketplace"
                        },
                        {
                            name: "Product Posts",
                            link: "Product-posts"
                        },
                        {
                            name: "Service Posts",
                            link: "Service-posts"
                            },
                            {
                                name: "Digital Goods",
                                link: "Digital-goods"
                            },
                    ]
                },
                {
                    name: "Financial Services",
                    nameSubLinks: [
                        {
                        name: "Multi-Wallet System",
                        link: "/multi-wallet-system"
                        },
                        {
                            name: "KYC(Know Your Customer)",
                            link: "/kyc"
                        },
                        {
                            name: "Secure Online Banking",
                            link: "/secure-online-banking"
                            },
                            {
                                name: "Cardless Transaction",
                                link: "/cardless-transaction"
                        },
                        {
                            name: "Inter-Bank Transfers",
                            link: "/inter-bank-Transfers"
                            },
                            {
                                name: "Wallet To Wallet",
                                link: "/wallet-to-wallet"
                            },
                            {
                                name: "OTP For Transfers",
                                link: "/OTP-for-transfers"
                                },
                                {
                                    name: "Transaction Receipts",
                                    link: "/transaction-receipts"
                        },
                        {
                            name: "Transaction statements",
                            link: "/transaction-statements"
                            },
                            {
                                name: "Expense Tracking",
                                link: "/Expense-tracking"
                            },
                    ]
                },
                {
                    name: "sell Digital Content",
                    nameSubLinks: [
                        {
                        name: "Channel Place",
                        link: "/channel-place"
                        },
                        {
                            name: "Pay to view post",
                            link: "/Pay-to-view-post"
                        },
                        {
                            name: "Buy",
                            link: "/buy"
                            },
                            {
                                name: "Rent",
                                link: "/rent"
                        },
                        {
                            name: "Subscription",
                            link: "/subscription"
                            },
                    ]
                },
                {
                    name: "Organize Online Contest",
                    nameSubLinks: [
                        {
                        name: "Contest Place",
                        link: "/contest-place"
                        },
                        {
                            name: "Contestant",
                            link: "/contestant"
                        },
                        {
                            name: "Paid Contests",
                            link: "/paid-contests"
                            },
                            {
                                name: "Free Contest",
                                link: "/free-contest"
                        },
                    ]
                },
                {
                    name: "Fundraising",
                    nameSubLinks: [
                        {
                        name: "Fundraising Posts",
                        link: "/fundraising-posts"
                        },
                        {
                            name: "Support/Donate Posts",
                            link: "/support/donate-posts"
                        }
                    ]
                },
            ]
        },
        {
            name: "Pricing",
            nameSubLinks: [
                {
                    name: "Ecommerce",
                    nameSubLinks: [
                        {
                        name: "Senior Man",
                        link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                            },
                    ]
}
            ]
        },
        {
            name: "Learn",
            nameSubLinks: [
                {
                    name: "Ecommerce",
                    nameSubLinks: [
                        {
                        name: "Senior Man",
                        link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                            },
                    ]
}
            ]
        },
        {
            name: "Join Community",
            nameSubLinks: [
                {
                    name: "Ecommerce",
                    nameSubLinks: [
                        {
                        name: "Senior Man",
                        link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                        },
                        {
                            name: "Senior Man",
                            link: "senior"
                            },
                    ]
}
            ]
        },
    ]
  
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [hoveredSubNav, setHoveredSubNav] = useState<string | null>(null);
    console.log("sub navigation", hoveredSubNav)

    return (
        <div className="px-[20px] py-[50px] text-slate-900 rounded-[5px] bg-white">
            {navs.map(nav => (
                <ul
                    key={nav.name}
                    onMouseOver={() => setHoveredNav(nav.name)}
                    onMouseOut={() => {
                        setHoveredNav(null);
                        setHoveredSubNav(null);
                    }}
                    className="bg-white relative flex flex-col"
                >
                    <li className="flex items-center cursor-pointer gap-0">
                        {nav.name}
                        {hoveredNav === nav.name ? (
                            <RiArrowDropUpLine className="text-[20px]" />
                        ) : (
                            <RiArrowDropDownLine className="text-[20px]" />
                        )}
                    </li>
                    {hoveredNav === nav.name && (
                        <ul className="bg-slate-200 block mb-[30px] p-[10px]">
                            {nav.nameSubLinks.map(subLink => (
                                <ul
                                    key={subLink.name}
                                    onMouseOver={() => setHoveredSubNav(subLink.name)}
                                    onMouseOut={() => setHoveredSubNav(null)}
                                    className="flex flex-col"
                                >
                                    <li className="flex cursor-pointer items-center gap-0">
                                        {subLink.name}
                                        {hoveredSubNav === subLink.name ? (
                                            <RiArrowDropUpLine className="text-[20px]" />
                                        ) : (
                                            <RiArrowDropDownLine className="text-[20px]" />
                                        )}
                                    </li>
                                    {hoveredSubNav === subLink.name && (
                                        <ul className="flex block mb-[15px] flex-col bg-white p-[10px] rounded-[5px]">
                                            {subLink.nameSubLinks.map(link => (
                                                <Link href={link.link} key={link.name}>
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
}
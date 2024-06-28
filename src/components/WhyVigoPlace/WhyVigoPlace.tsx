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
                    ]
                },
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
                    ]
                },
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
                    ]
}
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

    return (
        <div className="px-[20px] py-[50px] text-slate-900 rounded-[5px] bg-white">
            {navs.map((nav: any) => (
                <ul
                    key={nav.name}
                    onMouseOver={() => setHoveredNav(nav.name)}
                    onMouseOut={() => setHoveredNav(null)}
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
                            {nav.nameSubLinks.map((subLink: any) => (
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
                                            {subLink.nameSubLinks.map((link : any) => (
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
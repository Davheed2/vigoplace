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
  
//     return <>
//         <div className="px-[20px] py-[50px] text-slate-900  rounded-[5px] bg-white">
//             {/* <div>
//                 {
//                     NavLink.map(link => {
//                         return <div key={link} className="text-slate-900 flex flex-col gap-5">
//                           <div className="flex items-center gap-0">  <p className="">{link}</p><RiArrowDropDownLine/> <RiArrowDropUpLine/></div>
//                             <div className="bg-slate-200 rounded-[5px]  p-[10px]">
//                                 <div >
//                                <div className="flex items-center gap-0"> <h1>Ecommerce</h1> <RiArrowDropDownLine/> <RiArrowDropUpLine/></div>
//                                     <ul className="bg-white p-[10px] rounded-[5px]">
//                                         <li>
//                                             Man
//                                         </li>
//                                         <li>
//                                             man
//                                         </li>
//                                         <li>man</li>
//                                    </ul>
        
//                               </div>
//                             </div>
//                         </div>
//                     })
//                 }
// </div> */}
//             {
//                 navs.map(nav => {
//                     return <ul key={nav.name}
//                         onMouseOut={() => nav.name && setSubLinkDisplay('hidden') }
//                         onMouseOver={() => nav.name && setSubLinkDisplay("block")}
//                         className="bg-white relative flex flex-col">
//                         <li className="flex items-center cursor-pointer gap-0">
//                             {nav.name}
//                             {subLinkDisplay === "hidden" ?
//                             <RiArrowDropDownLine className="text-[20px]"/> :
//                             <RiArrowDropUpLine className="text-[20px]"/>
//                             }
//                         </li>
//                         <ul className={`bg-slate-200 ${subLinkDisplay} mb-[30px] p-[10px] `}>
//                             {
//                                 nav.nameSubLinks.map(subLink => {
//                                     return <ul key={subLink.name} style={{
//                                         transition: "ease-in-out",
//                                         animationDuration: "1s"
//                                     }}
//                                     onMouseOut={() => setSubSubLinkDisplay('hidden') }
//                                     onMouseOver={() => setSubSubLinkDisplay("block")}
//                                         className={`flex  flex-col`}
//                                     >
//                                         <li className="flex cursor-pointer items-center gap-0">
//                                             {subLink.name}
//                                             { subSubLinkDisplay === "hidden"?
//                                             <RiArrowDropDownLine className="text-[20px]"/> :
//                                             <RiArrowDropUpLine className="text-[20px]" />
//                                             }
//                                         </li>
//                                         <ul className={`flex ${subSubLinkDisplay} mb-[15px] flex-col bg-white p-[10px] rounded-[5px]`}>
//                                             {
//                                                 subLink.nameSubLinks.map(link => {
//                                                     return (
//                                                         <Link href={link.link} key={link.name}>{link.name}</Link>
//                                                     )
//                                                 })
//                                             }
//                                         </ul>
//                                    </ul>
//                                 })
//                             }
//                         </ul>
//                     </ul>
//                 })
//             }
//         </div>
    //     </>
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [hoveredSubNav, setHoveredSubNav] = useState<string | null>(null);

    return (
        <div className="px-[20px] py-[50px] text-slate-900 rounded-[5px] bg-white">
            {navs.map(nav => (
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
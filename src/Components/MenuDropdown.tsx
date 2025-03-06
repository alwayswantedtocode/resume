
import React from "react";
import Link from "next/link";
import useMenuNavigate from "@/hooks/useMenuNavigate";


const MenuDropDown = ({ open }: { open :boolean}) => {



    return (
        <aside
            className={`fixed top-[5rem] right-0 w-full h-full  z-[100] grid place-items-center transition-all duration-500 ease-in-out transform scale-100 bg-black bg-opacity-30 
             ${open ? "visible" : "invisible"} `}
        >
            {/* lg:hidden ${isMenuopened ? "visible" : "invisible" */}
            <div
                className={`h-[100%] w-[66%] top-[0rem] left-0 fixed bg-black transition-all duration-500 ease-in-out 
                    ${open ? "visible" : "invisible"}`}
            >
                {/* lg:hidden ${isMenuopened ? "translate-y-0" : "-translate-y-full" */}
                {/* Menu */}
                <div className="w-full flex border-2 border-red-700  h-max ">
                    <ul className="flex flex-col px-[1rem] gap-[30px]">

                        <Link href="#Home" ><li className="">Home</li></Link>


                        <Link href="#Tech-Stack" ><li className="">Tech Stack </li></Link>


                        <Link href="#Projects" ><li className="">Projects</li></Link>


                        <Link href="#About-me" > <li className="">About me</li></Link>

                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default MenuDropDown;




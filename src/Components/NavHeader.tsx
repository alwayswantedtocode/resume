"use client"
import useMenuNavigate from "@/hooks/useMenuNavigate";
import Link from "next/link";
import React from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import MenuDropDown from "./MenuDropdown";
const Navbar = () => {
  const {
    isMenuopened,
    setIsMenuopened,
    toggleMenu,
    closeMenu
  } = useMenuNavigate()
  return (
    <header className="w-full h-[4rem] flex justify-center items-center text-slate-100 relative">
      <nav className="flex w-[90%] h-[r3rem] justify-between items-center">

        <div className="flex items-center gap-[20px] border-2 border-red-800">
          <div className="flex w-max lg:hidden cursor-pointer" onClick={toggleMenu}>
            {isMenuopened ? <IoCloseSharp /> : <IoMenuSharp />}
          </div>
          {/* logo */}
          <div className="w-max h-max flex items-center justify-center">
            <span className=" font-semibold">Osecodes</span>
          </div>
        </div>

        {/* Menu */}
        <div className="hidden w-max h-max lg:flex">
          <ul className="flex  px-[1rem] gap-[30px]">

            <Link href="#Home" ><li className="">Home</li></Link>


            <Link href="#Tech-Stack" ><li className="">Tech Stack </li></Link>


            <Link href="#Projects" ><li className="">Projects</li></Link>


            <Link href="#About-me" > <li className="">About me</li></Link>

          </ul>
        </div>
        {/* Contact */}
        <div className="">
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-[#c07a5c] text-gray-800 rounded-lg shadow-lg hover:bg-[#f2d2c5] transition-all duration-300 hover:shadow-xl"
          >

            Contact Me
          </Link>
        </div>

      </nav>
      <MenuDropDown open={isMenuopened} />

    </header>
  );
};

export default Navbar;



// "use client"
// import useMenuNavigate from "@/hooks/useMenuNavigate";
// import Link from "next/link";
// import React from "react";

// const Navbar = () => {

//   const { homeRef,
//     stackRef,
//     projectRef,
//     aboutRef,
//     scrollToSection } = useMenuNavigate()
//   return (
//     <header className="w-full h-[4rem] flex justify-center items-center">
//       <nav className="flex w-[90%] h-[r3rem] justify-between items-center">
//         {/* logo */}
//         <div className="w-max h-max flex items-center justify-center">
//           <span className=" font-semibold">AWC Portfolio</span>
//         </div>
//         {/* Menu */}
//         <div className="hidden w-max h-max sm:flex">
//           <ul className="flex border-2 border-green-700 px-[1rem] gap-[30px]">
//             <li className="">
//               <button className="border-none bg-transparent" onClick={() => scrollToSection(homeRef)}>Home</button>
//             </li>
//             <li className="">
//               <button className="border-none bg-transparent" onClick={() => scrollToSection(stackRef)}> Tech Stack</button>
//             </li>
//             <li className="">
//               <button className="border-none bg-transparent" onClick={() => scrollToSection(projectRef)}>Projects</button>
//             </li>
//             <li className="">
//               <button className="border-none bg-transparent" onClick={() => scrollToSection(aboutRef)}>About me</button>
//             </li>
//           </ul>
//         </div>
//         {/* Contact */}
//         <div className="">
//           <button
//             type="button"
//             className="border-2 border-red-200 rounded-[0.2rem] p-[0.5rem]"
//           >
//             Contact me
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

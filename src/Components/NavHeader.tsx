"use client"
import useMenuNavigate from "@/hooks/useMenuNavigate";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import MenuDropDown from "./MenuDropdown";
const Navbar = () => {
  const {
    isMenuopened,
    setIsMenuopened,
    toggleMenu,
    closeMenu
  } = useMenuNavigate()

  // Add overflow hidden to body when menu is open
  useEffect(() => {
    if (isMenuopened) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuopened]);

  return (
    <header className="w-full h-[5rem] flex justify-center items-center text-slate-100 sticky top-0 z-20 bg-gray-900">
      <nav className="flex w-[90%] h-[3rem] justify-between items-center">

        <div className="flex items-center gap-[20px]">
          <div className="flex w-max lg:hidden cursor-pointer" onClick={toggleMenu}>
            {isMenuopened ? <IoCloseSharp className="text-[2rem]" /> : <IoMenuSharp className="text-[2rem]" />}
          </div>
          {/* logo */}
          <div className="w-max h-max flex items-center justify-center">
            <Link href="/" >
              <span className="md:text-[1.3rem] font-semibold hover:text-[#c07a5c]">Osecodes</span>
            </Link>

          </div>
        </div>

        {/* Menu */}
        <div className="hidden w-max h-max lg:flex">
          <ul className="flex  px-[1rem] gap-[30px]">

            <Link href="#Home" ><li className="hover:text-[#c07a5c] ">Home</li></Link>


            <Link href="#Tech-Stack" ><li className="hover:text-[#c07a5c] ">Tech Stack </li></Link>


            <Link href="#Projects" ><li className="hover:text-[#c07a5c] ">Projects</li></Link>


            <Link href="#About-me" > <li className="hover:text-[#c07a5c] ">About me</li></Link>

          </ul>
        </div>
        {/* Contact */}
        <div className="">
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 px-4 py-2 md:px-8 md:py-3 bg-[#c07a5c] text-gray-800 rounded-lg shadow-lg hover:bg-[#f2d2c5] transition-all duration-300 hover:shadow-xl"
          >

            Contact Me
          </Link>
        </div>

      </nav>
      <MenuDropDown open={isMenuopened} close={closeMenu} />

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

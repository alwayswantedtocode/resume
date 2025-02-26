import Link from "next/link";
import React from "react";

const Navbar = () => {
  
  return (
    <header className="w-full h-[4rem] flex justify-center items-center">
      <nav className="flex w-[90%] h-[r3rem] justify-between items-center">
        {/* logo */}
        <div className="w-max h-max flex items-center justify-center">
          <span className=" font-semibold">AWC Portfolio</span>
        </div>
        {/* Menu */}
        <div className="hidden w-max h-max sm:flex">
          <ul className="flex border-2 border-green-700 px-[1rem] gap-[30px]">

            <Link href="#Home" ><li className="">Home</li></Link>


            <Link href="#Tech-Stack" ><li className="">Tech Stack </li></Link>


            <Link href="#Projects" ><li className="">Projects</li></Link>


            <Link href="#About-me" > <li className="">About me</li></Link>

          </ul>
        </div>
        {/* Contact */}
        <div className="">
          <button
            type="button"
            className="border-2 border-red-200 rounded-[0.2rem] p-[0.5rem]"
          >
            Contact me
          </button>
        </div>
      </nav>
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

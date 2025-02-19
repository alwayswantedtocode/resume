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
            <li className="">About me</li>
            <li className="">Portfolio</li>
            <li className="">Education</li>
            <li className=""></li>
          </ul>
        </div>
        {/* Contact */}
        <div className="">
          <button type="button" className="border-2 border-red-200 rounded-[0.2rem] p-[0.5rem]">
            Contact me
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [fixScroll, setFixScroll] = useState(false);

  const fixedScroll = () => {
    if (window.scrollY >= 20) {
      setFixScroll(true);
    } else {
      setFixScroll(false);
    }
  };

  window.addEventListener("scroll", fixedScroll);
  return (
    <div
      className={
        fixScroll
          ? "sm:bg-white fixed w-full z-20 md:h-fit md:bg-white md:duration-300 shadow-custome"
          : "fixed w-full z-10 md:duration-300"
      }
    >
      <div className="sm:flex sm:justify-between sm:items-end sm:px-2 sm:py-5 md:px-[50px] lg:px-[100px]">
        <div>
          <h1 className="text-4xl font-['McLaren'] text-[#463C74]">
            Book<span className="text-[#B4D51E]">List</span>
          </h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search book...."
            className="border-b border-[#848484] outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

export const Header = () => {
  return (
    <div className="w-full">
      <nav className="flex justify-between py-9 px-14 text-base">
        <ul className="w-72 hidden md:flex list-none text-left pl-0">
          <a href="#about">
            <li key="about" className="link-underline h-fit mr-12 ">
              About
            </li>
          </a>
          <a href="#portfolio">
            <li key="portfolio" className="link-underline">Portfolio</li>
          </a>
          
        </ul>
        <h1 className="w-full md:w-72 m-0 text-center text-5xl text-black tracking-wider">
          samJam
        </h1>
        {/* download button for file */}
        <p className="w-72 text-right hidden md:block"><span className="link-underline">Open CV</span></p>
      </nav>
    </div>
  );
};

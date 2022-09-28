import React from "react";

export const Header = () => {
  return (
    <div className="w-full">
      <nav className="flex justify-between py-9 px-14 text-base">
        <ul className="w-72 flex list-none text-left pl-0">
          <li
            key="about"
            className=" h-fit mr-12"
            onClick={() => {
              document.getElementById("about")?.scrollTo(0, 0);
            }}
          >
            About
          </li>
          <li key="portfolio">Portfolio</li>
        </ul>
        <h1 className="w-72 m-0 text-center text-5xl text-black tracking-wider">
          samJam
        </h1>
        {/* download button for file */}
        <p className="w-72 text-right">Open CV</p>
      </nav>
    </div>
  );
};

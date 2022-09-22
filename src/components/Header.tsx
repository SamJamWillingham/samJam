import React from "react";

export const Header = () => {
  return (
    <div className="w-full">
      <nav className="flex justify-between py-9 px-14 text-base">
        <ul className="w-72 flex list-none text-left pl-0">
          <li
            className=" h-fit mr-12"
            onClick={() => {
              document.getElementById("about")?.scrollTo(0, 0);
            }}
          >
            About
          </li>
          <li>Portfolio</li>
        </ul>
        <h1 className="w-72 m-0 text-center font-kinkOmite text-6xl text-lightorange tracking-wider">
          samjam
        </h1>
        {/* download button for file */}
        <p className="w-72 text-right">Open CV</p>
      </nav>
    </div>
  );
};

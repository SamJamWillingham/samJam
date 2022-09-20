import React from "react";
import cartoonPortrait from "../assets/colorPortrait.jpg"

export const Header = () => {
  return (
    <><div className="header-wrapper">
      <nav>
        <ul className="nav-child">
          {/* add #'s and scrollTo the headers */}
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
        </ul>
        <h1 className="nav-child">samjam</h1>
        {/* download button for file */}
        <p className="nav-child">Download CV</p>
      </nav>
    </div>
    <div className="avatar-wrapper">
      <img src={cartoonPortrait} alt="sam avatar" />
    </div>
    </>
    
  );
};

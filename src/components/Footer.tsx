import React from "react";
import github from "../assets/github.svg";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";

export const Footer = () => {
  return (
    <div className="h-max lg:h-60 bg-biege bottom-0 mt-3 w-full pt-6 lg:pt-10">
      <h1 className="w-72 my-0 mx-auto p-4 text-center text-5xl text-black tracking-wider">
        samJam
      </h1>
      <h2 className="text-2xl leading-9 text-center">Sam Fields Willingham</h2>
      <div className="flex justify-around max-w-xs my-0 mx-auto">
        <a href="https://github.com/SamJamWillingham">
          <img
            src={github}
            alt="github link"
            width={24.22}
            height={23.61}
            className="m-5"
          />
        </a>
        <a href="https://www.instagram.com/samjamwillingham/?hl=en">
          <img
            src={insta}
            alt="github link"
            width={24.22}
            height={23.61}
            className="m-5"
          />
        </a>
        <a href="https://www.linkedin.com/in/samantha-willingham-79576a1a8/">
          <img
            src={linkedin}
            alt="github link"
            width={24.22}
            height={23.61}
            className="m-5"
          />
        </a>
      </div>
      <div className="text-center m-4 mt-0">
        <p>
          This website was designed and coded by me! The portrait/avatar was
          made by HungrydamyArt,{" "}
          <a
            className="font-normal underline"
            href="https://www.etsy.com/de/shop/HungrydamyArt"
          >
            follow them on Etsy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

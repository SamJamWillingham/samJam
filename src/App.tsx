import React from "react";
import { Header } from "./components/Header";
import cartoonPortrait from "./assets/colorPortrait.jpg";
import paintBucket from "./assets/paint-bucket.svg";
import kanban from "./assets/kanban.svg";
import git from "./assets/git.svg";
import figma from "./assets/figma-1.svg";
import twig from "./assets/twig.png";
import { AboutCard } from "./components/AboutCard";
import {
  feDevCertifications,
  feDevLanguages,
  feDevTools,
  pcTools,
  poCertifications,
  uxDesignerGoals,
  uxDesignerTools,
} from "./content/about";
import sketchPortrait from "./assets/sketchPortrait2.jpeg";
import { Footer } from "./components/Footer";
import { PortfolioCard } from "./components/PortfolioCard";
import { Tag } from "./components/Tag";
import {
  newPortfolioDescr,
  tarotCardAppDescr,
  vahterusWebDescr,
  weatherAppDescr,
} from "./content/portfolio";

function App() {

  return (
    <div id="App" className="overflow-y-auto">
      <div className="absolute bg-biege w-full h-[450px] z-[-1]"></div>
      <Header />
      <div>
        <div className="block max-w-xs my-0 mx-auto">
          <img
            className="rounded-[50%] mt-24"
            src={cartoonPortrait}
            alt="sam avatar"
          />
        </div>
        <h2
          className="text-2xl leading-9 pt-16 text-center mx-4 md:mx-0"
          id="about"
        >
          I am Sam Fields Willingham.
          <br />I am a people-first software engineer and UX designer.
        </h2>
        <div className="flex justify-center pt-16 md:hidden">
          <button className="border border-medorange rounded-md text-2xl font-normal text-medorange shadow-orangey p-6 hover:bg-medorange hover:text-white hover:transition-all hover:ease-out hover:duration-300 active:shadow-inner">
            <a
              href="https://docs.google.com/document/d/1pCKlm7vciNW4CGUotjASlV9emqTN7yoFvUrBOadxYwQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Open CV
            </a>
          </button>
        </div>
        <div className="block lg:flex lg:justify-evenly mt-28 text-center">
          <div className="w-96 my-0 mx-auto">
            <img
              src={kanban}
              alt="paint brush"
              width={30}
              height={30}
              className="my-0 mx-auto mb-11"
            />
            <h3 className="text-2xl m-2">Scrum Product Owner</h3>
            <AboutCard>
              <p className="text-darkorange pb-5">Certification</p>
              {poCertifications.map((val) => (
                <p className="pb-5">{val}</p>
              ))}
              <p className="text-darkorange pb-5">Tools</p>
              <div className="grid grid-cols-3 justify-between">
                {pcTools.map((val) => (
                  <p className="pb-5">{val}</p>
                ))}
              </div>
            </AboutCard>
          </div>
          <div className="w-96 my-0 mx-auto ">
            <img
              src={git}
              alt="paint brush"
              width={30}
              height={30}
              className="my-0 mx-auto mb-11"
            />
            <h3 className="text-2xl m-2">Software Engineer</h3>
            <AboutCard>
              <p className="text-darkorange pb-5">Languages</p>
              <div className="grid grid-cols-3">
                {feDevLanguages.map((val) => (
                  <p className="pb-5">{val}</p>
                ))}
              </div>
              <p className="text-darkorange pb-5">Tools</p>
              <div className="grid grid-cols-3">
                {feDevTools.map((val) => (
                  <p className="pb-5">{val}</p>
                ))}
              </div>
              <p className="text-darkorange pb-5">Certifications</p>
              {feDevCertifications.map((val) => (
                <p className="pb-5">{val}</p>
              ))}
            </AboutCard>
          </div>
          <div className="w-96 my-0 mx-auto ">
            <img
              src={paintBucket}
              alt="paint brush"
              width={30}
              height={30}
              className="my-0 mx-auto mb-11"
            />
            <h3 className="text-2xl m-2">UX Designer</h3>
            <AboutCard>
              <p className="text-darkorange pb-5">Tools</p>
              <div className="grid grid-cols-3">
                {uxDesignerTools.map((val) => (
                  <p className="pb-5">{val}</p>
                ))}
              </div>
              <p className="text-darkorange pb-5">Goals</p>
              {uxDesignerGoals.map((val) => (
                <p className="pb-5">{val}</p>
              ))}
            </AboutCard>
          </div>
        </div>

        {/* Portfolio */}

        <h3 className="pt-28 text-3xl m-2 text-center" id="portfolio">
          Portfolio
        </h3>
        <div className="lg:grid lg:grid-cols-2 max-w-[90%] ipad:max-w-[100%] lg:max-w-[80%] my-0 mx-auto">
          <PortfolioCard>
            <h3 className="text-2xl">New Portfolio Website</h3>
            <div className="flex w-[70%] text-left">
              <Tag type="ux">Figma</Tag>
              <Tag type="front-end">React</Tag>
              <Tag type="front-end">Tailwind</Tag>
              <Tag type="front-end">Typescript</Tag>
              <Tag type="product-owner">ClickUp</Tag>
            </div>
            <div className="pt-2 pr-2 pb-2 flex">
              <img src={figma} alt="figma logo" width={50} height={100} />
              <p className="pl-4">{newPortfolioDescr}</p>
            </div>
            <div className="mt-2">
              <a
                href="https://www.figma.com/file/4ax0Cx7l6ly4e08VpnZIw3/2022-SamJam?node-id=19%3A18"
                target="_blank"
                rel="noreferrer"
                className="px-2 border-r-2 underline uppercase"
              >
                Figma designs
              </a>
              <a
                href="https://github.com/SamJamWillingham/samJam"
                target="_blank"
                rel="noreferrer"
                className="px-2 underline uppercase"
              >
                source code
              </a>
            </div>
          </PortfolioCard>
          <PortfolioCard>
            <h3 className="text-2xl">Vahterus.com</h3>
            <div className="flex w-[70%] text-left">
              <Tag type="front-end">Twig</Tag>
              <Tag type="front-end">NextJS</Tag>
              <Tag type="product-owner">Trello</Tag>
              <Tag type="ux">Figma</Tag>
              <Tag type="product-owner">ClickUp</Tag>
            </div>
            <div className="pt-2 pr-2 pb-2 flex">
              <img src={twig} alt="figma logo" width={80} height={100} />
              <p className="pl-4">{vahterusWebDescr}</p>
            </div>
            <div className="mt-2">
              <a
                href="https://www.vahterus.com"
                target="_blank"
                rel="noreferrer"
                className="px-2 underline uppercase"
              >
                Website
              </a>
            </div>
          </PortfolioCard>
          <PortfolioCard>
            <h3 className="text-2xl">Weather App</h3>
            <div className="flex w-[100%] text-left">
              <Tag type="front-end">React</Tag>
              <Tag type="front-end">Bootstrap</Tag>
              <Tag type="front-end">Weather API</Tag>
              <Tag type="ux">Google Fonts</Tag>
              <Tag type="ux">Font Awesome</Tag>
            </div>
            <div className="pt-2 pr-2 pb-2 flex">
              {/* <img src={reactIcon} alt="figma logo"  /> */}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width={80}
                height={100}
                alt="react icon"
              />

              <p className="pl-4">{weatherAppDescr}</p>
            </div>
            <div className="mt-2">
              <a
                href="https://github.com/SamJamWillingham/Weather-App-SheCodesPlus"
                target="_blank"
                rel="noreferrer"
                className="px-2 border-r-2 underline uppercase"
              >
                source code
              </a>
              <a
                href="https://clever-hugle-333d69.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="px-2 underline uppercase"
              >
                website
              </a>
            </div>
          </PortfolioCard>
          <PortfolioCard>
            <h3 className="text-2xl">Tarot Card App</h3>
            <div className="flex w-[70%] text-left">
              <Tag type="ux">Figma</Tag>
              <Tag type="front-end">NextJS</Tag>
              <Tag type="front-end">Tailwind</Tag>
              <Tag type="front-end">Typescript</Tag>
              <Tag type="product-owner">ClickUp</Tag>
            </div>
            <div className="pt-2 pr-2 pb-2 flex">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                alt="nextJs icon"
                width={80}
                height={100}
              />
              <p className="pl-4">{tarotCardAppDescr}</p>
            </div>
            <div className="mt-2">
              <a
                href="https://github.com/SamJamWillingham/Tarot-Card-Drawer"
                target="_blank"
                rel="noreferrer"
                className="px-2 border-r-2 underline uppercase"
              >
                original source code
              </a>
              <a
                href="https://ecstatic-leakey-e874b0.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="px-2 border-r-2 underline uppercase"
              >
                website
              </a>
              <a
                href="https://www.figma.com/file/0JNnCfgTl9bpxpMCazfCwn/Tarot-redesign?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
                className="px-2 underline uppercase"
              >
                revamped figma designs
              </a>
            </div>
          </PortfolioCard>
        </div>
        {/* Download CV button */}
        <div className="flex justify-evenly mt-28">
          <img
            src={sketchPortrait}
            alt="sketch"
            className=" w-[180px] sm:w-[260px] md:w-[400px]"
          />
          <button className="w-60 sm:w-64 md:w-96 h-fit self-center border border-medorange rounded-md text-3xl md:text-4xl font-normal text-medorange shadow-orangey py-4 md:py-6 hover:bg-medorange hover:text-white hover:transition-all hover:ease-out hover:duration-300 active:shadow-inner">
            <a
              href="https://docs.google.com/document/d/1pCKlm7vciNW4CGUotjASlV9emqTN7yoFvUrBOadxYwQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Open CV
            </a>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Header } from "./components/Header";
import cartoonPortrait from "./assets/colorPortrait.jpg";
import paintBucket from "./assets/paint-bucket.svg";
import kanban from "./assets/kanban.svg";
import git from "./assets/git.svg";
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
import sketchPortrait from "./assets/sketchPortrait2.jpeg"
import { Footer } from "./components/Footer";

function App() {
  const [isAboutCardVisible, setIsAboutCardVisible] = React.useState(false);

  const handleScroll = (e: any) => {
    const y = window.scrollY;
    console.log("listening", y);
    if (y > 50) {
      setIsAboutCardVisible(true);
    } else {
      setIsAboutCardVisible(false);
    }
  };

  return (
    <div id="App" onMouseMove={handleScroll}>
      <div className="absolute bg-biege w-full h-[450px] z-[-1]"></div>
      <Header />
      <div id="about">
        <div className="block max-w-xs my-0 mx-auto">
          <img
            className="rounded-[50%] mt-24"
            src={cartoonPortrait}
            alt="sam avatar"
          />
        </div>
        <h2 className="text-2xl leading-9 mt-16 text-center">
          I am Sam Fields Willingham.
          <br />I am a people-first software engineer and designer.
        </h2>
        <div className="flex justify-evenly mt-28 text-center">
          <div className="w-96">
            <img
              src={kanban}
              alt="paint brush"
              width={30}
              height={30}
              className="my-0 mx-auto mb-11"
            />
            <h3 className="text-2xl m-2">Scrum Product Owner</h3>
            <AboutCard isAboutCardVisible={isAboutCardVisible}>
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
          <div className="w-96">
            <img
              src={git}
              alt="paint brush"
              width={30}
              height={30}
              className="my-0 mx-auto mb-11"
            />
            <h3 className="text-2xl m-2">Software Engineer</h3>
            <AboutCard isAboutCardVisible={isAboutCardVisible}>
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
          <div className="w-96">
            <img
              src={paintBucket}
              alt="paint brush"
              width={30}
              height={30}
              className="my-0 mx-auto mb-11"
            />
            <h3 className="text-2xl m-2">UX Designer</h3>
            <AboutCard isAboutCardVisible={isAboutCardVisible}>
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
        <div className="h-10 mt-28">
          <h3 className="text-2xl m-2 text-center">Samples</h3>
        </div>
        {/* Download CV button */}
        <div className="flex justify-evenly mt-28">
          <img src={sketchPortrait} alt="sketch" width={400} />
          <button className="w-96 h-fit self-center border border-medorange rounded-md text-4xl font-normal text-medorange py-6 hover:bg-medorange hover:text-white hover:transition-all hover:ease-out hover:duration-300 active:shadow-inner">
            <a href="https://docs.google.com/document/d/1pCKlm7vciNW4CGUotjASlV9emqTN7yoFvUrBOadxYwQ/edit?usp=sharing" target="_blank" rel='noreferrer'>
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

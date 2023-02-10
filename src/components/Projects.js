import { CForCoding, LitLites, MCalculator, WeatherWebApp} from "../data";
import gsap, { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project_container",
        start: "-230px top",
        // scrub: 1,
        stagger: 0.1,
        // markers: true,
        scrub: true,
        ease: "easeOut",
      },
    });
    tl.fromTo(
      ".container",
      {
        // opacity: 0,
        // stagger: 0.2,
        scale: ".5",
      },
      {
        // duration: 1,
        stagger: 0.2,
        // opacity: 1,
        scale: "1",
      }
    );
    tl.to("h3,span", { opacity: 1, duration: 0.3 });
  }, []);
  return (
    <div className="project_container">
      <h2>Projects</h2>
      <div className="trigger">
        <ProjectDetails prop={CForCoding} />
      </div>
      <div className="trigger">
        <ProjectDetails isReverse={true} prop={LitLites} />
      </div>
      <div className="trigger">
        <ProjectDetails prop={MCalculator} />
      </div>
      <div className="trigger">
        <ProjectDetails isReverse={true} prop={WeatherWebApp} />
      </div>
      <div className="buo">
        <a href="https://github.com/manish2645" target="_blank">
          <button className="contact-btn" type="submit">
            More Projects &rarr;
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;

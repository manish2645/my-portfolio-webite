import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FcMultipleSmartphones } from "react-icons/fc";
import { GiSpiderWeb, GiNinjaHeroicStance } from "react-icons/gi";

export default function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "-100px top",
        // scrub: 1,
        // markers: true,
        // scrub: 0.001,
        ease: "Power1.inOut",
      },
    });
    tl.to(".card", {
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      width: "auto",
    });
    tl.to("h3,span", { opacity: 1, duration: 0.3 });
  }, []);

  return (
    <div className="skills">
      <h1>What do I do?</h1>
      <div className="cards">
        <div className="card">
          <span>
            <FcMultipleSmartphones />
          </span>
          <h3 className="tit">Mobile Development</h3>
          <h3>
            I love mobile development very much creating different types of beautiful interafaces 
            and connecting frontned and backend. Currently, learning Flutter as new technology, so 
            I can develop applications more beautifully for Android as well as iOS, there is something 
            special in making beautiful things pleasent to the eye and amazing to use, i'm constantly
            learning new things every day I may not have a lot of work experience but wherever 
            I do I give it my 110%.
          </h3>
        </div>
        <div className="card">
          <span>
            <GiSpiderWeb />
          </span>
          <h3 className="tit">Web Development</h3>
          <h3>
            This is one aspect of programming which always keeps on changing and
            improving, and I cant seem to refrain myself from learning new web
            dev technologies be it React with Client Side Rendering, therefore 
            love NextJs, but HTML, CSS and JavaScript with always be my bread and butter.
          </h3>
        </div>
        <div className="card">
          <span>
            <GiNinjaHeroicStance />
          </span>
          <h3 className="tit">A whole bunch of things</h3>
          <h3>
            Be it Android Studio, Flutter, ReactJs, NodeJs, Html/Css, i've
            tried them all and i'm constantly learning building up my skills,
            making beautiful things and in the process improving Mobile Development
            and Web Development skills, i'm also a gammer love to play and analyze
            games, we can get inspiration from all kinds of things if we look closely.
          </h3>
        </div>
      </div>
    </div>
  );
}

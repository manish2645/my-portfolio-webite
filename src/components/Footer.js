import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "-450px top",
        // scrub: 1,
        // markers: true,
        // scrub: 0.001,
        ease: "Power1.inOut",
      },
    });
    tl.to(".footer", {
      opacity: 1,
      stagger: 0.2,
      duration: 1,
    });
  }, []);
  return (
    <div className="footer">
      <div className="content">
        <div className="left">
          <h2>MANISH</h2>
        </div>

        <div className="middle">
          <span>You only have one chance to make a first impression.</span>
          <br />
          <span>Lets make it good</span>
          <hr />
        </div>
        <div className="right">
          <h3>Navigation</h3>
          <HashLink className="hashlink" to="#lp" smooth>
            <span>Home</span>
          </HashLink>
          <HashLink className="hashlink" to="#sk" smooth>
            <span>Projects</span>
          </HashLink>
          <HashLink className="hashlink" to="#am" smooth>
            <span>About Me</span>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

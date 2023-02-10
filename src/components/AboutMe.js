import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import dp from "../assets/dp.jpg";

export default function AboutMe() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutme",
        start: "-180px top",
        // scrub: 1,
        // markers: true,
        // scrub: 0.001,
        ease: "Power1.inOut",
      },
    });
    tl.fromTo(
      ".right",
      { x: "110%" },
      { x: 0, duration: 0.5, ease: "easeInOut" }
    );
    tl.fromTo(
      ".left",
      { x: "-110%" },
      { x: 0, duration: 0.5, ease: "easeInOut" }
    );
  }, []);
  return (
    <div className="aboutme">
      <div className="left">
        <h2> About me </h2>{" "}
        <span>
          A developer from the hills of Meghalaya, constantly developing and
          learning new things.Got into web development a year ago just when the
          Coronavirus started before that I was doing Android App development
          for 1 + years, since then I have been in Love with Web Dev, especially 
          Frontend development, user interaction and user experience is what i 'm
          focused on. Apart from programming i 'm very passinated for travelling 
          and exploration of new places, love to ride, workingout all of these have 
          made me a very hardworking person and anything that I do I give it my 100 %. 
          And if you have read all of this you must really like me😁, dont be shy 
          send me a message about your project or some inspiration.{" "}
        </span>{" "}
      </div>{" "}
      <div className="right">
        <img src={dp} alt="" />
      </div>{" "}
    </div>
  );
}

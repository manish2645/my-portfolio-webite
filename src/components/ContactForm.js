import gsap from "gsap/gsap-core";
import React, { useEffect, useState } from "react";

export default function ContactForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("name:", name);
    console.log("email:", email);
    console.log("message:", message);
    setname("");
    setemail("");
    setmessage("");
  }

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-main",
        start: "-100px top",
        // scrub: 1,
        // markers: true,
        // scrub: 0.001,
        ease: "Power1.inOut",
      },
    });
    tl.to("h2,label", { opacity: 1 });
    // tl.to("label", { opacity: 1 });
    tl.to("input", { width: "80%", opacity: 1, duration: 0.5 });
    tl.to(".contact-btn", {
      opacity: 1,
    });
    tl.fromTo(
      ".contact-right",
      {
        opacity: 0,
      },
      { opacity: 1 }
    );
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-main">
        <div className="contact-left">
          <h2>Write to me</h2>
          {/* <hr /> */}
          <div className="input-field">
            <div className="input-name">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="input-email">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                required
              />
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h2>Message</h2>
          <textarea
            type="text"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            placeholder="Write text here..."
          />
          <button className="contact-btn" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}

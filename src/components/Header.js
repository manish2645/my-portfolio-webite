import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="header">
      <ul>
        <HashLink className="hl" to="#lp" smooth>
          <li>Home</li>
        </HashLink>

        <HashLink className="hl" to="#sk" smooth>
          <li>Projects</li>
        </HashLink>
        <HashLink className="hl" to="#am" smooth>
          <li>About Me</li>
        </HashLink>
        <HashLink className="hl" to="#contact" smooth>
          <li>Contact</li>
        </HashLink>
      </ul>
    </div>
  );
}

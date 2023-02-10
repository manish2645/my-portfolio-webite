import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Button({ text }) {
  return (
    <button className="slide">
      <HashLink className="head-hash" to="#projects" smooth>
        {text}
      </HashLink>
    </button>
  );
}

import React from "react";
import "./NavBar.css";
import troll from "./troll-face.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <img className="troll-image" src={troll} alt="troll face" />
      <h2>Meme Generator</h2>
    </div>
  );
}

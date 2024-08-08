import React from "react";
import "./NavBar.css";
import troll from "./troll-face.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <img className="troll-image" src={troll} alt="troll face" />
      <h1>Meme Generator</h1>
    </div>
  );
}

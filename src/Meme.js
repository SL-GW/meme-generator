import React from "react";
import "./Meme.css";

export default function Meme() {
  return (
    <div className="Meme">
      <div className="input-grid">
        <div className="intruction-text">
          <p>Top text</p>
          <input type="text" placeholder="Shut up" />
        </div>
        <div className="second-box">
          <p className="intruction-text">Bottom text</p>
          <input type="text" placeholder="And give me money" />
        </div>
      </div>
      <button>Get a new meme image</button>
    </div>
  );
}

import React, { useState } from "react";
import "./Meme.css";
import MemesData from "./MemesData";

export default function Meme() {
  const [meme, setMeme] = useState("");

  function updateMeme(event) {
    event.preventDefault();
    let newMeme = MemesData[0].data.memes;
    let randomNumber = Math.floor(Math.random() * newMeme.length);
    let url = newMeme[randomNumber].url;
    setMeme(url);
  }
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

      <button onClick={updateMeme}>Get a new meme image</button>
      <div>
        {meme && <img className="meme-image-result" src={meme} alt="Meme" />}
      </div>
    </div>
  );
}

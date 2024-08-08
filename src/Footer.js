import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded by{" "}
      <a href="https://sarah-gray-portfolio.netlify.app/" target="blank">
        Sarah Gray
      </a>
      . It is open-sourced on{" "}
      <a href="https://github.com/SL-GW/meme-generator" target="blank">
        Github
      </a>{" "}
      and hosted on
      <a
        href="https://meme-generator-project-with-react.netlify.app/"
        target="blank"
      >
        {" "}
        Netlify
      </a>
    </footer>
  );
}

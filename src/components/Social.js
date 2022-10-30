import React from "react";
import "./Social.css";
import slack from "../assets/slack.png";
import github from "../assets/github.png";

const Social = () => {
  return (
    <div className="social">
      <div className="wrapper">
        <a
          href="https://slack.com/"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={slack} alt="Slack logo" />
        </a>
        <a
          href="https://github.com/alvyynm"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="GitHub logo" />
        </a>
      </div>
    </div>
  );
};

export default Social;

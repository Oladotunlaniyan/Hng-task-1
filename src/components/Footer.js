import React from "react";
import zurilogo from "../assets/zuri-internship.svg";
import i4glogo from "../assets/I4G.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer__left">
          <a href="https://internship.zuri.team/">
            <img src={zurilogo} alt="Zuri Internship logo" />
          </a>
        </div>
        <div className="footer__center">
          <p>HNG Internship stage 1 Task</p>
        </div>
        <div className="footer__right">
          <a href="https://ingressive.org/">
            <img src={i4glogo} alt="Ingressive For Good logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

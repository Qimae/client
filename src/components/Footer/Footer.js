import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="ft-links">
        <div className="ft-copy">
          <p>
            &copy; copyright 2023.{" "}
            <span>
              <b>Ministry of Education.</b>
            </span>{" "}
            All Rights Reserved.
          </p>
        </div>
        <div className="ft-social">
          <a href="#hm">
            <BsFacebook />
          </a>
          <a href="#gh">
            <FaXTwitter />
          </a>
          <a href="#gh">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/roi-yehezkel-b97056231/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/RoiYehezkel" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100001367017876"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare />
      </a>
    </div>
  );
}

export default HeaderSocials;

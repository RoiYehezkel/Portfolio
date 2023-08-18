import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { navActions } from "../../store/index";

function Footer() {
  const dispatch = useDispatch();
  return (
    <footer>
      <a href="#home" className="footer_logo">
        ROI YEHEZKEL
      </a>
      <ul className="permalinks">
        <li>
          <a
            href="#home"
            onClick={() => dispatch(navActions.setActiveNav("#home"))}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => dispatch(navActions.setActiveNav("#about"))}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={() => dispatch(navActions.setActiveNav("#skills"))}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => dispatch(navActions.setActiveNav("#projects"))}
          >
            Projects
          </a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => dispatch(navActions.setActiveNav("#contact"))}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/roi-yehezkel-b97056231/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/RoiYehezkel"
          target="_blank"
          rel="noreferrer"
        >
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

      <div className="footer_copyright">© Roi Yehezkel</div>
    </footer>
  );
}

export default Footer;

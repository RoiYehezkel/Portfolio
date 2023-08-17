import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { navActions } from "../../store/index";

function NavBar() {
  const activeNav = useSelector((state) => state.activeNav);
  const dispatch = useDispatch();

  return (
    <nav>
      <a
        href="#home"
        onClick={() => dispatch(navActions.setActiveNav("#home"))}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => dispatch(navActions.setActiveNav("#about"))}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => dispatch(navActions.setActiveNav("#skills"))}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        onClick={() => dispatch(navActions.setActiveNav("#projects"))}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={() => dispatch(navActions.setActiveNav("#contact"))}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
}

export default NavBar;

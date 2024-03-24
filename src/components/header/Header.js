import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { navActions } from "../../store/index";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Roi Yehezkel</h1>
        <h5 className="text-ligth">Backend Developer</h5>
        <CTA />
        <HeaderSocials />
        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}
        <a
          onClick={() => dispatch(navActions.setActiveNav("#contact"))}
          href="#contact"
          className="scroll_down"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;

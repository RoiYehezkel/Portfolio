import React from "react";
import "./Header.css";
import CTA from "./CTA";
// import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Roi Yehezkel</h1>
        <h5 className="text-ligth">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;

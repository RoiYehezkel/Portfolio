import React from "react";
import { navActions } from "../../store/index";
import { useDispatch } from "react-redux";

function CTA() {
  const dispatch = useDispatch();

  return (
    <div className="cta">
      <a href="/assets/about/cv.pdf" download className="btn">
        Download CV
      </a>
      <a
        href="#contact"
        className="btn btn-primary"
        onClick={() => dispatch(navActions.setActiveNav("#contact"))}
      >
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;

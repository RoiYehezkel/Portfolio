import React from "react";

function CTA() {
  return (
    <div className="cta">
      <a href="/assets/about/cv.docx" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;

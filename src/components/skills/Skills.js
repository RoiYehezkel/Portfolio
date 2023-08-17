import React from "react";
import "./Skills.css";
import { frontend, backend } from "./data";
import { BsPatchCheckFill } from "react-icons/bs";
import Animation from "../Animation";

function Skills() {
  return (
    <section id="skills">
      <Animation>
        <h5 className="headline-h5">What Skills I Have</h5>
        <h2 className="headline-h2">My Skills</h2>
        <div className="container skills_container">
          <div className="skills_frontend">
            <h3>Frontend Development</h3>
            <div className="skills_content">
              {frontend.map((item, index) => (
                <article key={index} className="skills_details">
                  <BsPatchCheckFill className="skills_details-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-light">{item.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="skills_backend">
            <h3>Backend Development</h3>
            <div className="skills_content">
              {backend.map((item, index) => (
                <article key={index} className="skills_details">
                  <BsPatchCheckFill className="skills_details-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-light">{item.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Animation>
    </section>
  );
}

export default Skills;

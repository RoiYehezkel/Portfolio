import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import Animation from "../Animation";
import { navActions } from "../../store/index";
import { useDispatch } from "react-redux";

function About() {
  const dispatch = useDispatch();

  return (
    <section id="about">
      <Animation>
        <h5 className="headline-h5">Get To Know</h5>
        <h2 className="headline-h2">About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src="/assets/about/me-about.jpeg" alt="about img" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <PiStudentBold className="about_icon" />
                <h5>GPA of 94</h5>
                {/* <small>GPA of 94</small> */}
              </article>
              <article className="about_card">
                <TbCertificate className="about_icon" />
                <h5>2 certificates of excellence</h5>
                {/* <small>200+ Worldwide</small> */}
              </article>
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>2nd in a project competition</h5>
                {/* <small>80+ Completed</small> */}
              </article>
            </div>
            <p>
              Self-motivated and highly capable junior software developer
              looking for employment as a full-stack developer. Eager to
              contribute my problem-solving abilities, keen attention to detail,
              as well as communication and interpersonal skills to making a
              significant impact within your company.
            </p>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => dispatch(navActions.setActiveNav("#contact"))}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </Animation>
    </section>
  );
}

export default About;

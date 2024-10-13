import React from "react";
import about from "../css_style/about.module.css";

const About = () => {
  return (
    <div className={about.maintag}>
      <h1 className={about.h1tag}>About Me </h1>
      <img src="/images/dol.avif" alt="Work" className={about.img} />
      <p className={about.peratag}>
        Hi, I'm a front end developer with a passion for technology and design.
        I've been working remotely for the last few years, focusing primarily on
        web development. My goal is to create impactful and user-friendly
        applications that help people solve their problems. I recently graduated
        from the University of Texas at Austin with a degree in Computer Science
        and a minor in International Relations. I'm excited to share my
        knowledge and passion for software development with others. If you have
        any questions or need assistance with your next project, please don't
        hesitate to reach out. I'm always here to help!
      </p>
    </div>
  );
};

export default About;

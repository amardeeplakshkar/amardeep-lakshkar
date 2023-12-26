import React from 'react'

const About = () => {
  return (
    <>
    <h2 className="section-head"><i class="fa-solid fa-address-card"></i> &nbsp;
    about me</h2>
    <div id="about">
        <div className="about-image"><img src="favicon.png" alt="Amardeep Lakshkar" srcset=""/></div>
        <div className="about-content">
            <h3>Full Stack MERN Web Developer</h3>
            <h4>A Web Developer based In Madhya Pradesh,India</h4>
            <p>
            Passionate web developer from Mandsaur, Madhya Pradesh, specializing in crafting exceptional websites with a robust stack including JavaScript, HTML, CSS, React, Node.js, Express.js, and MongoDB, dedicated to creating visually appealing and seamlessly functional web experiences, with a keen interest in continuous learning and sharing insights through blogging.
            </p>
           <div className="btn-box download-btn">
           <button className="nav-btn">
            <i class="fa-solid fa-download"/> Download CV
            </button>
            <button className="hire-btn">
            <i class="fa-solid fa-download"/> Hire Me
            </button>
           </div>
        </div>
    </div>
    </>
  )
}

export default About;
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
            I'm Amardeep Lakshkar from Mandsaur, Madhya Pradesh. I'm passionate about crafting exceptional websites using a powerful stack that includes JavaScript, HTML, and CSS. Beyond the basics, I've also honed my skills in React, Node.js, Express.js, and MongoDB. I thrive on the excitement of learning new technologies and solving intricate puzzles to create seamless and visually appealing web experiences. My dedication to making websites not only look stunning but also function flawlessly is evident in my work. Outside of coding, I enjoy sharing my knowledge and experiences through my blog. I'd love to connect and discuss all things web-related!
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
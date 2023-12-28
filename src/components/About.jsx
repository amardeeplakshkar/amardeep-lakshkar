import React, { useState } from 'react';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };
  return (
    <>
    <h2 id='about' className="section-head"><i class="fa-solid fa-address-card"></i> &nbsp;
    about me</h2>
    <div id="about-container">
        <div className="about-image"><img src="favicon.png" alt="Amardeep Lakshkar" srcset=""/></div>
        <div className="about-content">
            <h3>Full Stack MERN Web Developer</h3>
            <h4>A Web Developer based In Madhya Pradesh,India</h4>
            <p>
            Passionate web developer from Mandsaur, Madhya Pradesh, specializing in crafting exceptional websites with a robust stack including JavaScript, HTML, CSS, React, Node.js, Express.js, and MongoDB, dedicated to creating visually appealing and seamlessly functional web experiences, with a keen interest in continuous learning and sharing insights through blogging.
            </p>
           <div className="btn-box download-btn">
           <button onClick={openModal} className="nav-btn">
            <i class="fa-solid fa-download"/> Download CV
            </button>
            <button onClick={openModal} className="hire-btn">
            <i class="fa-solid fa-download"/> Hire Me
            </button>
           </div>
        </div>
        {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Will Be Added Soon!.&#128531;</p>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default About;
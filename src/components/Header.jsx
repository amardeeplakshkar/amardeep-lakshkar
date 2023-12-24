import React from 'react'
import ColorChangerButton from './ColorChangerButton'

const Header = () => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
    <div className="social">
          <ColorChangerButton />
          <button onClick={() => handleButtonClick('https://twitter.com/amardeeplaksh04')} className="social-btn">
            <i className="social-icon fa-brands fa-twitter" />
          </button>
          <button onClick={() => handleButtonClick('https://instagram.com/amardeep_lakshkar')} className="social-btn">
            <i className="social-icon fa-brands fa-instagram" />
          </button>
          <button onClick={() => handleButtonClick('https://in.linkedin.com/in/amardeep-lakshkar-24a339244')} className="social-btn">
            <i className="social-icon fa-brands fa-linkedin" />
          </button>
          <button onClick={() => handleButtonClick('https://youtube.com/amardeeplakshkar')}  className="social-btn">
            <i className="social-icon fa-brands fa-youtube" />
          </button>
          <button onClick={() => handleButtonClick('mailto:lakshkaramardeep@gmail.com')} className="social-btn">
            <i className="social-icon fa-solid fa-envelope" />
          </button>
        </div>
   <nav>
   <div className='header'>
       <a dir="rtl" href="#home" className="navlinks">Home</a>
       <a dir="rtl" href="#about" className="navlinks">About</a>
       <a dir="rtl" href="#skills" className="navlinks">Skils</a>
       <a dir="rtl" href="#projects" className="navlinks">Projects</a>
       <a dir="rtl" href="#contact" className="navlinks">Contact</a>
    </div>
   </nav>
    </>
  )
}

export default Header

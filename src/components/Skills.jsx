import React from 'react'

const Skills = () => {
  const skillsData = [
    {skillicontype:'brands', skillicon:'react', skillhead: 'React', skilldesc: 'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.' },
    {skillicontype:'solid', skillicon:'palette', skillhead: 'Responsive Web Design', skilldesc: 'Responsive web design ensures that websites I create adapt seamlessly to various screen sizes, providing an optimal viewing experience on all devices. ' },
    {skillicontype:'brands', skillicon:'js', skillhead: 'JavaScript', skilldesc: 'JavaScript is the backbone of dynamic web applications, allowing me to create interactive and responsive features that enhance user experiences. ' },
    {skillicontype:'brands', skillicon:'html5', skillhead: 'HTML5', skilldesc: 'HTML5 is the foundation of modern web development, enabling me to structure and present content with semantic markup and multimedia support. ' },
    {skillicontype:'brands', skillicon:'css3-alt', skillhead: 'CSS3', skilldesc: 'CSS3 empowers me to style and design web elements beautifully, ensuring a visually appealing and consistent look across different devices. ' },
    {skillicontype:'solid', skillicon:'hand-holding-heart', skillhead: 'Web Performance Optimization', skilldesc: 'Web performance optimization is my commitment to delivering fast and efficient websites by minimizing load times and enhancing overall user satisfaction. ' },

    // Add more skills as needed
  ];
  
  const SkillBox = ({ skillhead, skilldesc,skillicon,skillicontype }) => (
    <div className="skill-box">
      <div className="fskill-box">
        <i className={`fa-${skillicontype} fa-${skillicon}`}></i>
      </div>
      <div className="sskill-box">
        <h3 className="skill-text">{skillhead}</h3>
        <div className="skill-desc">{skilldesc}</div>
      </div>
    </div>
  );
  
  const SkillsList = ({ skills }) => (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <SkillBox key={index} {...skill} />
      ))}
    </div>
  );

  return (
    <>
      <div id="skills"><h2 className="section-head">
        <i class="fa-solid fa-angles-up" /> &nbsp;
        Skills</h2>
      <h3 className='sub-head'>My Toolbox</h3>
      <SkillsList skills={skillsData} /></div>
    </>
  )
}

export default Skills
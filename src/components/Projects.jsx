import React from 'react'

const Projects = () => {
    const handleButtonClick = (url) => {
        window.open(url, '_blank');
      };
    const projectsData = [
        {
            projectHead: 'Project 1',
            projectDesc: 'Description for Project 1',
            btnStatus: 'Coming Soon',
            btnRedirect:'https://www.google.com',
            bgImage:'url("https://blog.photoshelter.com/wp-content/uploads/2018/09/google-images-crop-1.png")',
        },
        {
            projectHead: 'Project 2',
            projectDesc: 'Description for Project 1',
            btnStatus: 'lets Go!',
            btnRedirect:'https://www.facebook.com',
            bgImage:'url("https://blog.photoshelter.com/wp-content/uploads/2018/09/google-images-crop-1.png")',
        },
        {
            projectHead: 'Project 3',
            projectDesc: 'Description for Project 1',
            btnStatus: 'lets Go!',
            btnRedirect:'https://www.instagram.com',
            bgImage:'url("https://blog.photoshelter.com/wp-content/uploads/2018/09/google-images-crop-1.png")',
        },
        {
            projectHead: 'Project 1',
            projectDesc: 'Description for Project 1',
            btnStatus: 'Coming Soon',
            btnRedirect:'https://www.google.com',
            bgImage:'url("https://blog.photoshelter.com/wp-content/uploads/2018/09/google-images-crop-1.png")',
        },
        {
            projectHead: 'Project 2',
            projectDesc: 'Description for Project 1',
            btnStatus: 'lets Go!',
            btnRedirect:'https://www.facebook.com',
            bgImage:'url("https://blog.photoshelter.com/wp-content/uploads/2018/09/google-images-crop-1.png")',
        },
        {
            projectHead: 'Project 3',
            projectDesc: 'Description for Project 1',
            btnStatus: 'lets Go!',
            btnRedirect:'https://www.instagram.com',
            bgImage:'url("https://blog.photoshelter.com/wp-content/uploads/2018/09/google-images-crop-1.png")',
        },
    ];

    const ProjectCard = ({ projectHead, projectDesc, btnStatus, btnRedirect, bgImage }) => (
        <div className="overflowh">
            <div className="project-card"  style={{backgroundImage:bgImage}}>
                <div className="project-content">
                    <h4 className="project-head">{projectHead}</h4>
                    <p className="project-desc">{projectDesc}</p>
                    <button onClick={() => handleButtonClick(btnRedirect)} className="project-btn hire-btn">{btnStatus}</button>
                </div>
            </div>
        </div>

    );

    const ProjectsList = ({ projects }) => (
        <>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </>
    );
    return (
        <div id="projects">
            <h2 className="section-head">
                <i class="fa-solid fa-timeline" /> &nbsp;
                Projects</h2>
            <h3 className="sub-head">My Works</h3>
            <div className="projects-container">
                <ProjectsList projects={projectsData} />
            </div>
        </div>
    )
}

export default Projects
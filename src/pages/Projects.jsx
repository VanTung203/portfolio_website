// src/pages/Projects.jsx
import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Watch Shop Microservice',
      duration: '03/2025 - Present',
      github: 'https://github.com/trantronghieu222/CNLTHD_Project',
      description: 'Developed a full-stack e-commerce application for selling watches. Implemented product listing, shopping cart, and user authentication.',
      technologies: ['ReactJS', 'Tailwind CSS', 'Axios', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Library Website',
      duration: '04/2025 - Present',
      github: 'https://github.com/VanTung203/Library_Web',
      description: 'Built a library management system with functionalities for book management, user authentication, and borrowing/returning books.',
      technologies: ['ReactJS', 'Bootstrap', 'JavaScript', 'CSS3', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Food Chatbot',
      duration: '03/2025 - 04/2025',
      github: 'https://github.com/VanTung203/Food-Chatbot',
      description: 'Developed a chatbot that recommends recipes based on user-input ingredients. Integrated NLP for ingredient translation and search.',
      technologies: ['ReactJS', 'Tailwind CSS', 'Axios', 'JavaScript', 'Flask', 'NLP', 'Machine Translation API'],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.duration}</p>
              <p className="mt-2">{project.description}</p>
              <p className="mt-2 font-semibold">Technologies:</p>
              <ul className="list-disc list-inside">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 block">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

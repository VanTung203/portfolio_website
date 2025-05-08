// src/pages/About.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 flex justify-center">
            <img 
              src="/assets/avatarGithub.jpg" 
              alt="Profile" 
              className="w-64 h-64 object-cover rounded-full shadow-lg" 
              data-aos="zoom-in"
            />
          </div>
          <div className="flex-1 text-left" data-aos="fade-up" data-aos-delay="200">
            <p className="text-lg mb-4">
              I am a web developer intern with a passion for building scalable and responsive web applications. My goal is to constantly improve and develop my skills in the tech industry.
            </p>
            <p className="text-lg">Technologies: React, Node.js, MongoDB, Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

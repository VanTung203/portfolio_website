// src/pages/Home.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4" data-aos="fade-up">Welcome to My Portfolio</h2>
        <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">Hi, I'm Van Phu Tung, a passionate developer focused on creating impactful digital solutions.</p>
      </div>
    </section>
  );
}

export default Home;

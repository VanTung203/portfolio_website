// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">Contact Me</h2>
        <p className="mb-6" data-aos="fade-up" data-aos-delay="200">Feel free to reach out if you have any questions or opportunities!</p>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg inline-block" data-aos="fade-up" data-aos-delay="400">
          <p className="mb-2">Email: phutung06@gmail.com</p>
          <p>Phone: 0938822538</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

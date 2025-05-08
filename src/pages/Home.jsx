// src/pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg mb-6">Hi, I'm Van Phu Tung, a passionate developer focused on creating impactful digital solutions.</p>
        <button className="bg-white text-blue-700 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-200 transition">View Projects</button>
      </div>
    </section>
  );
}

export default Home;

// src/components/Button.jsx
import React from 'react';

function Button({ text, onClick, className }) {
  return (
    <button 
      onClick={onClick} 
      className={`bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;

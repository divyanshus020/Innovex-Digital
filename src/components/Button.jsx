import React from 'react';

export default function Button({ text, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
}


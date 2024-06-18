import React from 'react';

const Button = ({ onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
      aria-label={`Change background color to ${color}`}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
};

export default Button;

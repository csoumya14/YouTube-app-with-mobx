import React from 'react';
import './Button.css';

const Button = ({ clip, handleDeleteClip }) => {
  return (
    <button className="button" onClick={() => handleDeleteClip(clip)}>
      Hide
    </button>
  );
};

export default Button;

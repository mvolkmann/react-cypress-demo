import React from 'react';
import './my-button.css';

function MyButton({children, onClick}) {
  return (
    <button className="my-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;

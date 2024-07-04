import React from 'react';
import './FallingSquaresCrosses.scss';

const FallingSquaresCrosses = () => {
  const fallingElements = [];

  for (let i = 0; i < 4; i++) {
    let left;
    if (i < 2) {
      // First 2 elements on the left side
      left = Math.random() * (window.innerWidth * 0.2) + 'px'; // Random left position within 20% from the left
    } else {
      // Last 2 elements on the right side
      left = window.innerWidth - Math.random() * (window.innerWidth * 0.2) + 'px'; // Random left position within 20% from the right
    }
    const top = Math.random() * (window.innerHeight - 100) + 'px'; // Random top position within the viewport
    const delay = i * 5; // Increase the delay to make them fall at different times

    fallingElements.push(
      <div
        key={i}
        className={`falling-element ${i % 2 === 0 ? 'square' : 'cross'}`}
        style={{
        //   position: 'absolute', // Set position to absolute to allow elements to fall anywhere on the page
          top,
          left,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }

  return (
    <div className='falling-container'>
      {fallingElements}
    </div>
  );
};

export default FallingSquaresCrosses;
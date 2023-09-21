import React from 'react';

const Rating = ({ popularity }) => {
  const maxStars = 5; // Maximum number of stars
  const filledStars = Math.round((popularity / 100) * maxStars); // Calculate the number of filled stars

  // Create an array of stars to be rendered
  const stars = Array.from({ length: maxStars }, (_, index) => (
    <span key={index} className={index < filledStars ? 'filled' : ''}>★</span>
  ));

  return (
    <div className="rating">
      {stars}
    </div>
  );
};

export default Rating;

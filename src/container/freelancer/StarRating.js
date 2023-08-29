import React from 'react'

const StarRating = ({rating}) => {
    // Convert rating to nearest whole number
    const roundedRating = Math.round(rating);
  
    return (
      <div className="inline-block">
        {/* Render filled stars */}
        {Array.from({ length: roundedRating }).map((_, index) => (
          <span key={index} className="text-[16px] text-yellow-500">★</span>
        ))}
  
        {/* Render empty stars */}
        {Array.from({ length: 5 - roundedRating }).map((_, index) => (
          <span key={index + roundedRating} className="text-[16px] text-gray-300">★</span>
        ))}
        
        <p className='font-inter opacity-50 text-[#0A142F] text-[14px] inline-block mx-1'>{rating}.0</p>
      </div>
    );
  }
  

export default StarRating
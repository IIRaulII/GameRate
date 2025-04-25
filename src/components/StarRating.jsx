import { useState, useCallback, memo } from 'react';
import './StarRating.css';

const StarRating = memo(({ initialRating = 0, onRateChange, readonly = false }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  
  const handleRating = useCallback((newRating) => {
    if (readonly) return;
    
    setRating(newRating);
    if (onRateChange) {
      onRateChange(newRating);
    }
  }, [onRateChange, readonly]);

  const handleMouseEnter = useCallback((starIndex) => {
    if (readonly) return;
    setHoverRating(starIndex);
  }, [readonly]);

  const handleMouseLeave = useCallback(() => {
    if (readonly) return;
    setHoverRating(0);
  }, [readonly]);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${(hoverRating || rating) >= starValue ? 'filled' : ''} ${readonly ? 'readonly' : ''}`}
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        );
      })}
    </div>
  );
});

export default StarRating; 
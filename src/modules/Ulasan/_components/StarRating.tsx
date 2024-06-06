import React from 'react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  index : number
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5, index }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - Math.ceil(rating);

  return (
    <div className="flex items-center" data-cy={`t-rating-${index}`}>
      {Array.from({ length: fullStars }, (_, index) => (
        <svg key={index} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.29a1 1 0 00.95.69h5.566c.969 0 1.371 1.24.588 1.81l-4.507 3.273a1 1 0 00-.364 1.118l1.717 5.29c.3.922-.755 1.688-1.539 1.118L10 15.447l-4.507 3.273c-.784.57-1.838-.196-1.539-1.118l1.717-5.29a1 1 0 00-.364-1.118L1.8 10.717c-.783-.57-.38-1.81.588-1.81h5.566a1 1 0 00.95-.69l1.715-5.29z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.29a1 1 0 00.95.69h5.566c.969 0 1.371 1.24.588 1.81l-4.507 3.273a1 1 0 00-.364 1.118l1.717 5.29c.3.922-.755 1.688-1.539 1.118L10 15.447l-4.507 3.273c-.784.57-1.838-.196-1.539-1.118l1.717-5.29a1 1 0 00-.364-1.118L1.8 10.717c-.783-.57-.38-1.81.588-1.81h5.566a1 1 0 00.95-.69l1.715-5.29z" />
        </svg>
      )}
      {Array.from({ length: emptyStars }, (_, index) => (
        <svg key={index} className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.29a1 1 0 00.95.69h5.566c.969 0 1.371 1.24.588 1.81l-4.507 3.273a1 1 0 00-.364 1.118l1.717 5.29c.3.922-.755 1.688-1.539 1.118L10 15.447l-4.507 3.273c-.784.57-1.838-.196-1.539-1.118l1.717-5.29a1 1 0 00-.364-1.118L1.8 10.717c-.783-.57-.38-1.81.588-1.81h5.566a1 1 0 00.95-.69l1.715-5.29z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;

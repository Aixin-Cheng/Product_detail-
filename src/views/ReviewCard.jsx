import React, { useState } from 'react';


const ReviewCard = ({ name, rating, review, date }) => {
  // star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-6 h-6 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.149c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.948c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.54-1.118l1.286-3.948a1 1 0 00-.364-1.118l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.149a1 1 0 00.95-.69l1.286-3.948z" />
      </svg>
    ));
  };

  return (
    // review background 
    
    <div className="bg-white border rounded-3xl p-6 flex flex-col justify-between w-full h-full">
      
      <div>
        <div className="flex flex-col mb-4">
          <div className="flex justify-between">
            <div className="flex mb-4 float-start">{renderStars(rating)}</div>

            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            </div>

          </div>
          <div className="text-lg font-semibold">{name}</div>
        </div>
        <div className="text-gray-700">{review}</div>
        <div className="ml-auto text-gray-500 text-sm pt-3">Posted on {date}</div>
      </div>
    </div>
  );
};

// ReviewGrid Component
const ReviewGrid = () => {
  const reviews = [
    {
      name: "Samatha D.",
      rating: 4,
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "August 29, 2024"
    },
    {
      name: "Alex M.",
      rating: 5,
      review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "August 15, 2024"
    },
    {
      name: "Ethan R.",
      rating: 4.5,
      review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "August 27, 2024"
    },
    {
      name: "Anna Brown",
      rating: 5,
      review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "August 24, 2024"
    },
    {
      name: "Sophia Miller",
      rating: 4,
      review: "Pretty good overall.",
      date: "August 22, 2024"
    },
  ];

  const [visibleReviews, setVisibleReviews] = useState(4);

  const showMoreReviews = () => {
    setVisibleReviews(prev => prev + 4);
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <ReviewCard
              name={review.name}
              rating={review.rating}
              review={review.review}
              date={review.date}
            />
          </div>
        ))}
      </div>

      {visibleReviews < reviews.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={showMoreReviews}
            className="bg-white cursor-pointer text-black text-sm border px-5 py-3 rounded-3xl hover:bg-black hover:text-white"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
};


export default ReviewGrid;

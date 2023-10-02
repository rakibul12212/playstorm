import React, { useState } from 'react';

function TopPeople() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://i.ibb.co/rMGZ3H7/tpma-1.png',
    'https://i.ibb.co/Ldwwhr9/carosul.png',
    'https://i.ibb.co/99LDMxh/tpma-3.png',
    'https://i.ibb.co/rMGZ3H7/tpma-1.png',
    'https://i.ibb.co/Ldwwhr9/carosul.png',
    'https://i.ibb.co/99LDMxh/tpma-3.png',
    // Add more image URLs as needed
  ];

  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < (totalPages - 1) * imagesPerPage) {
      setCurrentIndex(currentIndex + imagesPerPage);
    } else {
      setCurrentIndex(0); // Reset to the first page when reaching the end
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerPage);

  return (
    <div className="container p-4 md:p-10 lg:p-20">
      <h1 className="text-2xl font-bold mb-4 text-center">Top People Minded Arts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visibleImages.map((image, index) => (
          <div key={index} className="mb-4 md:mb-0">
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-auto"
              style={index === 0 || index === 2 ? { marginBottom: '10px' } : {}}
            />
          </div>
        ))}
      </div>
      <div className='text-center mt-4'>
          <p className='text-sm text-gray-500'>@jenymors</p>
          <p className='font-bold'>Ice Cream Face</p>
      </div>
      <div className="mt-4 flex gap-2 justify-center">
        <button
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
          className="bg-orange-500 text-white px-2 py-2 rounded-full disabled:opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="bg-orange-500 text-white px-2 py-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TopPeople;

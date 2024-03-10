import React, { useState } from "react";

const ImageGallery = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative">
        <button
          className="absolute top-0 right-0 m-4 text-white text-2xl"
          onClick={onClose}
        >
          Close
        </button>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl"
          onClick={prevImage}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl"
          onClick={nextImage}
        >
          &#10095;
        </button>
        <img
          src={images[currentImageIndex]}
          alt="gallery"
          className="max-w-full max-h-full"
        />
      </div>
    </div>
  );
};

export default ImageGallery;

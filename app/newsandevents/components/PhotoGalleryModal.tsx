'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface PhotoGalleryModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add keyboard event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrevious();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose]);
  
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors duration-200 z-50"
      >
        <X size={32} />
      </button>
      
      {/* Image counter */}
      <div className="absolute top-4 left-4 text-white px-3 py-1 rounded-full bg-black/50">
        {currentIndex + 1} / {images.length}
      </div>
      
      {/* Main image */}
      <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-200"
      >
        <ArrowLeft size={24} />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-200"
      >
        <ArrowRight size={24} />
      </button>
      
      {/* Thumbnail navigation */}
      <div className="absolute bottom-4 left-4 right-4 overflow-x-auto py-2">
        <div className="flex gap-2 justify-center">
          {images.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                idx === currentIndex ? 'border-gold-400 scale-110' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryModal;
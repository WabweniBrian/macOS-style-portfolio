/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "Escape") {
        closeLightbox();
      }
    };

    if (lightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <div className="container mx-auto px-4 gallery">
      <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            onClick={() => openLightbox(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="object-cover w-full h-48 rounded-lg"
            />
           {image.caption &&  <p className="mt-2 text-sm text-gray-600">{image.caption}</p>}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-4xl w-full bg-transparent rounded-lg"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
              >
                <motion.div
                  key={currentImageIndex}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", damping: 15, stiffness: 300 }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="max-w-full max-h-[98vh] rounded-lg object-contain"
                    loading="lazy"
                  />
                </motion.div>
               {images[currentImageIndex].caption &&  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white p-2 rounded-md text-center">
                  {images[currentImageIndex].caption}
                </div>}
                <button
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-black/60 rounded-full z-10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-black/60 rounded-full z-10"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </motion.div>
            </motion.div>
            <button
              className="fixed top-4 right-4 z-50 p-2 bg-black/60 rounded-full"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;

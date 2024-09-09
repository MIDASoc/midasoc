import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ImageGallery from "../data/EventsData.json"; // Import Next.js Image component

// Sample eventGallery data
const eventGallery = ImageGallery.eventImageGallery;

// Add the first image to the end for seamless looping
const extendedEventGallery = [...eventGallery, eventGallery[0]];

const EventImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = extendedEventGallery.length;
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalImages;
        return nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [totalImages]);

  // Reset position after transition to avoid visible jump
  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      const handleTransitionEnd = () => {
        if (currentIndex === totalImages - 1) {
          carouselElement.style.transition = "none";
          setCurrentIndex(0); // Jump to start
          setTimeout(() => {
            if (carouselElement) {
              carouselElement.style.transition = "transform 0.5s ease";
            }
          }, 20); // Delay for CSS to apply
        }
      };
      carouselElement.addEventListener("transitionend", handleTransitionEnd);
      return () =>
        carouselElement.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
    }
  }, [currentIndex, totalImages]);

  return (
    <div className="EventCarouselContainer">
      <div
        ref={carouselRef}
        className="carousel"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {extendedEventGallery.map((item) => (
          <div key={item.id} className="carouselItemText">
            <div className="eventImageContainer">
              <div className="imageControl">
                <Image
                  src={item.imageLink}
                  alt={`Event at ${item.imageAddress}`}
                  width={0} // Set appropriate width
                  height={0} // Set appropriate height
                  layout="responsive" // Ensures responsive image handling
                  priority={true} // Preload the active image
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='imageContainer'></div> */}
    </div>
  );
};

export default EventImageCarousel;

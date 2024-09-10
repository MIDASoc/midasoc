import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ImageGallery from "../data/EventsData.json";
import kol01 from "../assets/Illustrator/kolkata/1x/kol01.png";
import kol02 from "../assets/Illustrator/kolkata/1x/kol02.png";
import kol03 from "../assets/Illustrator/kolkata/1x/kol03.png";
import kol04 from "../assets/Illustrator/kolkata/1x/kol04.png";
import kol05 from "../assets/Illustrator/kolkata/1x/kol05.png";
import kol06 from "../assets/Illustrator/kolkata/1x/kol06.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PublicIcon from "@mui/icons-material/Public";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";



const ImageCarousel = (data:any) => {
  

const eventGallery = data.data;

const extendedEventGallery = [...eventGallery, eventGallery[0]];
  const slides = [kol01, kol02, kol03, kol04, kol05, kol06];
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = extendedEventGallery.length;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigateToPage = () => {
    window.location.href = "https://icpr2024.org/index.html";
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slides.length]);

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
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap"
        rel="stylesheet"
      />

      <div className="carouselContainer">
        <div
          ref={carouselRef}
          className="carousel"
          style={{
            transform: `translateX(-${(currentIndex * (data.tab === "events"?300:500)) / totalImages}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {extendedEventGallery.map((item) => (
            <div key={item.id} className="carouselItem">
              <Image
                src={item.imageLink}
                alt={`Event at ${item.imageAddress}`}
                width={0} // Set appropriate width
                height={0} 
                // Fills the parent container
        objectFit="cover"// Set appropriate height
                layout="responsive" // Ensures responsive image handling
                 // Preload the active image
              />
              <p>{item.imageAddress}</p>
            </div>
          ))}
        </div>
        {data.tab==="events" ? <div className="imageContainer">
          <div className="icpContainer">
            <div className="slider-message-container">
              <span style={{paddingLeft:"1rem", paddingRight:"1rem"}}>
                <span className="zoom-container">
                  <span className="zoom-element">27th</span>
                </span>{" "}
                International Conference on
              </span>
              <span>Pattern Recognition</span>
              <div className="text-extra-container">
                <span
                  style={{
                    fontFamily: "Poiret One",
                    fontWeight: 400,
                    fontSize: "4rem",
                    textTransform: "uppercase",
                  }}
                >
                  K
                </span>
                <div className="text-extra-style">
                  <div className="slider-container">
                    <div
                      className="slides"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
                    >
                      {slides.map((slide, index) => (
                        <div key={index} className="slide">
                          {<Image src={slide} alt="" width={40} height={0} />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "Poiret One",
                    fontWeight: 400,
                    fontSize: "4rem",
                    textTransform: "uppercase",
                  }}
                >
                  lkata
                </span>
              </div>
              <span
                style={{
                  fontWeight: 100,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                }}
              >
                December 01-05 2024, India
              </span>
              <div className="join-more-button" onClick={navigateToPage}>
                Know more
                <ArrowCircleRightRoundedIcon style={{ fontSize: "2.5rem" }} />
              </div>
            </div>
          </div>
        </div> :<div className="imageContainer"> <div className="contactContainer">
        <div className="contactContainerSegment">
          <HomeRoundedIcon style={{fontSize:"3rem"}} />
          213/A/1 East Kodalia, New Brrackpore<br></br>Kolkata-700131, West
          Bengal, Inida
        </div>
        <div className="contactContainerSegment">
          <LocalPhoneIcon style={{fontSize:"3rem"}} />
         +91 8013901318
        </div>
        <div className="contactContainerSegment">
          <AlternateEmailIcon style={{fontSize:"3rem"}}  />
          midasociety@gmail.com
        </div>
        <div className="contactContainerSegment">
          <PublicIcon style={{fontSize:"3rem"}} />
         midasoc.org
        </div>
      </div></div>}
     
      </div>
    </>
  );
};

export default ImageCarousel;

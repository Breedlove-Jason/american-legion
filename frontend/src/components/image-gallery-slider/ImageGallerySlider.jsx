import { useState, useEffect, useRef } from "react";
import {
  SliderContainer,
  SliderTrack,
  Slide,
  SlideImage,
  SlideText,
  PrevButton,
  NextButton,
} from "./ImageGallerySlider.styles.jsx";

const ImageGallerySlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetTimeout();
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    resetTimeout();
  };

  const resetTimeout = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds
  };

  return (
    <SliderContainer>
      <SliderTrack style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Slide key={index}>
            <SlideImage src={image.url} alt={`Past Event ${index + 1}`} />
            <SlideText>{image.text}</SlideText>
          </Slide>
        ))}
      </SliderTrack>
      <PrevButton onClick={goToPrev}>Prev</PrevButton>
      <NextButton onClick={goToNext}>Next</NextButton>
    </SliderContainer>
  );
};

export default ImageGallerySlider;

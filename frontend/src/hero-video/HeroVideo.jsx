import { useState } from "react";
import {
  HeroImage,
  HeroVideoContainer,
  FallbackImage,
} from "./HeroVideo.styles";

const HeroVideo = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <HeroImage>
      {videoError ? (
        <FallbackImage
          src={
            "https://legion-post84-assets.s3.us-west-1.amazonaws.com/images/flag.png"
          }
          alt="Fallback Image"
        />
      ) : (
        <HeroVideoContainer>
          <video autoPlay muted loop playsInline onError={handleVideoError}>
            <source
              src={
                "https://legion-post84-assets.s3.us-west-1.amazonaws.com/videos/hero-banner-video.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </HeroVideoContainer>
      )}
    </HeroImage>
  );
};

export default HeroVideo;

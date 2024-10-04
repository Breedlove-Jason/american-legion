import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const Slide = styled.div`
  position: relative; /* Ensure SlideText is positioned relative to Slide */
  min-width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  overflow: hidden;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SlideText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%; /* Takes up 1/4 of the image height */
  color: #ffffff;
  background-color: #07121b;
  padding: 10px;
  border-radius: 0 0 10px 10px; /* Rounded corners at the bottom */
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: left;
  box-sizing: border-box;
  margin: 0; /* Remove margin to align with the bottom */
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: #0f2537; /* Matching the site's primary color */
  color: #ffffff;
  border: none;
  padding: 10px 20px; /* Adjusted padding for a regular button look */
  cursor: pointer;
  border-radius: 10px; /* Rounded edges */
  z-index: 10;
  font-size: 16px;
  &:hover {
    background-color: #1a3a5c; /* Slightly darker on hover */
  }
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: #0f2537; /* Matching the site's primary color */
  color: #ffffff;
  border: none;
  padding: 10px 20px; /* Adjusted padding for a regular button look */
  cursor: pointer;
  border-radius: 10px; /* Rounded edges */
  z-index: 10;
  font-size: 16px;
  &:hover {
    background-color: #1a3a5c; /* Slightly darker on hover */
  }
`;

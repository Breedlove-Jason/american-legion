import styled from 'styled-components';

export const HeroImage = styled.div`
  width: 100%;
  max-width: 100%;
  height: 700px;
  margin-bottom: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

export const HeroVideoContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const FallbackImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

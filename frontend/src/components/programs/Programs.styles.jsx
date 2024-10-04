// src/components/programs/Programs.styles.jsx
import styled from "styled-components";

export const SectionContainer = styled.div`
  margin: 40px 0;
  text-align: center;
  background-color: #0f2537;
  padding: 20px;
  border-radius: 8px;
`;

export const TwoColumnSection = styled(SectionContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 40px auto;
`;

export const Column = styled.div`
  flex: 1;
  padding: 20px;
`;

export const SectionImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const SectionContent = styled.p`
  font-size: 18px;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
  text-align: left; /* Align text to the left */
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  color: #fff;
  margin-bottom: 20px;
  text-align: center; /* Center the title */
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  color: #fff;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
`;
export const BottomText = styled.p`
  position: relative;
  bottom: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin: 0;
  width: 100%;
  text-align: left !important;
  font-size: 18px;
  z-index: 1;
  border: 1px solid #000;
  border-radius: 15px;
`;

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

export const SectionTitle = styled.h2`
  font-size: 28px;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

export const LeadershipCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

export const LeadershipCard = styled.div`
  background-color: #1a3a5c;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 30%;
`;

export const LeadershipCardImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const LeadershipCardContent = styled.div`
  color: #fff;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
  }
  p {
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
  }
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

export const ContentWrapper = styled.div`
  margin-top: -165px; /* Adjust this value to move the content higher */
`;

import styled from "styled-components";

export const SectionContainer = styled.div`
    margin: 40px 0;
    text-align: center;
    background-color: #0f2537;
    padding: 20px;
    border-radius: 8px;

    @media (max-width: 600px) {
        padding: 10px;
        margin: 20px 0;
    }
`;

export const TwoColumnSection = styled(SectionContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 40px auto;

    @media (max-width: 600px) {
        flex-direction: column;
        margin: 20px auto;
    }
`;

export const Column = styled.div`
    flex: 1;
    padding: 20px;

    @media (max-width: 600px) {
        padding: 10px;
    }
`;

export const SectionImage = styled.img`
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        max-width: 100%;
    }
`;

export const SectionContent = styled.p`
    font-size: 18px;
    color: #fff;
    max-width: 800px;
    margin: 0 auto;
    text-align: left;

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 28px;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 24px;
    }
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

    @media (max-width: 600px) {
        font-size: 16px;
        padding: 5px;
    }
`;

export const PaymentButton = styled.button`
  background-color: #ff4500;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #ff6347;
  }

  @media (max-width: 600px) {
    padding: 8px 16px;
  }
`;
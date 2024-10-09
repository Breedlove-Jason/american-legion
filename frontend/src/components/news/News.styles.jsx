import styled from 'styled-components';

// Wrapper for the entire news page content
export const NewsWrapper = styled.div`
  background-color: #2b3e50; /* Dark background for consistency with the Superhero theme */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Title of the news section
export const NewsTitle = styled.h1`
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Individual news item card
export const NewsItem = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    color: #fff; /* Superhero primary color */
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

// Date of the news article
export const NewsDate = styled.p`
  font-size: 0.9rem;
  color: #777777;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// Description of the news article
export const NewsDescription = styled.p`
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
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

import styled from "styled-components";

// Wrapper for the entire news page content
export const NewsWrapper = styled.div`
  background-color: #2b3e50; /* Dark background for consistency with the Superhero theme */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Title of the news section
export const NewsTitle = styled.h1`
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;
`;

// Individual news item card
export const NewsItem = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    color: #337ab7; /* Superhero primary color */
    margin-bottom: 10px;
  }
`;

// Date of the news article
export const NewsDate = styled.p`
  font-size: 0.9rem;
  color: #777777;
  margin-bottom: 10px;
`;

// Description of the news article
export const NewsDescription = styled.p`
  font-size: 1rem;
  color: #333333;
  line-height: 1.5;
`;

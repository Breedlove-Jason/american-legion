import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Wrapper for the entire form
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #2b3e50; /* Superhero dark background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 90%; /* Adjust width on smaller screens */
  }
`;

// Title of the form
export const Title = styled.h2`
  color: #ffffff; /* Superhero light text */
  margin-bottom: 20px;
  text-align: center;
`;

// Styled form element
export const StyledForm = styled.form`
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Label = styled.label`
  color: #ffffff; /* Superhero light text */
  margin-bottom: 5px;
  display: block;

  @media (max-width: 768px) {
    font-size: 14px; /* Smaller font on mobile */
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 8px; /* Reduce padding on smaller screens */
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 8px; /* Reduce padding on smaller screens */
  }
`;

export const SubmitButton = styled.button`
  background-color: #337ab7; /* Superhero primary color */
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #286090; /* Slightly darker on hover */
  }

  &:disabled {
    background-color: #a0a0a0; /* Disabled state color */
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 8px 16px; /* Adjust button size on smaller screens */
  }
`;

// Message.jsx that appears after form submission
export const Message = styled.div`
  margin-top: 15px;
  padding: 10px;
  background-color: ${({ $isSuccess }) => ($isSuccess ? "#5bc0de" : "#d9534f")};
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
`;

// Wrapper for contact info blocks
export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 40px;
  padding: 20px;
  background-color: #2b3e50; /* Superhero dark background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    flex-direction: row; /* Horizontal layout on larger screens */
  }
`;

export const ContactInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff; /* Superhero light text */
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

// Icon in contact info block
export const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-bottom: 10px;
`;

// Title for each contact info item
export const InfoTitle = styled.h4`
  font-size: 18px;
  margin: 0 0 5px;
`;

// Subtitle for each contact info item
export const InfoSubtitle = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
`;

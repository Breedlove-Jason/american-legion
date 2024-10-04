import styled from "styled-components";

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
    border: ${(props) => (props.$isInvalid ? "1px solid red" : "1px solid #ced4da")};
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
  margin-top: 20px;

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

export const Message = styled.div`
  margin-top: 15px;
  padding: 10px;
  background-color: ${({ $isSuccess }) => ($isSuccess ? "#5bc0de" : "#d9534f")};
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
`;

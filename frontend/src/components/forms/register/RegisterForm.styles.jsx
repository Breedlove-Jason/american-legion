import styled from "styled-components";
import { Form } from "react-bootstrap";

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
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled(Form.Label)`
  color: #fff;
`;

export const Input = styled(Form.Control)`
  background-color: #fff;
  border: 1px solid #ced4da;
  color: #000;
  border-radius: 4px;
  &:focus {
    background-color: #fff;
    color: #000;
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
// Update the styled-components to use transient props
export const SuccessMessage = styled.div`
  font-size: 1rem;
  color: green;
  text-align: center;
  margin-top: 10px;
  display: ${({ $isSuccess }) => ($isSuccess ? "block" : "none")};
`;

import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #2b3e50; /* Superhero dark background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 800px;
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

export const Selection = styled(Form.Control)`
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

export const SuccessMessage = styled.div`
  font-size: 1rem;
  color: green;
  text-align: center;
  margin-top: 10px;
`;

export const Textarea = styled(Form.Control)`
  background-color: #fff;
  border: 1px solid #ced4da;
  color: #000;
  border-radius: 4px;
  &:focus {
    background-color: #fff;
    color: #000;
  }
  resize: none;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

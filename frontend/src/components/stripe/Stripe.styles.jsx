import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

// Container for form and messages
export const PaymentContainer = styled.div`
  padding: 20px;
  background-color: rgba(15, 37, 55, 0.8);
  border-radius: 10px;
  margin-top: 30px;
  text-align: center;
`;

// Title for the success, failure, and payment pages
export const PaymentTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
`;

// Styled form for the payment page
export const StyledForm = styled(Form)`
  max-width: 500px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  color: #ffffff;
`;

// Stripe Card Element container for input styling
export const CardElementContainer = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`;

// Button for submitting the payment
export const PayButton = styled(Button)`
  background-color: #ff6f61;
  border: none;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #ff5a4f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Message styles for displaying error or confirmation
export const Message = styled.p`
  font-size: 1.1rem;
  color: ${(props) => (props.success ? "green" : "red")};
  margin-top: 15px;
  font-weight: bold;
`;

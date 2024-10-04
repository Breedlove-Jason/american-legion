// Checkout.styles.jsx

import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
export const Container = styled.div`
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

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 3rem !important;
//   padding: 30px;
//   margin: auto;
//   //text-align: center;
//   max-width: 600px;
// `;

// Container for form and messages
export const PaymentContainer = styled.div`
  padding: 30px;
  background-color: #2b3e50; /* Superhero dark background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 90%; /* Adjust width on smaller screens */
  }
`;

// Title for the success, failure, and payment pages
export const PaymentTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff; /* Superhero light text */
  margin-bottom: 20px;
  text-align: center;
`;

// Styled form for the payment page
export const StyledForm = styled(Form)`
  max-width: 500px;
  margin: 0 auto 20px auto;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

// Button for submitting the payment
export const PayButton = styled(Button)`
  background-color: #337ab7; /* Superhero primary color */
  border: none;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  color: #ffffff;
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

// Message styles for displaying error or confirmation
export const Message = styled.p`
  font-size: 1.1rem;
  color: ${(props) =>
    props.$success
      ? '#5bc0de'
      : '#d9534f'}; /* Superhero success and error colors */
  margin-top: 15px;
  font-weight: bold;
  padding: 10px;
  background-color: ${(props) =>
    props.$success ? '#d9edf7' : '#f2dede'}; /* Superhero background colors */
  border-radius: 5px;
  text-align: center;
`;

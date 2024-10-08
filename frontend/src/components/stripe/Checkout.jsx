// StripeCheckout.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import {
  PaymentContainer,
  PaymentTitle,
  StyledForm,
  PayButton,
  Message,
  Input,
} from './Checkout.styles.jsx';
import { Container } from 'react-bootstrap';
import { API_URL } from '@/config/index.js'; // Adjust the import path as necessary

export default function StripeCheckout() {
  const [message, setMessage] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [donationError, setDonationError] = useState('');

  useEffect(() => {
    // Check if redirected back from Stripe Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Payment successful! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage('Payment canceled — please try again when you’re ready.');
    }
  }, []);

  const handleMembershipCheckout = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/stripe/create-checkout-session/`,
      );
      const data = response.data;

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        setMessage('Failed to initiate membership checkout session.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred during membership checkout.');
    }
  };

  const handleDonationCheckout = async () => {
    // Validate the donation amount
    const amount = parseFloat(donationAmount);
    if (isNaN(amount) || amount <= 0) {
      setDonationError('Please enter a valid donation amount.');
      return;
    }
    setDonationError('');

    try {
      const response = await axios.post(
        `${API_URL}/stripe/create-donation-session/`,
        {
          amount: amount * 100, // Convert to cents
        },
      );
      const data = response.data;

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        setMessage('Failed to initiate donation checkout session.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred during donation checkout.');
    }
  };

  return (
    <div className={'container'}>
      <Container
        className="mt-5 custom-container"
        style={{ maxWidth: '600px' }}
      >
        <PaymentContainer>
          {message ? (
            <Message $success>{message}</Message>
          ) : (
            <>
              <PaymentTitle>Support Our Cause</PaymentTitle>

              {/* Membership Dues Section */}
              <StyledForm>
                <h3>American Legion Post 84 Dues</h3>
                <p>Pay your $40 membership dues.</p>
                <PayButton onClick={handleMembershipCheckout}>
                  Pay Membership Dues
                </PayButton>
              </StyledForm>

              {/* Donation Section */}
              <StyledForm>
                <h3>Make a Donation</h3>
                <Form.Group controlId="donationAmount">
                  <Form.Label column={'lg'}>Donation Amount</Form.Label>
                  <Input
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="Enter donation amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                  />
                  {donationError && <Message>{donationError}</Message>}
                </Form.Group>
                <PayButton onClick={handleDonationCheckout}>Donate</PayButton>
              </StyledForm>
            </>
          )}
        </PaymentContainer>
      </Container>
    </div>
  );
}

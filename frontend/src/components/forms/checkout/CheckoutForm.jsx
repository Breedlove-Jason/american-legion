import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  FormWrapper,
  Title,
  StyledForm,
  Label,
  Input,
  SubmitButton,
  Message,
} from "./CheckoutForm.styles.jsx"; // Assuming you want to reuse the login styles here.
import ApiService from "./api"; // Ensure the path is correct for your ApiService

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  // Handle real-time validation errors from the CardElement.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      setError(error.message);
      return;
    }

    try {
      // Save Stripe info
      const response = await ApiService.saveStripeInfo({
        email,
        payment_method_id: paymentMethod.id,
      });
      console.log(response.data);

      // Call backend API to create the payment session or intent
      const { data } = await ApiService.createPaymentSession({
        email,
      });

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: paymentMethod.id,
        billing_details: {
          email: email,
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        // Handle successful payment
        alert("Payment successful!");
      }
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        console.error(
          "Network error: Please check your connection or server status.",
        );
      } else {
        setError("Payment failed. Please try again.");
      }
    }
  };

  return (
    <div className={"container"}>
      <Container
        className="mt-5 custom-container"
        style={{ maxWidth: "600px" }}
      >
        <FormWrapper>
          <Title>Complete Your Payment</Title>
          <StyledForm onSubmit={handleSubmit}>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="jenny.rosen@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Label htmlFor="card-element">Credit or Debit Card</Label>
            <div className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <CardElement id="card-element" onChange={handleChange} />
            </div>
            {error && <Message $isSuccess={false}>{error}</Message>}
            <SubmitButton type="submit" disabled={!stripe}>
              Submit Payment
            </SubmitButton>
          </StyledForm>
        </FormWrapper>
      </Container>
    </div>
  );
};

export default CheckoutForm;

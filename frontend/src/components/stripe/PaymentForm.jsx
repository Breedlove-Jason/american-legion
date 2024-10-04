import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import {
  PaymentContainer,
  PaymentTitle,
  StyledForm,
  PayButton,
  Message,
} from "./Stripe.styles.jsx";

export const validationSchema = Yup.object().shape({
  paymentType: Yup.string().required("Payment type is required"),
  amount: Yup.number().when("paymentType", {
    is: "donation",
    then: Yup.number()
      .required("Donation amount is required")
      .min(1, "Donation amount must be at least $1"),
    otherwise: Yup.number().notRequired(),
  }),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const stripePromise = loadStripe(
  "pk_test_51PFnMI01foXv66KIhbVeWG24hWrFBnmaiIVcJkEp93TFWYqngYdLp84GGxdeEAbDEHIJwd69vGz4Lhys2K2mcftV00EVE4CCOc",
);

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:8000/stripe/create-checkout-session/",
        {
          ...values,
        },
      );

      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        setErrorMessage(result.error.message);
      }
    } catch (error) {
      setErrorMessage("Payment initiation failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PaymentContainer>
            <PaymentTitle>Make a Payment</PaymentTitle>
            <Formik
              initialValues={{
                paymentType: "dues",
                amount: 40,
                name: "",
                email: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <StyledForm onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Payment Type</Form.Label>
                    <Field
                      as="select"
                      name="paymentType"
                      className="form-control"
                    >
                      <option value="dues">Dues Renewal ($40)</option>
                      <option value="donation">Donation</option>
                    </Field>
                    {errors.paymentType && touched.paymentType && (
                      <div className="text-danger">{errors.paymentType}</div>
                    )}
                  </Form.Group>

                  {values.paymentType === "donation" && (
                    <Form.Group>
                      <Form.Label>Donation Amount</Form.Label>
                      <Field
                        type="number"
                        name="amount"
                        className="form-control"
                        min="1"
                      />
                      {errors.amount && touched.amount && (
                        <div className="text-danger">{errors.amount}</div>
                      )}
                    </Form.Group>
                  )}

                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Field type="text" name="name" className="form-control" />
                    {errors.name && touched.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Field type="email" name="email" className="form-control" />
                    {errors.email && touched.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </Form.Group>

                  <PayButton type="submit" disabled={loading}>
                    {loading ? "Processing..." : "Pay Now"}
                  </PayButton>
                </StyledForm>
              )}
            </Formik>
            {errorMessage && <Message>{errorMessage}</Message>}
          </PaymentContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentForm;

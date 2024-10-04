import { Container, Row, Col } from "react-bootstrap";
import { PaymentContainer, PaymentTitle } from "./Stripe.styles.jsx";

const PaymentSuccess = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PaymentContainer>
            <PaymentTitle>Payment Successful</PaymentTitle>
            <p>
              Thank you for your payment! You will receive a confirmation email
              shortly.
            </p>
          </PaymentContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccess;

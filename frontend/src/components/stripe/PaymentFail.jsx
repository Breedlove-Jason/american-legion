import { Container, Row, Col } from "react-bootstrap";
import { PaymentContainer, PaymentTitle } from "./Stripe.styles.jsx";

const PaymentFailure = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PaymentContainer>
            <PaymentTitle>Payment Failed</PaymentTitle>
            <p>
              Unfortunately, your payment could not be processed. Please try
              again later.
            </p>
          </PaymentContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentFailure;

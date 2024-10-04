// ContactForm.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import process from "process"; // Import process module
import {
  FormWrapper,
  Title,
  StyledForm,
  Label,
  Input,
  TextArea,
  SubmitButton,
  Message,
  ContactInfoWrapper,
  ContactInfoBlock,
  Icon,
  InfoTitle,
  InfoSubtitle,
} from "./ContactForm.styles.jsx";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Form } from "react-bootstrap";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        () => {
          // Remove unused result parameter
          setStateMessage({ text: "Message sent!", isSuccess: true });
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        () => {
          // Remove unused error parameter
          setStateMessage({
            text: "Something went wrong, please try again later.",
            isSuccess: false,
          });
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
      );

    e.target.reset();
  };

  return (
    <div className={"container"}>
      <Container
        className="mt-5 custom-container"
        style={{ maxWidth: "600px" }}
      >
        <FormWrapper>
          <Title>Contact Us</Title>
          <StyledForm onSubmit={sendEmail}>
            <Label>Name</Label>
            <Input type="text" name="user_name" required />
            <Label>Email</Label>
            <Input type="email" name="user_email" required />
            <Label>Phone</Label>
            <Input type="phone" name="user_phone" />
            <Form.Group controlId="contactPreference">
              <Label>Contact Preference:</Label>
              <div className="d-flex flex-wrap align-items-center mt-2">
                <div className="form-check me-3">
                  <input
                    type="radio"
                    name="contact_preference"
                    value="phone"
                    required
                    className="form-check-input"
                    id="phonePreference"
                  />
                  <label
                    htmlFor="phonePreference"
                    className="form-check-label ms-1"
                  >
                    Phone
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="contact_preference"
                    value="email"
                    required
                    className="form-check-input"
                    id="emailPreference"
                  />
                  <label
                    htmlFor="emailPreference"
                    className="form-check-label ms-1"
                  >
                    Email
                  </label>
                </div>
              </div>
            </Form.Group>
            <br />
            <Label>Message</Label>
            <TextArea name="message" rows="5" required />
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </SubmitButton>
            {stateMessage && (
              <Message $isSuccess={stateMessage.isSuccess}>
                {stateMessage.text}
              </Message>
            )}
          </StyledForm>
        </FormWrapper>
        <ContactInfoWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              marginBottom: "15px",
            }}
          >
            <ContactInfoBlock
              style={{ flex: 1, textAlign: "center", minWidth: "150px" }}
            >
              <Icon icon={faEnvelope} />
              <InfoTitle>E-mail</InfoTitle>
              <InfoSubtitle>rwtownsand84@gmail.com</InfoSubtitle>
            </ContactInfoBlock>

            <ContactInfoBlock
              style={{ flex: 1, textAlign: "center", minWidth: "150px" }}
            >
              <Icon icon={faPhone} />
              <InfoTitle>Phone</InfoTitle>
              <InfoSubtitle>530-889-8574</InfoSubtitle>
            </ContactInfoBlock>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <ContactInfoBlock
              style={{ textAlign: "center", maxWidth: "400px" }}
            >
              <Icon icon={faMapMarkerAlt} />
              <InfoTitle>Address</InfoTitle>
              <InfoSubtitle>
                Auburn Veterans Memorial Hall 100 East St., Auburn, CA 95603
              </InfoSubtitle>
            </ContactInfoBlock>
          </div>
        </ContactInfoWrapper>
      </Container>
    </div>
  );
};

export default ContactForm;

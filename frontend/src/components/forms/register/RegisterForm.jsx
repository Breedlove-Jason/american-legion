import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Col, Container, Form, Row, Alert } from "react-bootstrap";
import {
  FormWrapper,
  Input,
  Label,
  StyledForm,
  SubmitButton,
  Title,
} from "./RegisterForm.styles.jsx";
import Message from "@/components/message/Message.jsx";
import { useNavigate } from "react-router-dom";
import LocationInput from "@/components/location-input/LocationInput.jsx";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState(null); // To manage alert messages

  return (
    <div className={"container"}>
      <Container
        className="mt-5 custom-container"
        style={{ maxWidth: "600px" }}
      >
        <FormWrapper>
          <Title>Register</Title>
          <Formik
            initialValues={{
              username: "",
              email: "",
              first_name: "",
              last_name: "",
              address: "",
              phone_number: "",
              legion_number: "",
              password: "",
              confirmPassword: "",
              dd214: null,
              membership_card: null,
              branch_of_service: "",
              era: "",
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Username is required"),
              email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
              first_name: Yup.string().required("First name is required"),
              last_name: Yup.string().required("Last name is required"),
              address: Yup.string().required("Address is required"),
              phone_number: Yup.string(),
              legion_number: Yup.string(),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password"),
              dd214: Yup.mixed().required("DD214 is required"),
              branch_of_service: Yup.string().required(
                "Branch of Service is required",
              ),
              era: Yup.string().required("Era is required"),
            })}
            onSubmit={async (
              values,
              { setSubmitting, resetForm, setStatus },
            ) => {
              try {
                const formData = new FormData();
                formData.append("username", values.username);
                formData.append("email", values.email);
                formData.append("password", values.password);
                formData.append("first_name", values.first_name);
                formData.append("last_name", values.last_name);
                formData.append("address", values.address);
                formData.append("phone_number", values.phone_number);
                formData.append("legion_number", values.legion_number);
                formData.append("dd214", values.dd214);
                formData.append("membership_card", values.membership_card);
                formData.append("branch_of_service", values.branch_of_service);
                formData.append("era", values.era);

                const response = await axios.post(
                  "http://localhost:8000/api/register/",
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  },
                );

                if (response.status === 201) {
                  setFormStatus({
                    success: "Registration successful! You can now log in.",
                  });
                  resetForm();
                  navigate("/login");
                }
              } catch (error) {
                setFormStatus({
                  error: "Registration failed. Please try again.",
                });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isSubmitting,
            }) => (
              <StyledForm noValidate onSubmit={handleSubmit}>
                {/* Show alert for success or error messages */}
                {formStatus && formStatus.success && (
                  <Alert variant="success">{formStatus.success}</Alert>
                )}
                {formStatus && formStatus.error && (
                  <Alert variant="danger">{formStatus.error}</Alert>
                )}

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formFirstName" className="mb-3">
                      <Label>First Name</Label>
                      <Input
                        type="text"
                        name="first_name"
                        placeholder="Enter first name"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.first_name && !!errors.first_name}
                      />
                      {touched.first_name && errors.first_name && (
                        <Message>{errors.first_name}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formLastName" className="mb-3">
                      <Label>Last Name</Label>
                      <Input
                        type="text"
                        name="last_name"
                        placeholder="Enter last name"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.last_name && !!errors.last_name}
                      />
                      {touched.last_name && errors.last_name && (
                        <Message>{errors.last_name}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formUsername" className="mb-3">
                      <Label>Username</Label>
                      <Input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.username && !!errors.username}
                      />
                      {touched.username && errors.username && (
                        <Message>{errors.username}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Label>Email Address</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && !!errors.email}
                      />
                      {touched.email && errors.email && (
                        <Message>{errors.email}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* LocationInput Component */}
                <Form.Group controlId="formAddress" className="mb-3">
                  <Label>Address</Label>
                  <LocationInput
                    value={values.address}
                    onChange={(e) => setFieldValue("address", e.target.value)}
                    onBlur={handleBlur}
                    isInvalid={touched.address && !!errors.address}
                    errors={errors.address}
                    touched={touched.address}
                    onLocationSelected={(place) => {
                      setFieldValue("address", place.formatted_address);
                    }}
                  />
                  {touched.address && errors.address && (
                    <Message>{errors.address}</Message>
                  )}
                </Form.Group>

                <Row>
                  <Col md={6}>
                    {/* File Upload for DD214 */}
                    <Form.Group controlId="formDD214" className="mb-3">
                      <Label>Upload DD214</Label>
                      <Input
                        type="file"
                        name="dd214"
                        onChange={(event) =>
                          setFieldValue("dd214", event.target.files[0])
                        }
                        onBlur={handleBlur}
                        isInvalid={touched.dd214 && !!errors.dd214}
                      />
                      {touched.dd214 && errors.dd214 && (
                        <Message>{errors.dd214}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    {/* Legion Number */}
                    <Form.Group controlId="formLegionNumber" className="mb-3">
                      <Label>Legion Number</Label>
                      <Input
                        type="text"
                        name="legion_number"
                        placeholder="Enter legion number"
                        value={values.legion_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.legion_number && !!errors.legion_number
                        }
                      />
                      {touched.legion_number && errors.legion_number && (
                        <Message>{errors.legion_number}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* Optional File Upload for Membership Card */}
                <Form.Group controlId="formMembershipCard" className="mb-3">
                  <Label>
                    Upload American Legion Membership Card (Optional)
                  </Label>
                  <Input
                    type="file"
                    name="membership_card"
                    onChange={(event) =>
                      setFieldValue("membership_card", event.target.files[0])
                    }
                    onBlur={handleBlur}
                  />
                </Form.Group>

                {/* Branch of Service Dropdown */}
                <Form.Group controlId="formBranchOfService" className="mb-3">
                  <Label>Branch of Service</Label>
                  <Form.Select
                    name="branch_of_service"
                    value={values.branch_of_service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.branch_of_service && !!errors.branch_of_service
                    }
                  >
                    <option value="">Select Branch of Service</option>
                    <option value="Army">Army</option>
                    <option value="Navy">Navy</option>
                    <option value="Air Force">Air Force</option>
                    <option value="Marines">Marines</option>
                    <option value="Coast Guard">Coast Guard</option>
                    <option value="Space Force">Space Force</option>
                  </Form.Select>
                  {touched.branch_of_service && errors.branch_of_service && (
                    <Message>{errors.branch_of_service}</Message>
                  )}
                </Form.Group>

                {/* Era Dropdown */}
                <Form.Group controlId="formEra" className="mb-3">
                  <Label>Era of Service</Label>
                  <Form.Select
                    name="era"
                    value={values.era}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.era && !!errors.era}
                  >
                    <option value="">Select Era</option>
                    <option value="Global War on Terror">
                      Global War on Terror
                    </option>
                    <option value="Gulf War">Gulf War</option>
                    <option value="Panama">Panama</option>
                    <option value="Lebanon/Grenada">Lebanon/Grenada</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Korea">Korea</option>
                    <option value="WW2">WW2</option>
                    <option value="Other Conflicts">Other Conflicts</option>
                  </Form.Select>
                  {touched.era && errors.era && <Message>{errors.era}</Message>}
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formPassword" className="mb-3">
                      <Label>Password</Label>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && !!errors.password}
                      />
                      {touched.password && errors.password && (
                        <Message>{errors.password}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      controlId="formConfirmPassword"
                      className="mb-3"
                    >
                      <Label>Confirm Password</Label>
                      <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.confirmPassword && !!errors.confirmPassword
                        }
                      />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <Message>{errors.confirmPassword}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center">
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Register"}
                  </SubmitButton>
                </div>
              </StyledForm>
            )}
          </Formik>
        </FormWrapper>
      </Container>
    </div>
  );
};

export default RegisterForm;

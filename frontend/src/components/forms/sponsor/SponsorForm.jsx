import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Import Axios
import { Row, Col, Form, Container } from "react-bootstrap";
import {
  FormWrapper,
  Title,
  StyledForm,
  Label,
  Input,
  SubmitButton,
  SuccessMessage,
  Textarea,
} from "./SponsorForm.styles.jsx";
import Message from "../../message/Message"; // Ensure the path is correct
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import LocationInput from "@/components/location-input/LocationInput.jsx";

const SponsorForm = () => {
  const sponsorshipTypes = ["Bronze", "Silver", "Gold", "Platinum"];
  const sponsorshipDurations = [
    "One-Time",
    "Weekly",
    "Monthly",
    "Yearly",
    "Lifetime",
  ];

  return (
    <div className={"container"}>
      <Container
        className="mt-5 custom-container"
        style={{ maxWidth: "600px" }}
      >
        <FormWrapper>
          <Title>Sponsor Us</Title>
          <Formik
            initialValues={{
              companyName: "",
              contactName: "",
              email: "",
              phoneNumber: "",
              sponsorshipType: "",
              contributionAmount: "",
              sponsorshipDuration: "",
              companyWebsite: "",
              address: "",
              companyLogo: null, // Updated to handle file upload
              additionalInfo: "",
            }}
            validationSchema={Yup.object().shape({
              companyName: Yup.string().required("Company Name is required"),
              contactName: Yup.string().required("Contact Name is required"),
              email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
              phoneNumber: Yup.string().required("Phone Number is required"),
              contributionAmount: Yup.number().required(
                "Contribution Amount is required",
              ),
              sponsorshipType: Yup.string().required(
                "Sponsorship Type is required",
              ),
              sponsorshipDuration: Yup.string().required(
                "Sponsorship Duration is required",
              ),
            })}
            onSubmit={async (
              values,
              { setSubmitting, resetForm, setStatus },
            ) => {
              try {
                const formData = new FormData();
                formData.append("company_name", values.companyName);
                formData.append("contact_name", values.contactName);
                formData.append("email", values.email);
                formData.append("phone_number", values.phoneNumber);
                formData.append("sponsorship_type", values.sponsorshipType);
                formData.append(
                  "contribution_amount",
                  values.contributionAmount,
                );
                formData.append(
                  "sponsorship_duration",
                  values.sponsorshipDuration,
                );
                formData.append("company_website", values.companyWebsite);
                formData.append("company_address", values.address);
                formData.append("company_logo", values.companyLogo); // File upload
                formData.append("additional_info", values.additionalInfo);

                const response = await axios.post(
                  "http://localhost:8000/api/sponsors/",
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data", // Necessary for file uploads
                    },
                  },
                );

                if (response.status === 201) {
                  setStatus({
                    success: "Sponsorship form submitted successfully!",
                  });
                  resetForm();
                }
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
              status,
            }) => (
              <StyledForm noValidate onSubmit={handleSubmit}>
                {status && status.success && (
                  <SuccessMessage $isSuccess={true}>
                    {status.success}
                  </SuccessMessage>
                )}
                {status && status.error && <Message>{status.error}</Message>}
                <Row>
                  <Col md={12}>
                    <Form.Group controlId="formCompanyName" className="mb-3">
                      <Label>Organization/Company Name</Label>
                      <Input
                        type="text"
                        name="companyName"
                        placeholder="Enter company name"
                        value={values.companyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.companyName && !!errors.companyName}
                      />
                      {touched.companyName && errors.companyName && (
                        <Message>{errors.companyName}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formContactName" className="mb-3">
                      <Label>Contact Name</Label>
                      <Input
                        type="text"
                        name="contactName"
                        placeholder="Enter contact name"
                        value={values.contactName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.contactName && !!errors.contactName}
                      />
                      {touched.contactName && errors.contactName && (
                        <Message>{errors.contactName}</Message>
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
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formPhoneNumber" className="mb-3">
                      <Label>Phone Number</Label>
                      <Input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                      />
                      {touched.phoneNumber && errors.phoneNumber && (
                        <Message>{errors.phoneNumber}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      controlId="formSponsorshipType"
                      className="mb-3"
                    >
                      <Label>Sponsorship Type/Level</Label>
                      <Autocomplete
                        options={sponsorshipTypes}
                        getOptionLabel={(option) => option}
                        value={values.sponsorshipType || null}
                        onChange={(e, value) =>
                          setFieldValue("sponsorshipType", value)
                        }
                        onBlur={handleBlur}
                        isOptionEqualToValue={(option, value) =>
                          option === value
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Select Sponsorship Type"
                            error={
                              touched.sponsorshipType &&
                              !!errors.sponsorshipType
                            }
                            InputProps={{
                              ...params.InputProps,
                              style: {
                                backgroundColor: "#ffffff",
                                width: "100%",
                                boxSizing: "border-box",
                                height: "38px",
                              },
                            }}
                          />
                        )}
                      />
                      {touched.sponsorshipType && errors.sponsorshipType && (
                        <Message>{errors.sponsorshipType}</Message>
                      )}
                    </Form.Group>{" "}
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group
                      controlId="formContributionAmount"
                      className="mb-3"
                    >
                      <Label>Contribution Amount</Label>
                      <Input
                        type="number"
                        name="contributionAmount"
                        placeholder="Enter contribution amount"
                        value={values.contributionAmount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.contributionAmount &&
                          !!errors.contributionAmount
                        }
                      />
                      {touched.contributionAmount &&
                        errors.contributionAmount && (
                          <Message>{errors.contributionAmount}</Message>
                        )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      controlId="formSponsorshipDuration"
                      className="mb-3"
                    >
                      <Label>Sponsorship Duration</Label>
                      <Autocomplete
                        options={sponsorshipDurations}
                        getOptionLabel={(option) => option}
                        value={values.sponsorshipDuration || null}
                        onChange={(e, value) =>
                          setFieldValue("sponsorshipDuration", value)
                        }
                        onBlur={handleBlur}
                        isOptionEqualToValue={(option, value) =>
                          option === value
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Sponsorship Duration"
                            error={
                              touched.sponsorshipDuration &&
                              !!errors.sponsorshipDuration
                            }
                            InputProps={{
                              ...params.InputProps,
                              style: {
                                backgroundColor: "#ffffff",
                                width: "100%",
                                boxSizing: "border-box",
                                height: "38px",
                              },
                            }}
                          />
                        )}
                      />
                      {touched.sponsorshipDuration &&
                        errors.sponsorshipDuration && (
                          <Message>{errors.sponsorshipDuration}</Message>
                        )}
                    </Form.Group>{" "}
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formCompanyWebsite" className="mb-3">
                      <Label>Company Website</Label>
                      <Input
                        type="url"
                        name="companyWebsite"
                        placeholder="Enter company website"
                        value={values.companyWebsite}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formAddress" className="mb-3">
                      <Label>Address</Label>
                      <LocationInput
                        value={values.address}
                        onChange={(e) =>
                          setFieldValue("address", e.target.value)
                        }
                        onBlur={handleBlur}
                        isInvalid={touched.address && !!errors.address}
                        errors={errors.address}
                        touched={touched.address}
                        onLocationSelected={(place) => {
                          // Handle the selected location
                          console.log("Selected place:", place);
                        }}
                      />
                      {touched.address && errors.address && (
                        <Message>{errors.address}</Message>
                      )}
                    </Form.Group>{" "}
                  </Col>
                </Row>
                <Form.Group controlId="formCompanyLogo" className="mb-3">
                  <Label>Company Logo</Label>
                  <Input
                    type="file"
                    name="companyLogo"
                    onChange={(event) =>
                      setFieldValue("companyLogo", event.currentTarget.files[0])
                    }
                    onBlur={handleBlur}
                    accept="image/*"
                  />
                </Form.Group>
                <Form.Group controlId="formAdditionalInfo" className="mb-3">
                  <Label>Additional Information</Label>
                  <Textarea
                    rows={3}
                    name="additionalInfo"
                    placeholder="Enter any additional information"
                    value={values.additionalInfo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
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

export default SponsorForm;

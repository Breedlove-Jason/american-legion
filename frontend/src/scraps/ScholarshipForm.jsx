// Step 1: Import the necessary CSS for react-datepicker
import 'react-datepicker/dist/react-datepicker.css';

// Step 2: Ensure the DatePicker component is correctly integrated with Formik
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Form, Container } from 'react-bootstrap';
import {
  FormWrapper,
  Title,
  StyledForm,
  Label,
  Input,
  SubmitButton,
  StyledDatePicker,
} from './ScholarshipForm.styles.jsx';
import Message from '@/components/message/Message';
import DatePicker from 'react-datepicker';
import LocationInput from '@/components/location-input/LocationInput.jsx';
import axios from 'axios';

const ScholarshipForm = () => {
  return (
    <div className="container">
      <Container className="mt-5 custom-container" style={{ maxWidth: '800px' }}>
        <FormWrapper>
          <Title>Scholarship Application</Title>
          <Formik
            initialValues={{
              name: '',
              address: '',
              email: '',
              phone: '',
              dateOfBirth: '',
              relationship: '',
              veteranName: '',
              highSchoolStudents: '',
              classStudents: '',
              gpa: '',
              gpaScale: '',
              expectedGraduation: '',
              schoolOfficialName: '',
              schoolOfficialTitle: '',
              transcript: null,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              address: Yup.string().required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              phone: Yup.string().required('Required'),
              dateOfBirth: Yup.date().required('Required'),
              relationship: Yup.string().required('Required'),
              veteranName: Yup.string().required('Required'),
              highSchoolStudents: Yup.number().required('Required'),
              classStudents: Yup.number().required('Required'),
              gpa: Yup.number().required('Required'),
              gpaScale: Yup.string().required('Required'),
              expectedGraduation: Yup.date().required('Required'),
              schoolOfficialName: Yup.string().required('Required'),
              schoolOfficialTitle: Yup.string().required('Required'),
              transcript: Yup.mixed().required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const formData = new FormData();

              // Append form data to FormData object
              formData.append('name', values.name);
              formData.append('address', values.address);
              formData.append('email', values.email);
              formData.append('phone', values.phone);
              formData.append('birthday', values.dateOfBirth);
              formData.append('relationship_to_veteran', values.relationship);
              formData.append('veteran_name', values.veteranName);
              formData.append('students_in_high_school', values.highSchoolStudents);
              formData.append('students_in_class', values.classStudents);
              formData.append('cumulative_gpa', values.gpa);
              formData.append('gpa_scale', values.gpaScale);
              formData.append('graduation_date', values.expectedGraduation);
              formData.append('school_official_name', values.schoolOfficialName);
              formData.append('school_official_title', values.schoolOfficialTitle);
              formData.append('transcript', values.transcript);  // File upload

              // Axios POST request
              axios.post('http://localhost:8000/api/scholarship/', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
              .then((response) => {
                alert('Application submitted successfully!');
                resetForm();
              })
              .catch((error) => {
                console.error('Error submitting form:', error);
              })
              .finally(() => {
                setSubmitting(false);
              });
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
                {/* Name Field */}
                <Row>
                  <Col md={12}>
                    <Form.Group controlId="formName" className="mb-3">
                      <Label>Name</Label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && !!errors.name}
                      />
                      {touched.name && errors.name && (
                        <Message>{errors.name}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* Address Field */}
                <Row>
                  <Col md={12}>
                    <Form.Group controlId="formAddress" className="mb-3">
                      <Label>Address</Label>
                      <LocationInput
                        value={values.address}
                        onChange={(e) => setFieldValue('address', e.target.value)}
                        onBlur={handleBlur}
                        isInvalid={touched.address && !!errors.address}
                        errors={errors.address}
                        touched={touched.address}
                        onLocationSelected={(place) => {
                          setFieldValue('address', place.formatted_address);
                        }}
                      />
                      {touched.address && errors.address && (
                        <Message>{errors.address}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* Email and Phone Fields */}
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
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
                  <Col md={6}>
                    <Form.Group controlId="formPhone" className="mb-3">
                      <Label>Phone</Label>
                      <Input
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.phone && !!errors.phone}
                      />
                      {touched.phone && errors.phone && (
                        <Message>{errors.phone}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* Date of Birth, Relationship, and Veteran's Name Fields */}
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="formDateOfBirth" className="mb-3">
                      <Label>Date of Birth</Label>
                      <StyledDatePicker
                        selected={values.dateOfBirth}
                        onChange={(date) => setFieldValue('dateOfBirth', date)}
                        onBlur={handleBlur}
                        className={`form-control ${
                          touched.dateOfBirth && errors.dateOfBirth ? 'is-invalid' : ''
                        }`}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="MM/DD/YYYY"
                      />
                      {touched.dateOfBirth && errors.dateOfBirth && (
                        <Message>{errors.dateOfBirth}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formRelationship" className="mb-3">
                      <Label>Relationship to Veteran</Label>
                      <Input
                        type="text"
                        name="relationship"
                        placeholder="Enter your relationship to the veteran"
                        value={values.relationship}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.relationship && !!errors.relationship}
                      />
                      {touched.relationship && errors.relationship && (
                        <Message>{errors.relationship}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formVeteranName" className="mb-3">
                      <Label>Veteran's Name</Label>
                      <Input
                        type="text"
                        name="veteranName"
                        placeholder="Enter veteran's name"
                        value={values.veteranName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.veteranName && !!errors.veteranName}
                      />
                      {touched.veteranName && errors.veteranName && (
                        <Message>{errors.veteranName}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* High School, GPA, and Transcript Fields */}
                <Row>
                  <Col md={3}>
                    <Form.Group controlId="formHighSchoolStudents" className="mb-3">
                      <Label>Students in high school</Label>
                      <Input
                        type="number"
                        name="highSchoolStudents"
                        placeholder="Enter number of students"
                        value={values.highSchoolStudents}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.highSchoolStudents && !!errors.highSchoolStudents}
                      />
                      {touched.highSchoolStudents && errors.highSchoolStudents && (
                        <Message>{errors.highSchoolStudents}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                  <Form.Group controlId="formClassStudents" className="mb-3">
                      <Label>Students in class</Label>
                      <Input
                        type="number"
                        name="classStudents"
                        placeholder="Enter number of students"
                        value={values.classStudents}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.classStudents && !!errors.classStudents}
                      />
                      {touched.classStudents && errors.classStudents && (
                        <Message>{errors.classStudents}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId="formGPA" className="mb-3">
                      <Label>Cumulative GPA</Label>
                      <Input
                        type="number"
                        name="gpa"
                        placeholder="Enter GPA"
                        value={values.gpa}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.gpa && !!errors.gpa}
                      />
                      {touched.gpa && errors.gpa && (
                        <Message>{errors.gpa}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId="formGPAScale" className="mb-3">
                      <Label>GPA Scale</Label>
                      <Input
                        type="text"
                        name="gpaScale"
                        placeholder="Enter GPA scale (e.g., 4.0)"
                        value={values.gpaScale}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.gpaScale && !!errors.gpaScale}
                      />
                      {touched.gpaScale && errors.gpaScale && (
                        <Message>{errors.gpaScale}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* Expected Graduation and Transcript Upload */}
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formExpectedGraduation" className="mb-3">
                      <Label>Expected Date of Graduation</Label>
                      <StyledDatePicker
                        selected={values.expectedGraduation}
                        onChange={(date) => setFieldValue('expectedGraduation', date)}
                        onBlur={handleBlur}
                        className={`form-control ${
                          touched.expectedGraduation && errors.expectedGraduation
                            ? 'is-invalid'
                            : ''
                        }`}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="MM/DD/YYYY"
                      />
                      {touched.expectedGraduation && errors.expectedGraduation && (
                        <Message>{errors.expectedGraduation}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formTranscript" className="mb-3">
                      <Label>Transcript</Label>
                      <Input
                        type="file"
                        name="transcript"
                        onChange={(event) =>
                          setFieldValue('transcript', event.currentTarget.files[0])
                        }
                        onBlur={handleBlur}
                        accept=".pdf,.doc,.docx,.jpg,.png"
                        isInvalid={touched.transcript && !!errors.transcript}
                      />
                      {touched.transcript && errors.transcript && (
                        <Message>{errors.transcript}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* School Official Name and Title */}
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formSchoolOfficialName" className="mb-3">
                      <Label>School Official's Name</Label>
                      <Input
                        type="text"
                        name="schoolOfficialName"
                        placeholder="Enter name of school official"
                        value={values.schoolOfficialName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.schoolOfficialName && !!errors.schoolOfficialName}
                      />
                      {touched.schoolOfficialName && errors.schoolOfficialName && (
                        <Message>{errors.schoolOfficialName}</Message>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formSchoolOfficialTitle" className="mb-3">
                      <Label>School Official's Title</Label>
                      <Input
                        type="text"
                        name="schoolOfficialTitle"
                        placeholder="Enter title of school official"
                        value={values.schoolOfficialTitle}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.schoolOfficialTitle && !!errors.schoolOfficialTitle}
                      />
                      {touched.schoolOfficialTitle && errors.schoolOfficialTitle && (
                        <Message>{errors.schoolOfficialTitle}</Message>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* Submit Button */}
                <div className="d-flex justify-content-center">
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
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

export default ScholarshipForm;


import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  FormWrapper,
  Title,
  StyledForm,
  Label,
  Input,
  SubmitButton,
  Message,
} from './Login.styles.jsx';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext.jsx'; // Ensure the path is correct
import { API_URL } from '@/config/index.js';

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  return (
    <div className={'container'}>
      <Container
        className="mt-5 custom-container"
        style={{ maxWidth: '600px' }}
      >
        <FormWrapper>
          <Title>Login</Title>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={Yup.object({
              username: Yup.string().required('Username is required'),
              password: Yup.string().required('Password is required'),
            })}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
              try {
                const response = await axios.post(
                  `${API_URL}/api/login/`,
                  values,
                );

                // Assuming the backend returns the token in response.data.token
                localStorage.setItem('token', response.data.token);
                setIsAuthenticated(true);

                setStatus({ success: 'Login successful!' });

                // Redirect to a different page after successful login
                navigate('/');
              } catch (error) {
                setStatus({
                  error: 'Login failed. Please check your credentials.',
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
              isSubmitting,
              status,
            }) => (
              <StyledForm noValidate onSubmit={handleSubmit}>
                {status && status.success && (
                  <Message $isSuccess={true}>{status.success}</Message>
                )}
                {status && status.error && (
                  <Message $isSuccess={false}>{status.error}</Message>
                )}
                {touched.username && errors.username && (
                  <Message $isSuccess={false}>{errors.username}</Message>
                )}
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  $isInvalid={touched.username && !!errors.username}
                />

                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  $isInvalid={touched.password && !!errors.password}
                />
                {touched.password && errors.password && (
                  <Message $isSuccess={false}>{errors.password}</Message>
                )}

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </SubmitButton>
              </StyledForm>
            )}
          </Formik>
        </FormWrapper>
      </Container>
    </div>
  );
};

export default Login;

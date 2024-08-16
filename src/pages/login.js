import { Button, Typography, TextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Form, Formik, Field } from 'formik';
import { useState } from 'react';
import Layout from '../components/Layout';
import { loginUser } from '../api/auth';
import { useHistory } from 'react-router-dom';

const Root = styled('div')(({ theme }) => ({
  background: 'white',
  borderRadius: '12px',
  padding: '2rem 3rem',
  maxWidth: '500px',
  margin: 'auto',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

const LoginHeader = styled('div')(({ theme }) => ({
  marginBottom: '2rem',
  textAlign: 'center',

  '& .title': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  '& .subtitle': {
    color: '#5C615C',
    marginTop: '.5rem',
  },
}));

const LoginForm = styled('div')(({ theme }) => ({
  '& .field': {
    marginBottom: '1.5rem',
    width: '100%',

    '& .MuiOutlinedInput-root': {
      width: '100%',

      '& fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& input': {
      padding: '.6rem',
      width: '100%',
    }
  },
  
  '& .loginBtn': {
    background: theme.palette.primary.main,
    color: 'white',
    padding: '.8rem',
    textTransform: 'none',
    fontWeight: 600,
    marginTop: '1rem',
    width: '100%',
  }
}));

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState({ message: '', visible: false });
  const history = useHistory();

  // useEffect(() => {
  //   // Clear the token by signing out the user
  //   localStorage.clear();
  //   signOut(auth).catch((error) => {
  //     console.error("Error signing out: ", error);
  //   });
  // }, []);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (values) => {
    const { email, password } = values;

    console.log(values)

    // if (!email || !password) {
    //   setNotification({ message: 'Email and password are required.', visible: true });
    //   setTimeout(() => setNotification({ ...notification, visible: false }), 10000); // Hide after 10 seconds
    //   return;
    // }

    try {
      const result = await loginUser(email, password);
      console.log(result)
      console.log('result')
      if (result.user) {
        localStorage.setItem('authToken', result.user.accessToken); // Save token to localStorage
        setNotification({ message: 'Login successful!', visible: true });
        setTimeout(() => {
          setNotification({ ...notification, visible: false });
          history.push('/'); // Navigate to home page
        }, 2000);
        console.log(result)
      } else {
        setNotification({ message: 'Login failed. Please try again.', visible: true });
        setTimeout(() => setNotification({ ...notification, visible: false }), 10000);
      }
    } catch (error) {
      console.error('Login error:', error);
      setNotification({ message: 'An error occurred. Please try again.', visible: true });
      setTimeout(() => setNotification({ ...notification, visible: false }), 10000);
    }
  };
  
  return (
    <Layout>
      <Root>
        <LoginHeader>
          <Typography className='title' variant="h5">Login to Your Account</Typography>
          <Typography className='subtitle' variant="body1">Welcome back! Please enter your details.</Typography>
        </LoginHeader>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <LoginForm>
                <Field
                  name="email"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Email"
                  className="field"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end"></InputAdornment>
                    ),
                  }}
                />
                
                <Field
                  name="password"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Password"
                  className="field"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button onClick={handleTogglePassword}>
                          {showPassword ? 'Hide' : 'Show'}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button 
                  type="submit"
                  fullWidth
                  className="loginBtn"
                >
                  Login
                </Button>
              </LoginForm>
            </Form>
          )}
        </Formik>
      </Root>
    </Layout>
  );
};

export default LoginPage;

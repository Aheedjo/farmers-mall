import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Form, Formik } from 'formik';
import Layout from '../components/Layout';
import FormikField from '../components/FormikField';
import { registerUser } from '../api/auth';
import { useHistory } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';
import { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Root = styled('div')(({ theme }) => ({
  background: 'white',
  borderRadius: '12px',
  padding: '2rem',
  maxWidth: '500px',
  margin: 'auto',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',

  '& .header': {
    marginBottom: '2rem',
    textAlign: 'center',

    '& .title': {
      color: theme.palette.primary.main,
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    '& .subtitle': {
      color: '#5C615C',
      fontSize: '1rem',
    },
  },
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
    },
  },
  '& .signupBtn': {
    background: theme.palette.primary.main,
    color: 'white',
    padding: '.8rem',
    textTransform: 'none',
    fontWeight: 600,
    marginTop: '1rem',
    width: '100%',
  },
  '& .loginLink': {
    textAlign: 'center',
    marginTop: '1rem',

    '& a': {
      color: theme.palette.primary.main,
      fontWeight: 600,
      textDecoration: 'none',
    }
  },
  '& .loginLink': {
    textAlign: 'center',
    marginTop: '1rem',

    '& a': {
      color: theme.palette.primary.main,
      fontWeight: 600,
      textDecoration: 'none',
    }
  }
}));

const SignUp = () => {
  const history = useHistory();
  const handleSignUp = async (values) => {
  const { username, email, password } = values;

    // if (!email || !password || !username) {
    //   setNotification({ message: 'Username, email, and password are required.', visible: true });
    //   setTimeout(() => setNotification({ ...notification, visible: false }), 10000); // Hide after 10 seconds
    //   return;
    // }
  
    try {
      const result = await registerUser(email, password);
      if (result.user) {
        localStorage.setItem('authToken', result.user.accessToken);

        // Save user data to Firestore
        await setDoc(doc(firestore, "users", result.user.uid), {
          username,
          email
        });

        history.push('/'); // Navigate to home page
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  useEffect(() => {
    // Clear the token by signing out the user
    localStorage.clear();
    signOut(auth).catch((error) => {
      console.error("Error signing out: ", error);
    });
  }, []);

  return (
    <Layout>
      <Root>
        <div className="header">
          <Typography className="title" variant="h5">Sign Up</Typography>
          <Typography className="subtitle" variant="body1">Create your account to start shopping!</Typography>
        </div>

        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            handleSignUp(values)
          }}
        >
          <Form>
            <FormikField
              name="username"
              variant="outlined"
              color="primary"
              label="Username"
              className="field"
              inputProps={{
                placeholder: 'Enter your username'
              }}
            />
            <FormikField
              name="email"
              variant="outlined"
              color="primary"
              label="Email"
              className="field"
              inputProps={{
                placeholder: 'Enter your email'
              }}
            />
            <FormikField
              name="password"
              variant="outlined"
              color="primary"
              label="Password"
              type="password"
              className="field"
              inputProps={{
                placeholder: 'Enter your password'
              }}
            />

            <Button 
              type="submit" 
              variant="contained" 
              className="signupBtn"
            >
              Sign Up
            </Button>
          </Form>
        </Formik>

        <div className="loginLink">
          <Typography variant="body2">
            Already have an account? <a href="/login">Login</a>
          </Typography>
        </div>
      </Root>
    </Layout>
  );
};

export default SignUp;

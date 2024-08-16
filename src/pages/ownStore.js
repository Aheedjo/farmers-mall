import { Button, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Form, Formik, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import Layout from '../components/Layout';
import { createStore } from '../api/store';
import { fileToBase64 } from '../helpers/fileToBase64';

const Root = styled('div')(({ theme }) => ({
  background: 'white',
  borderRadius: '12px',
  padding: '2rem 3rem',
  maxWidth: '600px',
  margin: 'auto',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

const Header = styled('div')(({ theme }) => ({
  marginBottom: '2rem',
  textAlign: 'center',
  '& .title': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
}));

const FormContainer = styled('div')(({ theme }) => ({
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
  '& .submitBtn': {
    background: theme.palette.primary.main,
    color: 'white',
    padding: '.8rem',
    textTransform: 'none',
    fontWeight: 600,
    marginTop: '1rem',
    width: '100%',
  },
}));

const OwnStorePage = () => {
  const [user, setUser] = useState(null); // State to hold the logged-in user
  const [imageBase64, setImageBase64] = useState(''); // State to hold the base64 image
  const history = useHistory();
  const [fileName, setFileName] = useState(''); // State to hold the file name

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleFileChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const base64 = await fileToBase64(file);
      setImageBase64(base64);
      setFileName(file.name);
    }
  };

  const handleStoreCreation = async (values) => {
    try {
      if (user) {
        const storeData = {
          ...values,
          image: imageBase64,
          owner: user.uid,
        };

        const newStore = await createStore(storeData);
        history.push(`/store/${newStore.id}`);
      } else {
        console.error('User not authenticated');
      }
    } catch (error) {
      console.error('Error creating store:', error);
    }
  };

  return (
    <Layout>
      <Root>
        <Header>
          <Typography className='title' variant="h5">Create Your Store</Typography>
        </Header>

        <Formik
          initialValues={{
            title: '',
            status: 'active',
            description: '',
            category: '',
          }}
          onSubmit={(values) => handleStoreCreation(values)}
        >
          {({ handleChange, handleBlur }) => (
            <Form>
              <FormContainer>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ marginBottom: '1.5rem', width: '100%' }}
                />

                {fileName && (
                  <Typography variant="body2" style={{ marginBottom: '1.5rem' }}>
                    Selected file: {fileName}
                  </Typography>
                )}

                <Field
                  name="title"
                  as={TextField}
                  variant="outlined"
                  label="Store Title"
                  className="field"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                
                <Field
                  name="description"
                  as={TextField}
                  variant="outlined"
                  label="Description"
                  className="field"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  multiline
                  rows={4}
                />

                <Field
                  name="category"
                  as={TextField}
                  variant="outlined"
                  label="Category"
                  className="field"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Button 
                  type="submit"
                  fullWidth
                  className="submitBtn"
                >
                  Create Store
                </Button>
              </FormContainer>
            </Form>
          )}
        </Formik>
      </Root>
    </Layout>
  );
};

export default OwnStorePage;

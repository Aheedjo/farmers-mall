import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import Layout from '../components/Layout';

const Root = styled('div')(({ theme }) => ({
  padding: '2rem 0',
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
}));

const ContactUs = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to an API)
    console.log('Form Submitted:', formValues);
  };

  return (
    <Layout>

      <Root>
        <Container maxWidth="md">
          <PaperStyled>
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              We would love to hear from you! If you have any questions or feedback, please fill out the form below and we’ll get back to you as soon as possible.
            </Typography>

            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Subject"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box textAlign="center">
                    <Button type="submit" variant="contained" color="primary">
                      Send Message
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>

            <Box mt={4} textAlign="center">
              <Typography variant="h6">Contact Information</Typography>
              <Typography variant="body1">Email: support@example.com</Typography>
              <Typography variant="body1">Phone: (123) 456-7890</Typography>
              <Typography variant="body1">Address: 123 Example St, City, Country</Typography>
            </Box>

            {/* Team Section */}
            <Box mt={6} textAlign="center">
              <Typography variant="h6">Our Team</Typography>
              <Typography variant="body1" paragraph>
                This app was created by the following students:
              </Typography>
              <Typography variant="body1">U17CO1016</Typography>
              <Typography variant="body1">U17CO1026</Typography>
              <Typography variant="body1">U17CO1010</Typography>
              <Typography variant="body1">U17CO1041</Typography>
              <Typography variant="body1">U17CO1047</Typography>
              <Typography variant="body1">U18CO2003</Typography>
              <Typography variant="body1">U18CO2033</Typography>
              <Typography variant="body1">U18CO2034</Typography>
              <Typography variant="body1">U18CO2039</Typography>
            </Box>
          </PaperStyled>
        </Container>
      </Root>
    </Layout>
  );
};

export default ContactUs;

import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Layout from "../components/Layout";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CheckoutContainer = styled(Container)(({ theme }) => ({
  padding: '2rem',
  maxWidth: '800px',
  background: '#fff'
}));

const ProductDetails = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  marginBottom: '2rem',
  display: 'flex',
  alignItems: 'center',
  background: '#D3D3D3'
}));

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  });

  const history = useHistory();

  const handleCompleteTransaction = () => {
    history.push('payment')
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleCompleteTransaction()
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <Layout>
      <CheckoutContainer>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>
        <ProductDetails>
          <img 
          src='imgs/index13.png' 
          alt="Pure Maize" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '1rem' }} />
          <div>
            <Typography variant="h6">Chisom & sons farms</Typography>
            <Typography variant="body1">Price: N20000/Kg</Typography>
            <Typography variant="body2">Measure: Kg</Typography>
          </div>
        </ProductDetails>
        <ProductDetails>
          <img 
          src='imgs/index6.png' 
          alt="Pure Maize" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '1rem' }} />
          <div>
            <Typography variant="h6">Guava man</Typography>
            <Typography variant="body1">Price: 9500/Kg</Typography>
            <Typography variant="body2">Measure: Bag</Typography>
          </div>
        </ProductDetails>
        <ProductDetails>
          <img 
          src='imgs/index8.png' 
          alt="Pure Maize" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '1rem' }} />
          <div>
            <Typography variant="h6">Yello Maize</Typography>
            <Typography variant="body1">Price: 9500/Bag</Typography>
            <Typography variant="body2">Measure: Bag</Typography>
          </div>
        </ProductDetails>
        <Typography variant="h5" gutterBottom>
          Shipping Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Full Name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                label="Shipping Address"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="paymentMethod"
                label="Payment Method"
                variant="outlined"
                fullWidth
                required
                value={formData.paymentMethod}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '2rem' }}
          >
            Complete Purchase
          </Button>
        </form>
      </CheckoutContainer>
    </Layout>
  );
};

export default CheckoutPage;

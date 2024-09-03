// src/pages/PaymentPage.js

import React from 'react';
import { Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const PaymentPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
      Payment Processing
      </Typography>
      <Typography variant="body1" gutterBottom>
        Thank you for your purchase. Please complete the payment process on this page.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        style={{ marginTop: '20px' }}
      >
        Complete Transaction
      </Button>
    </div>
  );
};

export default PaymentPage;

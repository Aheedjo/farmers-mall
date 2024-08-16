import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createProduct } from '../api/product';
import { Typography, Container, Button, TextField, Box, Card, CardContent } from '@mui/material';
import Layout from '../components/Layout';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  background: 'white',
  borderRadius: '12px',
  padding: '2rem 3rem',
  maxWidth: '500px',
  margin: 'auto',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

const CreateProductPage = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
  });
  const [notification, setNotification] = useState({ message: '', visible: false });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createProduct(product);
      if (result.id) {
        history.push(`/product/${result.id}`);
      } else {
        setNotification({ message: 'Failed to create product. Please try again.', visible: true });
      }
    } catch (error) {
      console.error('Error creating product:', error);
      setNotification({ message: 'An error occurred. Please try again.', visible: true });
    }
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <Root>
          <Typography variant="h5" gutterBottom>Create New Product</Typography>
          <Card variant="outlined" sx={{ padding: '2rem' }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Title"
                  variant="outlined"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={4}
                />
                <TextField
                  fullWidth
                  label="Price"
                  variant="outlined"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Image URL"
                  variant="outlined"
                  name="image"
                  value={product.image}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Category"
                  variant="outlined"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  margin="normal"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '1rem' }}
                >
                  Create Product
                </Button>
              </form>
            </CardContent>
          </Card>
        </Root>
      </Container>
    </Layout>
  );
};

export default CreateProductPage;

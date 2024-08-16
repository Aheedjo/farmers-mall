import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getProductById, updateProduct } from '../api/product'; // Ensure you have these API functions
import { Typography, Container, Box, Button, TextField, Card, CardContent, CardMedia } from '@mui/material';
import Layout from '../components/Layout';
import { styled } from '@mui/material/styles';
import Carousel from './index';
import ProductCard from './index';
import { getProductsByStoreId } from '../api/store';

const Root = styled('div')(({ theme }) => ({
  background: 'white',
  borderRadius: '12px',
  padding: '2rem 3rem',
  maxWidth: '100%',
  margin: 'auto',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  marginBottom: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    maxWidth: '200px',
    borderRadius: '8px',
  },
}));

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
        setUpdatedProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProductsByStoreId();
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await updateProduct(id, updatedProduct);
      setProduct(updatedProduct);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating product details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddProductClick = () => {
    history.push('/create-product');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Layout>
      <Container maxWidth="lg">
        <Root>
          <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'row', padding: '2rem' }}>
            <ImageContainer>
              <img src={product.image} alt={product.title} />
            </ImageContainer>
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h4" gutterBottom>{product.title}</Typography>
              {isEditing ? (
                <>
                  <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    name="title"
                    value={updatedProduct.title}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    name="description"
                    value={updatedProduct.description}
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
                    value={updatedProduct.price}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Category"
                    variant="outlined"
                    name="category"
                    value={updatedProduct.category}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSaveClick}
                    style={{ marginTop: '1rem' }}
                  >
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <Typography variant="h6" mt={2}>Description</Typography>
                  <Typography>{product.description}</Typography>
                  <Typography variant="h6" mt={2}>Price</Typography>
                  <Typography>${product.price}</Typography>
                  <Typography variant="h6" mt={2}>Category</Typography>
                  <Typography>{product.category}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEditClick}
                    style={{ marginTop: '1rem' }}
                  >
                    Edit Details
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAddProductClick}
            style={{ marginTop: '2rem' }}
          >
            Add Product
          </Button>
          <Carousel title="All Products" slidesToShow={4} style={{ marginTop: '2rem' }}>
            {products.map((prod) => (
              <ProductCard
                key={prod.id}
                image={prod.image}
                title={prod.title}
                price={prod.price}
                measure={prod.measure}
                seller={prod.seller}
                progress={prod.progress}
                status={prod.status}
                rating={prod.rating}
              />
            ))}
          </Carousel>
        </Root>
      </Container>
    </Layout>
  );
};

export default ProductDetailsPage;

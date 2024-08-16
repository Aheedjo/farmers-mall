import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStoreById, updateStore } from '../api/store';
import { Typography, Container, Button, TextField, Card, CardContent, CardMedia, Box } from '@mui/material';
import Layout from '../components/Layout';
import { styled } from '@mui/material/styles';

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 10%',
  marginRight: theme.spacing(2),
  '& img': {
    width: '100%',
    borderRadius: '8px',
    objectFit: 'cover',
    height: '600px',
  },
}));

const StoreDetailsPage = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedStore, setUpdatedStore] = useState({});

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const storeData = await getStoreById(id);
        setStore(storeData);
        setUpdatedStore(storeData);
      } catch (error) {
        console.error('Error fetching store details:', error);
      }
    };

    fetchStore();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await updateStore(id, updatedStore);
      setStore(updatedStore);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating store details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStore((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (!store) return <div>Loading...</div>;

  return (
    <Layout>
      <Container maxWidth="lg">
        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'row', margin: 'auto', padding: '2rem' }}>
          <ImageContainer>
            <img src={store.image} alt={store.title} />
          </ImageContainer>
          <CardContent sx={{ flex: '1' }}>
            <Typography variant="h4" gutterBottom>{store.title}</Typography>
            {isEditing ? (
              <>
                <TextField
                  fullWidth
                  label="Title"
                  variant="outlined"
                  name="title"
                  value={updatedStore.title}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  name="description"
                  value={updatedStore.description}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={4}
                />
                <TextField
                  fullWidth
                  label="Category"
                  variant="outlined"
                  name="category"
                  value={updatedStore.category}
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
                <Typography>{store.description}</Typography>
                <Typography variant="h6" mt={2}>Category</Typography>
                <Typography>{store.category}</Typography>
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
      </Container>
    </Layout>
  );
};

export default StoreDetailsPage;

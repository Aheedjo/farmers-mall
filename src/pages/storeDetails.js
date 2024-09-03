import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getStoreById, updateStore } from '../api/store';
import { Typography, Container, Button, TextField, Card, CardContent, CardMedia, Box } from '@mui/material';
import Layout from '../components/Layout';
import { styled } from '@mui/material/styles';
import { LinearProgress, Rating } from '@mui/material';

import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material';
import Slider from "react-slick";

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

const Section3 = styled('div')(({ theme }) => ({
  marginTop: '2rem'
}));

export const Carousel = ({ title, children, slidesToShow = 5, background = 'inherit', contentPadding = '0' }) => {
  const Root = styled('div')(({ theme }) => ({
    background: 'white',
    borderRadius: '12px',

    '& .header': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 1.5rem',

      '& .title': {
        color: '#258D53',
        fontWeight: 500,
      },
      '& .moreBtn': {
        color: '#258D53',
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '1.1rem'
      }
    },
    '& .cover': {
      padding: contentPadding,
    },
    '& .slider': {
      position: 'relative',
      background: background,

      '& .content': {
        padding: '0 1rem',
      },
      '& .slideBtn': {
        background: '#0080363B',
        position: 'absolute',
        height: '100%',
        zIndex: 1000,
        borderRadius: '4px',
        display: 'inline-flex',
        justifyContent: 'center',
        flexDirection: 'column',
        transition: '.2s ease',
        cursor: 'pointer',
        
        '& .icon': {
          fontSize: '3rem',
          color: 'white'
        },
        '&:hover': {
          background: 'rgba(0, 128, 54, 0.5)',
          transition: '.2s ease',
        },
        '&.next': {
          right: 0,
          top: 0
        }
      }
    }
  }));

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  const slider = useRef(null);

  const nextSlide = () => {
    if (slider.current)
      slider.current.slickNext();
  };

  const prevSlide = () => {
    if (slider.current)
      slider.current.slickPrev();
  };

  return (
    <Root>
      <div className="header">
        <Typography className='title' variant="h6">{title}</Typography>
      </div>

      <div className='cover'>
        <div className='slider'>
          <div className="slideBtn" onClick={prevSlide}>
            <KeyboardArrowLeftRounded className='icon'/>
          </div>

          <div className="content">
            <Slider {...settings} ref={slider}>
              {children}
            </Slider>
          </div>

          <div className="slideBtn next" onClick={nextSlide}>
            <KeyboardArrowRightRounded className='icon'/>
          </div>
        </div>
      </div>
    </Root>
  );
};

export const ProductCard = ({ image, title, price, measure, seller, progress, status, rating }) => {
  const Root = styled('div')(({ theme }) => ({
    display: 'inline',
    width: '100%',
    
    '& .body': {
      padding: '0 1rem',
    },
    '& img': {
      width: '100%',
      height: '290px',
      //objectFit: 'contain',
      padding: '0 1rem',
    },
    '& .title': {
      color: '#5C615C',
      marginTop: '.3rem',
      fontWeight: 600,
    },
    '& .price': {
      color: 'black',
      marginTop: '.3rem',
      fontWeight: 700,

      '& .measure': {
        color: '#5C615C',
        fontSize: '1rem',
        fontWeight: 600,
      }
    },
    '& .seller': {
      color: '#5C615C',
      marginTop: '0',
      fontWeight: 600,
      fontSize: '1rem'
    },
    '& .progress': {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '12px',
      marginTop: '.8rem',
      height: '7px',

      '&.MuiLinearProgress-colorPrimary': {
        background: 'white',
        border: `2px solid ${theme.palette.primary.main}`
      }
    },
    '& .status': {
      marginTop: '.2rem',
      fontWeight: 500
    },
    '& .rating': {
      color: theme.palette.primary.main,
      marginTop: '.5rem',

      '& .MuiRating-iconEmpty': {
        color: theme.palette.primary.main,
      }
    }
  }));

  return (
    <Root>
      <img src={image} alt="Category"/>
      
      <div className="body">
        <Typography className='title' variant="h6">
          {title}
        </Typography>
        <Typography className='price' variant="h5">
          N{price}<span className='measure'>/{measure}</span>
        </Typography>
        <LinearProgress className="progress" variant="determinate" value={progress} />
        <Typography className='status' variant="body1" color="primary">
          {status}
        </Typography>
        <Rating className='rating' name="read-only" value={rating} readOnly />
      </div>
    </Root>
  );
};

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
        <Section3>
          <Carousel title="Your Products" slidesToShow={3}>
            <ProductCard
              image="imgs/index9.png"
              title="Yellow Maize"
              price="9500.00"
              measure="Bag"
              progress={100}
              status="Harvested and Ready for shipping"
              rating={4}
            />
            <ProductCard
              image="imgs/index9.png"
              title="Yellow Maize"
              price="9500.00"
              measure="Bag"
              progress={100}
              status="Harvested and Ready for shipping"
              rating={4}
            />
            <ProductCard
              image="imgs/index9.png"
              title="Yellow Maize"
              price="9500.00"
              measure="Bag"
              progress={100}
              status="Harvested and Ready for shipping"
              rating={4}
            />
            <ProductCard
              image="imgs/index9.png"
              title="Yellow Maize"
              price="9500.00"
              measure="Bag"
              progress={100}
              status="Harvested and Ready for shipping"
              rating={4}
            />
          </Carousel>
        </Section3>
      </Container>
    </Layout>
  );
};

export default StoreDetailsPage;

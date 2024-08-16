import { useEffect, useRef, useState } from 'react';
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material';
import { Button, Grid, LinearProgress, ListItemButton, ListItemIcon, ListItemText, Rating, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from "react-slick";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import { getProductsByStoreId, getAllStores, getStoresByUserId } from '../api/store';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig';
import Link from '../components/Link';
import { useHistory } from 'react-router-dom';

const Root = styled('div')(({ theme }) => ({
  
}));

const Section1 = styled('div')(({ theme }) => ({
  '& .inner': {
    height: '100%',
  },
  '& .categories': {
    background: theme.palette.primary.main,
    borderRadius: '12px',
    padding: '1rem',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    
    '& .header': {
      background: 'inherit',
      color: 'white',
      borderRadius: '12px',
      fontWeight: 600,
      fontSize: '1.1rem'
    },
    '& .list': {
      background: 'inherit',
      borderRadius: '12px',
      color: theme.colors.textLight,
      fontWeight: 500,
    }
  },
  '& .sorts': {
    background: theme.colors.primaryVariant,
    borderRadius: '12px',
    padding: '1rem',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    
    '& .header': {
      background: 'inherit',
      color: 'white',
      borderRadius: '12px',
      fontWeight: 600,
      fontSize: '1.1rem'
    },
    '& .list': {
      background: 'inherit',
      borderRadius: '12px',
      color: theme.colors.textLight,
      fontWeight: 500,
    }
  },
  '& .col3': {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '.5rem',
  },
  '& .plantCard': {
    background: 'url(imgs/index1.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    padding: '2rem 1rem',
    borderRadius: '12px',
    position: 'relative',

    '& .title': {
      color: theme.colors.textLight,
      fontWeight: 500,
    },
    '& .btn': {
      background: '#FFFAFA',
      color: theme.palette.primary.main,
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
    }
  },
  '& .shopCard': {
    background: 'url(imgs/index1.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    padding: '2rem 1rem',
    borderRadius: '12px',
    position: 'relative',

    '& .title': {
      color: theme.colors.textLight,
      fontWeight: 500,
    },
    '& .btn': {
      background: '#FFFAFA',
      color: theme.palette.primary.main,
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
    }
  },
  '& .middle': {
    background: 'url(imgs/index3.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    padding: '2rem 1rem',
    borderRadius: '12px',
    position: 'relative',

    '& .title': {
      textAlign: 'center', 
      color: 'white',
      fontWeight: 600,
    },
    '& .subtitle': {
      marginTop: '1.5rem',
      fontWeight: 600,
      textAlign: 'center', 
      color: 'white',
    },
    '& .inner': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    '& .btns': {
      display: 'flex',
      justifyContent: 'end',
      paddingBottom: '5rem',
      columnGap: '4rem',

      '& .btnStore': {
        background: '#FFFAFA',
        color: theme.palette.primary.main,
        borderRadius: '39px',
        padding: '.2rem 1.1rem',
      },
      '& .btnContact': {
        background: 'inherit',
        color: theme.colors.textLight,
        borderRadius: '39px',
        padding: '.2rem 1.1rem',
        border: `3px solid ${theme.colors.textLight}`,
      }
    },
  }
}));

const Section2 = styled('div')(({ theme }) => ({
  marginTop: '2rem'
}));

const Section3 = styled('div')(({ theme }) => ({
  marginTop: '2rem'
}));

const Section4 = styled('div')(({ theme }) => ({
  marginTop: '2rem'
}));

const Section5 = styled('div')(({ theme }) => ({
  marginTop: '2rem'
}));

const CategoryItem = ({ image, title }) => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <img src={image} alt="Icon"/>
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
};

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
        <Link href="/stores">
          <Button 
            variant="text" 
            color="primary"
            className="moreBtn"
            endIcon={<KeyboardArrowRightRounded color='primary'/>}
          >
            See more
          </Button>
        </Link>
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

const CategoryCard = ({ image, title }) => {
  const Root = styled('div')(({ theme }) => ({
    display: 'inline',
    width: '100%',
    textAlign: 'center',

    '& img': {
      width: '290px',
      height: '290px',
      //objectFit: 'contain',
      padding: '0 1rem',
    },
    '& .title': {
      color: '#5C615C',
      marginTop: '.5rem',
      marginBottom: '1rem'
    }
  }));

  return (
    <Root>
      <img src={image} alt="Category"/>
      <Typography className='title' variant="h6">
        {title}
      </Typography>
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

const StoreCard = ({ image, title, status, rating, description, id }) => {
  const history = useHistory();

  const Root = styled('div')(({ theme }) => ({
    display: 'inline',
    width: '100%',
    background: 'white',
    borderRadius: '12px',
    '& .body': {
      padding: '0 1rem',
      background: 'white',
      borderRadius: '12px',
    },
    '& .image': {
      width: '100%',
      height: '290px',
      padding: '0 1rem',
    },
    '& .title': {
      color: '#5C615C',
      fontWeight: 600,
      marginRight: '.5rem',
    },
    '& .verified': {
      width: '30px',
    },
    '& .status': {
      marginTop: '0',
      fontWeight: 600,
    },
    '& .description': {
      color: '#5C615C',
      fontWeight: 500,
      fontSize: '1rem',
    },
    '& .rating': {
      color: theme.palette.primary.main,
      '& .MuiRating-iconEmpty': {
        color: theme.palette.primary.main,
      },
    },
    '& .moreBtn': {
      color: '#258D53',
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1.1rem',
    },
  }));

  const handleVisitStoreClick = () => {
    history.push(`/store/${id}`);
  };

  return (
    <Root>
      <img src={image} className="image" alt="Store" />
      <div className="body">
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '.3rem' }}>
          <Typography className="title" variant="h6">
            {title}
          </Typography>
          <img src="/imgs/verified.svg" className="verified" alt="Verified" />
        </div>
        <Typography className="status" variant="body1" color="primary">
          {status}
        </Typography>
        <Typography className="description" variant="body1">
          {description}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '.5rem' }}>
          <Rating className="rating" name="read-only" value={rating} readOnly />
          <Button
            variant="text"
            color="primary"
            className="moreBtn"
            endIcon={<KeyboardArrowRightRounded color="primary" />}
            onClick={handleVisitStoreClick}
          >
            Visit Store
          </Button>
        </div>
      </div>
    </Root>
  );
};

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);

  const fetchProducts = async () => {
    try {
      const allProducts = await getProductsByStoreId(user.uid);
      console.log(allProducts)
      setProducts(allProducts);
      console.log(products)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchStores = async () => {
    try {
      const storeData = await getStoresByUserId();
      setStores(storeData);
      console.log(storeData)
    } catch (error) {
      console.error('Error fetching stores:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser)
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchProducts();
      fetchStores();
    }
  }, [])

  return (
    <Layout>
      <Root>
        <Typography className='title' variant="h3" component="div">
          Your Dashboard
        </Typography>
        <Section3>
          <Carousel title="Your Products" slidesToShow={4}>
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

        <Section4>
          <Carousel title="Your Stores" slidesToShow={3} background='inherit' contentPadding='.5rem'>
            <StoreCard
              image="imgs/index13.png"
              title="Chisom & Sons Farms."
              status="Maize farmer"
              description="I plant two types of maize (white and red) and.."
              rating={4}
            />
            <StoreCard
              image="imgs/index12.png"
              title="Chisom & Sons Farms."
              status="Maize farmer"
              description="I plant two types of maize (white and red) and.."
              rating={4}
            />
            <StoreCard
              image="imgs/index11.png"
              title="A Domadoes."
              status="Tomato farmer"
              description="I plant two types of maize (white and red) and.."
              rating={4}
            />
          </Carousel>
        </Section4>
      </Root>
    </Layout>
  );
};

export default DashboardPage
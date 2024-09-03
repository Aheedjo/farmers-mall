import { useEffect, useRef, useState } from 'react';
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material';
import { Button, Grid, LinearProgress, ListItemButton, ListItemIcon, ListItemText, Rating, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from "react-slick";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import { getProductsByStoreId, getAllStores } from '../api/store';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Link from '../components/Link';

const data = {
  'image':"imgs/index13.png",
  'title':"Chisom & Sons Farms.",
  'status':"Maize farmer",
  'description':"I plant two types of maize (white and red) and..",
  'rating': 4
}

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
        <Button 
          variant="text" 
          color="primary"
          className="moreBtn"
          endIcon={<KeyboardArrowRightRounded color='primary'/>}
        >
          See more
        </Button>
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
  const history = useHistory();

  const handleClick = () => {
    history.push(`/checkout`);
  };

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
        <Typography className='seller' variant="h6">
          Seller: {seller}
        </Typography>

        <LinearProgress className="progress" variant="determinate" value={progress} />
        <Typography className='status' variant="body1" color="primary">
          {status}
        </Typography>
        <Rating className='rating' name="read-only" value={rating} readOnly />
        <Button 
          variant="text" 
          color="primary"
          className="moreBtn"
          endIcon={<KeyboardArrowRightRounded color='primary'/>}
          onClick={handleClick}
        >
          Order now!
        </Button>
      </div>
    </Root>
  );
};

const StoreCard = ({ image, title, status, rating, description }) => {
  const Root = styled('div')(({ theme }) => ({
    display: 'inline',
    width: '100%',
    background: 'white',
    borderRadius: '12px',
    
    '& .body': {
      padding: '0 1rem',
      //margin: '0 1rem',
      background: 'white',
      borderRadius: '12px',
    },
    '& .image': {
      width: '100%',
      height: '290px',
      //objectFit: 'contain',
      padding: '0 1rem',
    },
    '& .title': {
      color: '#5C615C',
      fontWeight: 600,
      marginRight: '.5rem'
    },
    '& .verified': {
      width: '30px',
    },
    '& .status': {
      marginTop: '0',
      fontWeight: 600
    },
    '& .description': {
      color: '#5C615C',
      fontWeight: 500,
      fontSize: '1rem'
    },
    '& .rating': {
      color: theme.palette.primary.main,

      '& .MuiRating-iconEmpty': {
        color: theme.palette.primary.main,
      }
    },
    '& .moreBtn': {
      color: '#258D53',
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1.1rem',
      display: 'block'
    }
  }));

  return (
    <Root>
      <img src={image} className="image" alt="Category"/>
      
      <div className="body">
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '.3rem', }}>
          <Typography className='title' variant="h6">
            {title}
          </Typography>
          <img src="/imgs/verified.svg" className="verified" alt="Verified"/>
        </div>

        <Typography className='status' variant="body1" color="primary">
          {status}
        </Typography>
        <Typography className='description' variant="body1">
          {description}
        </Typography>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '.5rem', }}>
          <Rating className='rating' name="read-only" value={rating} readOnly />
          <Link href="/stores">
            <Button 
              variant="text" 
              color="primary"
              className="moreBtn"
              endIcon={<KeyboardArrowRightRounded color='primary'/>}
            >
              Visit Store
            </Button>
          </Link>
        </div>
      </div>
    </Root>
  );
};

const Index = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([
    data, data
  ]);

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
      const storeData = await getAllStores();
      setStores(storeData);
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
        <Section1>
          <Grid width="100%" container alignItems="stretch" spacing={1}>
            <Grid item xs={12} md={8}>
              <div className='middle'>
                <Grid container alignItems="stretch" style={{ height: '100%' }}>
                  <Grid item md={5}></Grid>
                  <Grid item md={7}>
                    <div className='inner'>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ paddingLeft: '8rem', paddingTop: '50%' }}>
                          <Typography className='title' variant="h3" component="div">
                            ARE YOU A FARMER?
                          </Typography>
                          <Typography className='subtitle' variant="h6" component="div">
                            You can bring your local presence online
                          </Typography>
                        </div>

                        <div style={{ flex: 1 }}/>

                        <div className='btns'>
                          <Link href="/own-store" className="brand">
                            <CustomButton 
                              variant="contained" 
                              color="secondary" 
                              className="btnStore"
                            >
                              Own a Store
                            </CustomButton>
                          </Link>
                          <Link href="/contact" className="brand">
                            <CustomButton
                              variant="contained" 
                              color="secondary"
                              className="btnContact"
                            >
                              Contact Us
                            </CustomButton>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className='col3'>
                <div className="plantCard">
                  <img src="imgs/plant.svg" alt="Plant"/>
                  <Typography className='title' variant="h6" component="div">
                    Order a product even before it is harvested.
                  </Typography>

                  <Link href="/products">
                    <CustomButton 
                      variant="contained" 
                      color="secondary" 
                      className="btn"
                    >
                      View Products
                    </CustomButton>
                  </Link>
                </div>
                
                <div className="shopCard">
                  <img src="imgs/shop.svg" alt="Plant"/>
                  <Typography className='title' variant="h6" component="div">
                    Start buying  raw and fresh foods directly from your closest farms
                  </Typography>

                  <Link href="/stores">
                    <CustomButton 
                      variant="contained" 
                      color="secondary" 
                      className="btn"
                    >
                      Visit Sores
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </Section1>

        <Section2>
          <Carousel title="Store Categories">
            <CategoryCard
              image="imgs/index4.png"
              title="Grains farmers"
            />
            <CategoryCard
              image="imgs/index5.png"
              title="Cassava farmers"
            />
            <CategoryCard
              image="imgs/index6.png"
              title="Vegetables farmers"
            />
            <CategoryCard
              image="imgs/index7.png"
              title="Fruit farmers"
            />
            <CategoryCard
              image="imgs/index4.png"
              title="Tubers farmers"
            />
          </Carousel>
        </Section2>

        <Section3>
          <Carousel title="All Products" slidesToShow={4}>
            <ProductCard
              image="imgs/index7.png"
              title="Yellow Maize"
              price="9500.00"
              measure="Bag"
              seller="Abdullahi Farms."
              progress={100}
              status="Harvested and Ready for shipping"
              rating={2}
            />
            <ProductCard
              image="imgs/index6.png"
              title="Guava man"
              price="9500.00"
              measure="Bag"
              seller="Abdullahi Farms."
              progress={100}
              status="Harvested and Ready for shipping"
              rating={4}
            />
            <ProductCard
              image="imgs/index9.png"
              title="Yellow Maize"
              price="9500.00"
              measure="Bag"
              seller="Abdullahi Farms."
              progress={100}
              status="Harvested and Ready for shipping"
              rating={4}
            />
            <ProductCard
              image="imgs/index10.png"
              title="Yellow Maize"
              price="9500.00"
              measure="Bag"
              seller="Abdullahi Farms."
              progress={100}
              status="Harvested and Ready for shipping"
              rating={4}
            />
          </Carousel>
        </Section3>

        <Section4>
          <Carousel title="All Stores" slidesToShow={3} background='inherit' contentPadding='.5rem'>
            <StoreCard
              image="imgs/index13.png"
              title="Chisom & Sons Farms."
              status="Maize farmer"
              description="I plant two types of maize (white and red) and.."
              rating={4}
            />
            <StoreCard
              id="tBCnJx9nI4HrSG7BMnED"
              image="imgs/index12.png"
              title="Chisom & Sons Farms."
              status="Maize farmer"
              description="I plant two types of maize (white and red) and.."
              rating={4}
            />
            <StoreCard
              image="imgs/index11.png"
              title="Chisom & Sons Farms."
              status="Maize farmer"
              description="I plant two types of maize (white and red) and.."
              rating={4}
            />
          </Carousel>
        </Section4>
      </Root>
    </Layout>
  );
};

export default Index
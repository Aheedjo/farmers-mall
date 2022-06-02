import { Button, Grid, LinearProgress, List, ListItemButton, ListItemIcon, ListItemText, Rating, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";
import { FolderOutlined, FolderRounded, KeyboardArrowLeftRounded, KeyboardArrowRightRounded, TimerOutlined, TimerRounded } from '@mui/icons-material';
import Slider from "react-slick";
import { useRef } from 'react';

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

const Carousel = ({ title, children, slidesToShow = 5, background = 'inherit', contentPadding = '0' }) => {
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

const ProductCard = ({ image, title, price, measure, seller, progress, status, rating }) => {
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
      fontSize: '1.1rem'
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
          <Button 
            variant="text" 
            color="primary"
            className="moreBtn"
            endIcon={<KeyboardArrowRightRounded color='primary'/>}
          >
            Visit Store
          </Button>
        </div>
      </div>
    </Root>
  );
};

const BlogCard = ({ image, title, type, description }) => {
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
      color: 'black',
      fontWeight: 600,
      marginBottom: '.2rem',
    },
    '& .verified': {
      width: '30px',
    },
    '& .status': {
      marginTop: '0',
      fontWeight: 500,
      color: '#5C615C',
      fontSize: '.9rem'
    },
    '& .icon': {
      color: '#5C615C',
    },
    '& .description': {
      color: '#5C615C',
      fontWeight: 500,
      fontSize: '1rem',
      marginTop: '.5rem',
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
      fontSize: '1.1rem'
    }
  }));

  return (
    <Root>
      <img src={image} className="image" alt="Category"/>
      
      <div className="body">
        <Typography className='title' variant="h6">
          {title}
        </Typography>

        <div style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '.3rem' }}>
            <FolderOutlined className="icon"/>
            <Typography className='status' variant="body1">
              {type}
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', columnGap: '.3rem' }}>
            <TimerOutlined className="icon"/>
            <Typography className='status' variant="body1">
              2days ago
            </Typography>
          </div>
        </div>
        
        <Typography className='description' variant="body1">
          {description}
        </Typography>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '.5rem', }}>
          <Button 
            variant="text" 
            color="primary"
            className="moreBtn"
            endIcon={<KeyboardArrowRightRounded color='primary'/>}
          >
            Read More...
          </Button>
        </div>
      </div>
    </Root>
  );
};

const Index = () => {
  return (
    <Layout>
      <Root>
        <Section1>
          <Grid container alignItems="stretch" spacing={1}>
            <Grid item xs={12} md={3}>
              <div className="categories">
                <Typography className='header' variant="h6" component="div">
                  Product Categories
                </Typography>

                <List
                  component="nav"
                  className="list"
                >
                  <CategoryItem image="imgs/category_vegetables.svg" title="Spices and Vegetables"/>
                  <CategoryItem image="imgs/category_fruit_diet.svg" title="Fruit Crops"/>
                  <CategoryItem image="imgs/category_legume_beans.svg" title="Oil Crops and Legumes"/>
                  <CategoryItem image="imgs/category_beverages.svg" title="Beverages"/>
                  <CategoryItem image="imgs/category_root_crops.svg" title="Root and Tuber"/>
                  <CategoryItem image="imgs/category_cereals.svg" title="Cereals and grains"/>
                  <CategoryItem image="imgs/category_fish.svg" title="Fisheries and aquaculture"/>
                  <CategoryItem image="imgs/category_others.svg" title="Others"/>
                </List>
              </div>

              <div className="sorts">
                <Typography className='header' variant="h6" component="div">
                  Sorted Products
                </Typography>

                <List
                  component="nav"
                  className="list"
                >
                  <CategoryItem image="imgs/sort.svg" title="Readily Available Crops"/>
                  <CategoryItem image="imgs/sort.svg" title="Almost Harvested Crops"/>
                  <CategoryItem image="imgs/sort.svg" title="Just Planted Crops"/>
                  <CategoryItem image="imgs/sort.svg" title="Yet to be planted Crops"/>
                </List>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
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
                          <CustomButton 
                            variant="contained" 
                            color="secondary" 
                            className="btnStore"
                          >
                            Own a Store
                          </CustomButton>
                          <CustomButton 
                            variant="contained" 
                            color="secondary" 
                            className="btnContact"
                          >
                            Contact Us
                          </CustomButton>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} md={3}>
              <div className='col3'>
                <div className="plantCard">
                  <img src="imgs/plant.svg" alt="Plant"/>
                  <Typography className='title' variant="h6" component="div">
                    Order a product even before it is harvested.
                  </Typography>

                  <CustomButton 
                    variant="contained" 
                    color="secondary" 
                    className="btn"
                  >
                    Shop Now
                  </CustomButton>
                </div>
                
                <div className="shopCard">
                  <img src="imgs/shop.svg" alt="Plant"/>
                  <Typography className='title' variant="h6" component="div">
                    Start buying  raw and fresh foods directly from your closest farms
                  </Typography>

                  <CustomButton 
                    variant="contained" 
                    color="secondary" 
                    className="btn"
                  >
                    Visit Sores
                  </CustomButton>
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
              title="Vegetable Farmers"
            />
            <CategoryCard
              image="imgs/index6.png"
              title="Fruit Farmers"
            />
            <CategoryCard
              image="imgs/index7.png"
              title="Beverage farmers"
            />
            <CategoryCard
              image="imgs/index8.png"
              title="Legumes Farmers"
            />
            <CategoryCard
              image="imgs/index4.png"
              title="Grains farmers"
            />
            <CategoryCard
              image="imgs/index5.png"
              title="Vegetable Farmers"
            />
            <CategoryCard
              image="imgs/index6.png"
              title="Fruit Farmers"
            />
            <CategoryCard
              image="imgs/index7.png"
              title="Beverage farmers"
            />
            <CategoryCard
              image="imgs/index8.png"
              title="Legumes Farmers"
            />
          </Carousel>
        </Section2>

        <Section3>
          <Carousel title="All Products" slidesToShow={4}>
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
              title="Red Sorghum"
              price="7500.00"
              measure="Basket"
              seller="Tekashi Farms."
              progress={70}
              status="About to be harvested"
              rating={4}
            />
            <ProductCard
              image="imgs/index11.png"
              title="Tomatoes"
              price="4500.00"
              measure="Bag"
              seller="Thony Moore Farms."
              progress={50}
              status="Premature stage"
              rating={4}
            />
            <ProductCard
              image="imgs/index12.png"
              title="Yellow Maize"
              price="6500.00"
              measure="Basket"
              seller="Seller: Hajiya fati Farms."
              progress={10}
              status="Ready to be planted"
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
              title="Red Sorghum"
              price="7500.00"
              measure="Basket"
              seller="Tekashi Farms."
              progress={70}
              status="About to be harvested"
              rating={4}
            />
            <ProductCard
              image="imgs/index11.png"
              title="Tomatoes"
              price="4500.00"
              measure="Bag"
              seller="Thony Moore Farms."
              progress={50}
              status="Premature stage"
              rating={4}
            />
            <ProductCard
              image="imgs/index12.png"
              title="Yellow Maize"
              price="6500.00"
              measure="Basket"
              seller="Seller: Hajiya fati Farms."
              progress={10}
              status="Ready to be planted"
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
              image="imgs/index14.png"
              title="Abdullahi Farms."
              status="Sorghum farmer"
              description="I plant red sorghum every year on 12 acre of land..."
              rating={4}
            />
            <StoreCard
              image="imgs/index15.png"
              title="Hauwa & family's Farms."
              status="Rice farmer"
              description="I plant all sorts of rice on my 12 plots of land.."
              rating={4}
            />
            <StoreCard
              image="imgs/index13.png"
              title="Chisom & Sons Farms."
              status="Maize farmer"
              description="I plant two types of maize (white and red) and.."
              rating={4}
            />
            <StoreCard
              image="imgs/index14.png"
              title="Abdullahi Farms."
              status="Sorghum farmer"
              description="I plant red sorghum every year on 12 acre of land..."
              rating={4}
            />
            <StoreCard
              image="imgs/index15.png"
              title="Hauwa & family's Farms."
              status="Rice farmer"
              description="I plant all sorts of rice on my 12 plots of land.."
              rating={4}
            />
          </Carousel>
        </Section4>

        <Section5>
          <Carousel title="Latest Blogs" slidesToShow={3}>
            <BlogCard
              image="imgs/index16.png"
              title="How best to tackle pests and D..."
              type="Pests"
              description="We have listed below six different ways to tackle pests and diseases attacks firstly.."
            />
            <BlogCard
              image="imgs/index17.png"
              title="Crops that sells the most this..."
              type="Crops"
              description="A lot of products has drawn the attention of customers this year and farmers have gained.."
            />
            <BlogCard
              image="imgs/index18.png"
              title="How to reduce product loss in..."
              type="Farming"
              description="Most farmers fall victim of product loss due to some reasons, of which one of them is the lack.."
            />
          </Carousel>
        </Section5>
      </Root>
    </Layout>
  );
};

export default Index
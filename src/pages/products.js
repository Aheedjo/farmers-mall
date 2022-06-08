import { KeyboardArrowDownRounded, KeyboardArrowRightRounded, KeyboardArrowUpRounded, LocationOnRounded, MicRounded } from '@mui/icons-material';
import { Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, LinearProgress, Menu, MenuItem, Rating, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import FormikField from '../components/FormikField';
import Layout from '../components/Layout';

const Root = styled('div')(({ theme }) => ({
  background: 'white',
  borderRadius: '12px'
}));

const Section1 = styled('div')(({ theme }) => ({
  padding: '1rem 1rem',

  '& .header': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1.5rem',

    '& .title': {
      color: '#008036',
      fontWeight: 600,
    },
    '& .sort': {
      display: 'flex',
      columnGap: '1rem',
      alignItems: 'center',

      '& .sortTitle': {
        color: '#5C615C',
      }
    },
    '& .sortBtn': {
      textTransform: 'none',
      border: '2px solid #008036',
      padding: '.2rem .5rem',
    },
  },
  '& .left': {
    '& .searchContainer': {
      width: '100%',
      
      '& .field': {
        width: '100%',
        '& .MuiOutlinedInput-root': {
          width: '100%',

          '& fieldset': {
            borderColor: theme.palette.primary.main,
          },
          '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
          },
        },
      },
      '& .field input': {
        padding: '.6rem',
        width: '100%'
      },
      '& .startAdornment': {
        '&.MuiInputAdornment-root': {
          margin: 0,
          padding: 0,
        }
      }
    },

    '& .title': {
      color: theme.palette.primary.main,
      fontWeight: 600,
      marginBottom: '1rem',
    }
  },
  '& .categories': {
    '& .title': {
      marginBottom: '1rem',
    }
  },
  '& .location': {
    marginTop: '2rem',
  },
  '& .price': {
    marginTop: '2rem',

    '& .btn': {
      background: theme.palette.primary.main,
      color: 'white'
    }
  }
}));

const SortDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [title, setTitle] = useState('Most Recent');
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClicked = (newTitle) => {
    setTitle(newTitle)
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className="sortBtn"
        endIcon={open ? <KeyboardArrowUpRounded/> : <KeyboardArrowDownRounded/>}
      >
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClicked('Most Recent')}>Most Recent</MenuItem>
        <MenuItem onClick={() => handleClicked('Most Recent')}>Most Recent</MenuItem>
        <MenuItem onClick={() => handleClicked('Most Recent')}>Most Recent</MenuItem>
      </Menu>
    </div>
  );
};

const CategoryCheck = ({ label, defaultChecked = false }) => {
  return (
    <FormControlLabel control={<Checkbox defaultChecked={defaultChecked} />} label={label} />
  );
};

const SearchButtons = () => {
  const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',

    '& .searchBtn': {
      color: theme.colors.primaryVariant,
      background: '#E0FFDD',
      padding: '.2rem',

      '& .icon': {
        fontSize: '1.5rem'
      }
    }
  }));

  return (
    <Root>
      <IconButton className="searchBtn">
        <MicRounded className='icon'/>
      </IconButton>
    </Root>
  );
};

const LocationIcon = () => {
  const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',

    '& .searchBtn': {
      color: theme.colors.primaryVariant,
      
      '& .icon': {
        fontSize: '1.5rem'
      }
    }
  }));

  return (
    <Root>
      <IconButton className="searchBtn">
        <LocationOnRounded className='icon'/>
      </IconButton>
    </Root>
  );
};

const ProductCard = ({ image, title, price, measure, seller, progress, status, rating }) => {
  const Root = styled('div')(({ theme }) => ({
    //display: 'inline',
    width: '100%',
    position: 'relative',
    
    '& .body': {
      padding: '0 1rem',
      paddingBottom: '2rem',
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
      color: 'white',
      marginTop: '.3rem',
      fontWeight: 700,
      position: 'absolute',
      top: '-4.5px',
      right: '15px',
      background: 'url(imgs/price_bg.png)',
      backgroundRepeat: 'none',
      backgroundSize: 'cover',
      padding: '.2rem .5rem',

      '& .measure': {
        color: 'white',
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
    <Grid item xs={4}>
      <Root>
        <Typography className='price' variant="h6">
          N{price}<span className='measure'>/{measure}</span>
        </Typography>

        <img src={image} alt="Category"/>

        <div className="body">
          <Typography className='title' variant="h6">
            {title}
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
    </Grid>
  );
};

const Products = () => {
  return (
    <Layout>
      <Root>
        <Section1>
          <div className="header">
            <Typography className='title' variant="h6">Products</Typography>
            
            <div className='sort'>
              <Typography className='sortTitle' variant="body1">Sort By:</Typography>

              <SortDropdown/>
            </div>
          </div>

          <Grid container spacing={3}>
            <Grid item md={3} className='left'>
              <div className='categories'>
                <Typography className='title' variant="body1">Categories</Typography>
                <FormGroup>
                  <CategoryCheck label='Spices and Vegetables'/>
                  <CategoryCheck label='Fruit Crops' defaultChecked/>
                  <CategoryCheck label='Oil Crops and Legumes'/>
                  <CategoryCheck label='Beverages'/>
                  <CategoryCheck label='Root and Tuber'/>
                  <CategoryCheck label='Cereals and grains'/>
                  <CategoryCheck label='Fisheries and aquaculture'/>
                  <CategoryCheck label='Others'/>
                </FormGroup>
              </div>

              <Divider style={{ background: '#008036', margin: '1rem 0'}}/>

              <div className='location'>
                <Typography className='title' variant="body1">Location</Typography>

                <div className="searchContainer">
                  <Formik
                    initialValues={{
                      search: ''
                    }}
                  >
                    <Form>
                      <FormikField
                        name="search"
                        variant="outlined"
                        color="primary"
                        className="field"
                        InputProps={{ 
                          startAdornment: <InputAdornment className="startAdornment" position="start"><LocationIcon/></InputAdornment>,
                          endAdornment: <InputAdornment className="startAdornment" position="end"><SearchButtons/></InputAdornment>
                        }}
                        inputProps={{
                          placeholder: 'Enter Location'
                        }}
                      />
                    </Form>
                  </Formik>
                </div>
              </div>

              <Divider style={{ background: '#008036', margin: '2rem 0'}}/>

              <div className='price'>
                <Typography className='title' variant="body1">Price</Typography>

                <div className="searchContainer">
                  <Formik
                    initialValues={{
                      search: ''
                    }}
                  >
                    <Form>
                      <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item xs={4}>
                          <FormikField
                            name="search"
                            variant="outlined"
                            color="primary"
                            className="field"
                            inputProps={{
                              placeholder: 'Min'
                            }}
                          />
                        </Grid>

                        <Grid item xs={4}>
                          <FormikField
                            name="search"
                            variant="outlined"
                            color="primary"
                            className="field"
                            inputProps={{
                              placeholder: 'Max'
                            }}
                          />
                        </Grid>

                        <Grid item xs={2}>
                          <Button color='primary' className='btn'>
                            <KeyboardArrowRightRounded className='icon'/>
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  </Formik>
                </div>
              </div>

              <Divider style={{ background: '#008036', margin: '2rem 0'}}/>

              <div className='categories'>
                <Typography className='title' variant="body1">Conditions</Typography>
                <FormGroup>
                  <CategoryCheck label='Readily Available Crops'/>
                  <CategoryCheck label='Almost Harvested Crops' defaultChecked/>
                  <CategoryCheck label='Just Planted Crops'/>
                  <CategoryCheck label='Yet To Be Planted Crops'/>
                </FormGroup>
              </div>
            </Grid>

            <Grid item md={9}>
              <Grid container>
                <ProductCard
                  image="imgs/index9.png"
                  title="Yellow Maize"
                  price="9500"
                  measure="Bag"
                  seller="Abdullahi Farms."
                  progress={100}
                  status="Harvested and Ready for shipping"
                  rating={4}
                />
                <ProductCard
                  image="imgs/index10.png"
                  title="Red Sorghum"
                  price="7500"
                  measure="Basket"
                  seller="Tekashi Farms."
                  progress={70}
                  status="About to be harvested"
                  rating={4}
                />
                <ProductCard
                  image="imgs/index11.png"
                  title="Tomatoes"
                  price="4500"
                  measure="Bag"
                  seller="Thony Moore Farms."
                  progress={50}
                  status="Premature stage"
                  rating={4}
                />
                <ProductCard
                  image="imgs/index12.png"
                  title="Yellow Maize"
                  price="6500"
                  measure="Basket"
                  seller="Seller: Hajiya fati Farms."
                  progress={10}
                  status="Ready to be planted"
                  rating={4}
                />
              </Grid>
            </Grid>
          </Grid>
        </Section1>
      </Root>
    </Layout>
  );
};

export default Products;
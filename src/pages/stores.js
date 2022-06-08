import { KeyboardArrowDownRounded, KeyboardArrowRightRounded, KeyboardArrowUpRounded, LocationOnRounded, MicRounded } from '@mui/icons-material';
import { Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, Menu, MenuItem, Rating, Typography } from '@mui/material';
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
        <MenuItem onClick={() => handleClicked('Top Rated')}>Top Rated</MenuItem>
        <MenuItem onClick={() => handleClicked('Trending')}>Trending</MenuItem>
        <MenuItem onClick={() => handleClicked('Lowest Price')}>Lowest Price</MenuItem>
        <MenuItem onClick={() => handleClicked('Highest Price')}>Highest Price</MenuItem>
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
      marginBottom: '2rem'
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
    <Grid item xs={6}>
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
    </Grid>
  );
};

const Stores = () => {
  return (
    <Layout>
      <Root>
        <Section1>
          <div className="header">
            <Typography className='title' variant="h6">Stores</Typography>
            
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
                  <CategoryCheck label='Vegetables Farmers'/>
                  <CategoryCheck label='Fruit Farmers' defaultChecked/>
                  <CategoryCheck label='Legumes Farmers'/>
                  <CategoryCheck label='Beverages Farmers'/>
                  <CategoryCheck label='Tuber Farmers'/>
                  <CategoryCheck label='Grains Farmers'/>
                  <CategoryCheck label='Aqua Farmers'/>
                  <CategoryCheck label='Other Farmers'/>
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
            </Grid>

            <Grid item md={9}>
              <Grid container>
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
              </Grid>
            </Grid>
          </Grid>
        </Section1>
      </Root>
    </Layout>
  );
};

export default Stores;
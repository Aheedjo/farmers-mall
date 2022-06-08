import { KeyboardArrowDownRounded, KeyboardArrowUpRounded, LocationOnRounded, MicRounded } from '@mui/icons-material';
import { Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, Menu, MenuItem, Typography } from '@mui/material';
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

    '& .searchContainer': {
      width: '100%',
      paddingRight: '2rem',

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
        padding: '1rem',
        width: '100%'
      },
      '& .startAdornment': {
        '&.MuiInputAdornment-root': {
          margin: 0,
          padding: 0,
        }
      }
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

          <Grid container>
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

              <Divider style={{ background: '#008036', height: '1.4px', margin: '1rem 0'}}/>

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
          </Grid>
        </Section1>
      </Root>
    </Layout>
  );
};

export default Products;
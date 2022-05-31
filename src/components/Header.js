import { KeyboardArrowDownRounded, KeyboardArrowUpRounded, MicRounded, SearchRounded } from "@mui/icons-material";
import { AppBar, Button, Grid, IconButton, InputAdornment, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import FormikField from "./FormikField";
import Link from './Link';

const Root = styled('div')(({ theme }) => ({
  
}));

const Bar = styled(AppBar)(({ theme }) => ({
  ...theme.appBar,
  backgroundImage: 'url(/imgs/background.png)',
  backgroundSize: 'cover',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 0px 4px',

  '& .info': {
    background: theme.colors.primaryVariant,
    textAlign: 'center',
    padding: '1rem 0',

    '& .text': {
      color: theme.colors.textLight,
      fontWeight: 400,
    }
  },
  '& .offset':{
    ...theme.mixins.toolbar,
  },
  '& .toolbar': {
    padding: '.3rem 5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '.8rem 1rem',
    },
    [theme.breakpoints.only('sm')]: {
      justifyContent: 'space-between',
      padding: '1.5rem 3rem',
    },

    '& .right': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .brand': {
      display: 'inline-flex',
      alignItems: 'center',

      '& .brand-text': {
        color: '#3C4566',
        marginLeft: '.5rem',
      }
    },
    '& .logo': {
      width: '140px',
      height: 'auto',
      [theme.breakpoints.only('xs')]: {
        width: '60px',
      },
    },
    '& .links': {
      display: 'flex',
      columnGap: '1.5rem',
      alignItems: 'center',
    },
    '& .link': {
      color: theme.colors.textDark,
      fontWeight: 400,
      transition: '.2s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: '.5rem',

      '& .icon': {
        width: '30px',
      },
      '&:hover': {
        transition: '.2s ease',
        color: theme.palette.primary.main
      },
      '&.active': {
        transition: '.2s ease',
        color: theme.palette.primary.main
      }
    },
    '& .btn': {
      textTransform: 'none',
      marginLeft: '2rem',
      fontWeight: 500,
      boxShadow: 'none',
      padding: '.4rem 1.1rem',
      borderRadius: '39px',
      fontSize: '.9rem',
      [theme.breakpoints.only('sm')]: {
        width: '40%',
      },
    },
    '& .searchContainer': {
      width: '100%',
      paddingRight: '2rem',

      '& .field': {
        width: '100%',
        '& .MuiOutlinedInput-root': {
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
        padding: '1rem'
      },
      '& .searchPathBtn': {
        textTransform: 'none'
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

const SearchDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title, setTitle] = useState('Products');
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
        className="searchPathBtn"
        endIcon={open ? <KeyboardArrowUpRounded/> : <KeyboardArrowDownRounded/>}
      >
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClicked('Products')}>Products</MenuItem>
        <MenuItem onClick={() => handleClicked('Farms')}>Farms</MenuItem>
        <MenuItem onClick={() => handleClicked('Articles')}>Articles</MenuItem>
      </Menu>
    </div>
  );
};

const SearchButtons = () => {
  const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',

    '& .searchBtn': {
      color: theme.palette.primary.main,
      background: '#E0FFDD',

      '&.first': {
        marginRight: '.8rem'
      }
    }
  }));

  return (
    <Root>
      <IconButton className="searchBtn first">
        <MicRounded/>
      </IconButton>
      <IconButton className="searchBtn">
        <SearchRounded/>
      </IconButton>
    </Root>
  );
};

const Header = () => {
  return (
    <Root>
      <Bar position="fixed" elevation={10}>
        <div className="info">
          <Typography variant="body" className="text">
            Join our community of agricultural value chain stakeholders and get the opportunity to connect with your customers, 
            business partners, investors, and other extension workers.
          </Typography>
        </div>

        <Toolbar className="toolbar">
          <Grid container alignItems="center">
            <Grid item xs={12} md={2}>
              <Link href="/" className="brand">
                <img src="/imgs/logo.svg" className="logo" alt="Logo"/>
              </Link>
            </Grid>

            <Grid item xs={12} md={5}>
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
                      //label="Search for products and Stores"
                      color="primary"
                      className="field"
                      InputProps={{ 
                        startAdornment: <InputAdornment className="startAdornment" position="start"><SearchDropdown/></InputAdornment>,
                        endAdornment: <InputAdornment className="startAdornment" position="end"><SearchButtons/></InputAdornment>
                      }}
                      inputProps={{
                        placeholder: 'Search products and stores'
                      }}
                    />
                  </Form>
                </Formik>
              </div>
            </Grid>

            <Grid item xs={12} md={5}>
              <div className="right">
                <div className="links">
                  <Link href="/cart" className="link">
                    <img src="/imgs/cart.svg" alt="Cart" className="icon"/>
                    <Typography variant="body1">Cart</Typography>
                  </Link>

                  <Link href="/favorites" className="link">
                    <img src="/imgs/heart.svg" alt="Cart" className="icon"/>
                    <Typography variant="body1">Favorites</Typography>
                  </Link>

                  <Link href="/login" label="Login" className="link"/>
                  <Link href="/register" label="Register" className="link"/>
                </div>

                <Button 
                  variant="contained" 
                  color="primary" 
                  className="btn"
                >
                  Own a Store
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Bar>

      <Toolbar />
      <Toolbar />
      <Toolbar />
    </Root>
  );
};

export default Header;
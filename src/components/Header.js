import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Button, InputAdornment, Menu, MenuItem, Toolbar, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Form, Formik } from "formik";
import FormikField from "./FormikField";
import Link from './Link';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

// Debounce function to delay updates
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Root = styled('div')(({ theme }) => ({
  '& .offset': {
    marginTop: '3rem'
  },
}));

const Bar = styled(AppBar)(({ theme }) => ({
  ...theme.appBar,
  backgroundImage: 'url(/imgs/background.png)',
  backgroundSize: 'cover',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  '& .info': {
    background: theme.colors.primaryVariant,
    textAlign: 'center',
    padding: '1rem 0',

    '& .text': {
      color: theme.colors.textLight,
      fontWeight: 400,
    }
  },
  '& .toolbar': {
    padding: '.3rem 3rem',
    [theme.breakpoints.down('sm')]: {
      padding: '.8rem 1rem',
    },
    [theme.breakpoints.only('sm')]: {
      justifyContent: 'space-between',
      padding: '1.5rem 3rem',
    },

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& .brand': {
      display: 'inline-flex',
      alignItems: 'center',
    },

    '& .right': {
      display: 'flex',
      alignItems: 'center',
    },

    '& .logo': {
      width: '140px',
      height: 'auto',
      [theme.breakpoints.only('xs')]: {
        width: '60px',
      },
    },

    '& .searchContainer': {
      flexGrow: 1,
      margin: '0 2rem',
      display: 'flex',
      alignItems: 'center',

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
      marginLeft: '1.5rem',
      fontWeight: 500,
      boxShadow: 'none',
      padding: '.4rem 1.1rem',
      borderRadius: '39px',
      fontSize: '.9rem',
      [theme.breakpoints.only('sm')]: {
        width: '40%',
      },
    },
  }
}));

const SearchDropdown = ({ onChangeSearchType }) => {
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
    setTitle(newTitle);
    handleClose();
    onChangeSearchType(newTitle === 'Articles' ? 'Products' : newTitle);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className="searchPathBtn"
        endIcon={open ? <KeyboardArrowUpRounded /> : <KeyboardArrowDownRounded />}
      >
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClicked('Products')}>Products</MenuItem>
        <MenuItem onClick={() => handleClicked('Stores')}>Stores</MenuItem>
        <MenuItem onClick={() => handleClicked('Articles')}>Articles</MenuItem>
      </Menu>
    </div>
  );
};

const Header = () => {
  const [search, setSearch] = useState('');
  const [searchResultPage, setSearchResultPage] = useState('products');
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (debouncedSearch) {
      const results = [ // Dummy data for demonstration
        { id: 1, name: 'Product 1', description: 'Description for Product 1' },
        { id: 2, name: 'Store 1', description: 'Description for Store 1' },
        { id: 3, name: 'Article 1', description: 'Description for Article 1' },
      ];

      setSearchResults(results);
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [debouncedSearch]);

  const onChangeSearchType = (type) => {
    setSearchResultPage(type.toLowerCase());
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
          <Link href="/" className="brand">
            <img src="/imgs/logo.svg" className="logo" alt="Logo" />
          </Link>

          {user && (
            <>
              <div className="searchContainer">
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    search: search
                  }}
                  onSubmit={() => {}}
                >
                  <Form>
                    <FormikField
                      name="search"
                      variant="outlined"
                      className="field"
                      InputProps={{
                        startAdornment: <InputAdornment className="startAdornment" position="start"><SearchDropdown
                          onChangeSearchType={onChangeSearchType} /></InputAdornment>,
                      }}
                      inputProps={{
                        placeholder: 'Search products and stores',
                        onChange: (e) => setSearch(e.target.value)
                      }}
                    />
                  </Form>
                </Formik>
              </div>

              <div className="right">
                <div className="links">
                  <Link href="/dashboard" className="link">
                    <Typography variant="body1">Dashboard</Typography>
                  </Link>
                  <Link href="/login" className="link">
                    <Typography variant="body1">Logout</Typography>
                  </Link>
                </div>

                <Link href="/own-store">
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn"
                  >
                    Own a Store
                  </Button>
                </Link>
              </div>
            </>
          )}
        </Toolbar>
      </Bar>

      <div className="offset" />

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Search Results</DialogTitle>
        <DialogContent>
          <div>
            {searchResults.map(result => (
              <div key={result.id}>
                <Typography variant="h6">{result.name}</Typography>
                <Typography variant="body2">{result.description}</Typography>
                <hr />
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Root>
  );
};

export default Header;

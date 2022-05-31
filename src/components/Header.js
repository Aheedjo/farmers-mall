import { MenuRounded } from "@mui/icons-material";
import { AppBar, Button, Divider, Drawer, Hidden, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import Link from './Link';

const Root = styled('div')(({ theme }) => ({
  
}));

const FlexGrow = styled('div')(({ theme }) => ({
  flexGrow: 1,
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
    display: 'flex',
    alignItems: 'center',
    padding: '.8rem 6rem',
    [theme.breakpoints.down('sm')]: {
      padding: '.8rem 1rem',
    },
    [theme.breakpoints.only('sm')]: {
      justifyContent: 'space-between',
      padding: '1.5rem 3rem',
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
      padding: '.4rem 1rem',
      borderRadius: '39px',
      fontSize: '.9rem',
      [theme.breakpoints.only('sm')]: {
        width: '40%',
      },
    }
  }
}));

const MenuDrawer = styled(Drawer)(({ theme }) => ({
  width: 'auto',
  
  '& .inner': {
    background: theme.palette.background,
  },
  '& .divider': {
    margin: '1rem 0',
  },
  '& .btn': {
    textTransform: 'none',
    fontWeight: 600,
    boxShadow: 'none',
    padding: '.8rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem'
  },
  '& .link': {
    color: theme.colors.textSubtile,
    fontWeight: 500,
    transition: '.2s ease',

    '&:hover': {
      transition: '.2s ease',
      color: theme.palette.secondary.main
    },
    '&.active': {
      transition: '.2s ease',
      color: theme.palette.primary.dark
    }
  },
}));

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
            <img src="/imgs/logo.svg" className="logo" alt="Logo"/>
          </Link>
          
          <Hidden smDown>
            <FlexGrow/>
          </Hidden>

          <Hidden mdDown>
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
          </Hidden>

          <Hidden smDown>
            <Button 
              variant="contained" 
              color="primary" 
              className="btn"
            >
              Own a Store
            </Button>
          </Hidden>

          <Hidden lgUp>
            <FlexGrow/>
            <IconButton color="secondary" size="large" onClick={() => setDrawerOpen(true)}>
              <MenuRounded fontSize="large"/>
            </IconButton>

            <MenuDrawer anchor="bottom" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <div className="inner">
                <List>
                  <ListItem button onClick={() => setDrawerOpen(false)}>
                    <Link href="/about" label="About" className="link stretch"/>
                  </ListItem>
                  <ListItem button>
                    <Link href="/programs" label="Programs" className="link stretch"/>
                  </ListItem>
                  <ListItem button>
                    <Link href="/projects" label="Projects" className="link stretch"/>
                  </ListItem>
                  <ListItem button>
                    <Link href="/excos" label="Excos" className="link stretch"/>
                  </ListItem>

                  <Hidden smUp>
                    <Divider className="divider"/>

                    <ListItem>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        className="btn"
                        fullWidth
                        href="/register"
                      >
                        Register
                      </Button>
                    </ListItem>
                  </Hidden>
                </List>
              </div>
            </MenuDrawer>
          </Hidden>
        </Toolbar>
      </Bar>

      <Toolbar />
      <Toolbar />
      <Toolbar />
    </Root>
  );
};

export default Header;
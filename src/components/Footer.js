import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ExternalLink from "./ExternalLink";
import Link from './Link';

const Root = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  position: 'absolute',
  bottom: 0,

  '& .top': {
    padding: '3rem 5rem',
    paddingTop: '.7rem',
    [theme.breakpoints.only('xs')]: {
      padding: '3rem 1.5rem',
    },
  },
  '& .logo': {
    [theme.breakpoints.only('xs')]: {
      width: '60%'
    },
  },
  '& .body': {
    color: theme.colors.textLight,
    fontSize: '1.1rem',
    lineHeight: '33px',
    marginTop: '1.5rem'
  },
  '& .social': {
    display: 'flex',
    alignItems: 'center',
    columnGap: '2rem',
    marginTop: '2.5rem',

    '& .handle': {
      '& .icon': {
        transition: '.2s ease',
      },
      
      '&:hover': {
        '& .icon': {
          filter: 'invert(99%) sepia(1%) saturate(548%) hue-rotate(159deg) brightness(118%) contrast(86%)',
          transition: '.2s ease',
        }
      }
    }
  },
  '& .header': {
    fontWeight: 800,
    color: 'white',
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  },
  '& .copyright-container': {
    background: theme.colors.primaryVariant,
    marginTop: '4rem',
    padding: '.6rem 0',

    '& .copyright': {
      textAlign: 'center',
      fontWeight: 400,
      color: '#FCFCFC',
      fontSize: '1rem',
      [theme.breakpoints.only('xs')]: {
        fontSize: '.9rem',
      },
    },
  }
}));

const FooterLink = ({ href, label }) => {
  const Root = styled('div')(({ theme }) => ({
    marginBottom: '.8rem',

    '& .link': {
      display: 'inline-block',
    },
    '& .label': {
      color: theme.colors.textLight,
      transition: '.2s ease',
      fontSize: '1.1rem',
      fontWeight: 500,

      '&:hover': {
        transition: '.2s ease',
        color: theme.palette.primary.dark
      }
    }
  }));

  return (
    <Root>
      <Link href={href} className="link">
        <Typography variant="h6" className="label">{label}</Typography>
      </Link>
    </Root>
  );
};

const Footer = () => {
  return (
    <Root>
      <div className="top">
        <Grid container spacing={4} alignItems="baseline">
          <Grid item xs={12} sm={12} md={4} className="col1">
            <img src="/imgs/footer_logo.svg" alt="Logo" className="logo"/>
            <Typography variant="h6" className="body">
              FarmersMall is an agri-commerce platform that connects relevant stakeholders in the agricultural value chain so as 
              to facilitate seamless and effective communication and market participation in agricultural sector of the country.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" className="header">Location</Typography>
            <Typography variant="body1" className="body">
              Fagge Local Government Area, Kano State, Nigeria
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h4" className="header">Quick Links</Typography>

            <FooterLink href="/" label="Home"/>
            <FooterLink href="/blog" label="Blog"/>
            <FooterLink href="/contact" label="Contact Us"/>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h4" className="header">Follow Us</Typography>
            
            <div className="social">
              <ExternalLink href="https://www.facebook.com/farmersmall" className="handle">
                <img src="/imgs/facebook.svg" alt="Facebook" className="icon"/>
              </ExternalLink>
              <ExternalLink href="https://twitter.com/farmersmall" className="handle">
                <img src="/imgs/twitter.svg" alt="Twitter" className="icon"/>
              </ExternalLink>
              <ExternalLink href="https://www.instagram.com/farmersmall" className="handle">
                <img src="/imgs/instagram.svg" alt="Instagram" className="icon"/>
              </ExternalLink>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="copyright-container">
        <Typography variant="h6" className="copyright">
          &copy; {new Date().getFullYear()} FarmersMall - All rights reserved
        </Typography>
      </div>
    </Root>
  );
};

export default Footer;
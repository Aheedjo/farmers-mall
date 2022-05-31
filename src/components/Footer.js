import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ExternalLink from "./ExternalLink";
import Link from './Link';

const Root = styled('div')(({ theme }) => ({
  background: theme.colors.footerBackground,
  position: 'absolute',
  bottom: 0,

  '& .top': {
    padding: '3rem 5rem',
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
    color: theme.colors.primaryDarkShade,
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
    fontWeight: 600,
    color: theme.colors.textSubtile,
    fontSize: '1.4rem',
    marginBottom: '1.5rem',
  },
  '& .copyright-container': {
    background: theme.colors.textSubtile,
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
      color: theme.colors.textSubtile,
      transition: '.2s ease',
      fontSize: '1.1rem',
      fontWeight: 500,

      '&:hover': {
        transition: '.2s ease',
        color: theme.palette.secondary.main
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
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4} className="col1">
            <img src="/imgs/footer_logo.png" alt="Logo" className="logo"/>
            <Typography variant="h6" className="body">
              An environment to groom  IT enthusiasts into innovative entrepreneurial IT professionals.
            </Typography>

            <div className="social">
              <ExternalLink href="https://www.facebook.com/stemcoders" className="handle">
                <img src="/imgs/facebook.svg" alt="Facebook" className="icon"/>
              </ExternalLink>
              <ExternalLink href="https://twitter.com/stemcoders_abu" className="handle">
                <img src="/imgs/twitter.svg" alt="Twitter" className="icon"/>
              </ExternalLink>
              <ExternalLink href="https://www.instagram.com/stemcoders_abu" className="handle">
                <img src="/imgs/instagram.svg" alt="Instagram" className="icon"/>
              </ExternalLink>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h4" className="header">Club</Typography>

            <FooterLink href="/about" label="About Us"/>
            <FooterLink href="/how" label="How it works"/>
            <FooterLink href="/programs" label="Programs"/>
            <FooterLink href="/terms" label="Terms"/>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h4" className="header">Learn</Typography>

            <FooterLink href="/resources" label="Resources"/>
            <FooterLink href="/blog" label="Blog"/>
            <FooterLink href="/faqs" label="FAQs"/>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h4" className="header">Get in Touch</Typography>
            <Typography variant="h6" className="body">
              Questions or Feedbacks? We will love to hear from you.
              <br/>
              stemcoders.abu@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="copyright-container">
        <Typography variant="h6" className="copyright">
          &copy; {new Date().getFullYear()} STEM CODER CLUB. All rights reserved
        </Typography>
      </div>
    </Root>
  );
};

export default Footer;
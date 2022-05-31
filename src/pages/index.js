import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";
import { ChevronRightRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const horizontalPadding = '2rem';

const Root = styled('div')(({ theme }) => ({
  
}));

const Section1 = styled('div')(({ theme }) => ({
  
}));

const Section2 = styled('div')(({ theme }) => ({
  padding: `0 ${horizontalPadding}`,

  '& .image': {
    width: '100%',
    height: 'auto'
  },
  '& .title': {
    fontWeight: 500,
    color: theme.colors.textBlack,
  },
  '& .col2': {
    paddingLeft: '3rem',
  },
  '& .container': {
    background: 'white',
    boxShadow: '0px 14px 53px 2px rgba(0, 0, 0, 0.07)',
    borderRadius: '16px',
    padding: '1rem 2rem',
    marginTop: '3rem',
    
    '& li': {
      color: theme.colors.primaryDarkShade,
      fontWeight: 500,
      marginBottom: '1rem'
    }
  }
}));

const Section3 = styled('div')(({ theme }) => ({
  padding: `0 ${horizontalPadding}`,
  marginTop: '5rem',
  textAlign: 'center',
  
  '& .title': {
    fontWeight: 500,
    color: theme.colors.textBlack,
  },
  '& .sub-title': {
    fontWeight: 500,
    color: theme.colors.primaryDarkShade,
    marginTop: '1.5rem',
    padding: '0 30%',
    fontSize: '1.1rem',
  },
}));

const Section1Card = ({ value, label }) => {
  const Root = styled('div')(({ theme }) => ({
    display: 'inline-block',
    background: '#FBFBFE',
    borderRadius: '16px',
    boxShadow: '0px 14px 53px 2px rgba(0, 0, 0, 0.07)',
    textAlign: 'center',
    width: '100%',
    height: '170px',
    position: 'relative',

    '& .inner': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
    },
    '& .value': {
      color: 'black',
      fontWeight: 500,
    },
    '& .label': {
      color: theme.colors.textSubtile,
      fontWeight: 500,
      marginTop: '.2rem'
    },
  }));

  return (
    <Grid item xs={5} md={4}>
      <Root>
        <div className='inner'>
          <Typography variant='h4' className='value'>{value}</Typography>
          <Typography variant='h6' className='label'>{label}</Typography>
        </div>
      </Root>
    </Grid>
  );
};

const Section3CardThemes = {
  green: {
    background: '#E6FDF1',
    color: '#1FA75E',
  },
  red: {
    background: '#FDE6EB',
    color: '#FD295A',
  },
  orange: {
    background: '#FDF0E6',
    color: '#F78C40',
  },
};

const Section3Card = ({ image, title, body, colorTheme, url }) => {
  const Root = styled('div')(({ theme }) => ({
    height: '100%',
    background: colorTheme.background,
    borderRadius: '16px',
    padding: '2.5rem 2.5rem',
    position: 'relative',

    '& .title': {
      marginTop: '1rem',
      fontWeight: 500,
      color: '#0B1436',
    },
    '& .body': {
      marginTop: '1.5rem',
      fontWeight: 500,
      color: theme.colors.primaryDarkShade,
      marginBottom: '6rem'
    },
    '& .btn': {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'white',
      background: colorTheme.color,
      borderSize: '2px',
      width: '70%',
      padding: '.8rem 0',
      transition: '.2s ease',

      '&:hover': {
        background: theme.colors.primaryDarkShade,
        transition: '.2s ease',
      },

      '& .icon': {
        fontSize: '2rem'
      }
    },
  }));

  return (
    <Grid item xs={5} md={4}>
      <Root>
        <img src={image} alt='Illustration' className='image'/>

        <Typography variant='h5' className='title'>{title}</Typography>
        <Typography variant='body1' className='body'>{body}</Typography>

        <CustomButton component={Link} to={url} endIcon={<ChevronRightRounded className='icon'/>} className='btn'>
          EXPLORE
        </CustomButton>
      </Root>
    </Grid>
  );
};

const Section4 = styled('div')(({ theme }) => ({
  padding: `0 ${horizontalPadding}`,
  marginTop: '7rem',

  '& .title': {
    fontWeight: 500,
    color: theme.colors.textBlack,
  },
  '& .container': {
    background: 'white',
    boxShadow: '0px 14px 53px 2px rgba(0, 0, 0, 0.07)',
    borderRadius: '16px',
    padding: '3rem 2rem',
    marginTop: '3rem',
    
    '& .body': {
      lineHeight: '30px',
    }
  },
  '& .col2': {
    position: 'relative',

    '& .image': {
      width: '100%',
      height: 'auto',
    },
  },
}));

const Section5 = styled('div')(({ theme }) => ({
  padding: `0 ${horizontalPadding}`,
  marginTop: '7rem',

  '& .title': {
    fontWeight: 500,
    color: theme.colors.textBlack,
  },
  '& .body': {
    color: theme.colors.primaryDarkShade,
    fontWeight: 500,
    marginTop: '1.5rem'
  },
  '& .btn': {
    marginTop: '2rem',
    padding: '.8rem 4rem',
  },
}));

const Section5Card = ({ title, body, image, isHighlighted = false }) => {
  const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    marginBottom: '2rem',
    padding: '1.5rem',
    paddingLeft: 0,
    background: 'white',
    borderRadius: '16px',
    border: isHighlighted ? '2px solid #E24941' : '2px solid #E6E4E4',
    boxShadow: isHighlighted ? '0px 10px 39px 2px rgba(201, 81, 75, 0.15)' : 'none',

    '& .left': {
      display: 'flex',

      '& .img-container': {
        padding: '0 1.2rem',
      },
      '& .handle': {
        width: '8px',
        background: isHighlighted ? '#E24941' : 'inherit',
      },
    },
    '& .right': {
      
    },
    '& .title': {
      color: 'black',
      fontWeight: 500,
    },
    '& .body': {
      color: theme.colors.textSubtile,
      fontWeight: 500,
      marginTop: '.4rem',
      lineHeight: '28px',
      fontSize: '.9rem',
    },
  }));

  return (
    <Root>
      <div className='left'>
        <div className='handle'/>

        <div className='img-container'>
          <img src={image} alt='Avatar' className='image'/>
        </div>
      </div>

      <div className='right'>
        <Typography variant='h5' className='title'>{title}</Typography>
        <Typography variant='body1' className='body'>{body}</Typography>
      </div>
    </Root>
  );
};

const Section6 = styled('div')(({ theme }) => ({
  padding: `0 ${horizontalPadding}`,
  marginTop: '5rem',
  textAlign: 'center',
  
  '& .title': {
    fontWeight: 500,
    color: theme.colors.textBlack,
  },
  '& .sub-title': {
    fontWeight: 500,
    color: theme.colors.primaryDarkShade,
    marginTop: '1.5rem',
    padding: '0 30%',
    fontSize: '1.1rem',
  },
  '& .image': {
    marginTop: '4rem',
  },
}));

const Index = () => {
  return (
    <Layout allowContentPadding={false}>
      <Root>
        <Section1>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" className="subtitle" component={'span'}>we got you covered</Typography>
              <Typography variant="h3" className="title">
                An environment to groom  IT enthusiasts into innovative entrepreneurial IT professionals.
              </Typography>
              <Typography variant="h6" className='club'>STEM Coders Club, Ahmadu Bello University</Typography>

              <CustomButton component={Link} variant='contained' color='primary' className='register-btn' to='/register'>
                BECOME A STEM CODER NOW
              </CustomButton>

              <Grid container spacing={3} alignItems='stretch' className='cards-container'>
                <Section1Card
                  value={5}
                  label={'Completed Programs '}
                />
                <Section1Card
                  value={'150+'}
                  label={'Members'}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <img src='/imgs/index1.png' alt='STEM CODERS Logo' className='stem-logo'/>
            </Grid>
          </Grid>
        </Section1>

        <Section2>
          <Grid container>
            <Grid item xs={12} md={5}>
              <img src='/imgs/index2.png' alt='Club Session' className='image'/>
            </Grid>

            <Grid item xs={12} md={7} className='col2'>
              <Typography variant='h4' className='title'>Our Mission</Typography>

              <div className='container'>
                <ul>
                  <li>For Northern Nigeria to catch up with the fast revolution of ICT.</li>
                  <li>To trigger and enhance the learning of computational and information technology knowledge among student of all stages.</li>
                  <li>To develop student capacity in soft and hard skills for a sustainable economic development.</li>
                  <li>To provide a link between prospective graduates of any profession and the industrial world and with the digital and soft skills necessary to succeed in an ever changing technological world.</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Section2>

        <Section3>
          <Typography variant='h4' className='title'>Our Programs</Typography>
          <Typography variant='body1' className='sub-title'>
            Onsite and Virtual programs designed to engage and enlighten members 
          </Typography>

          <Grid container spacing={10} justifyContent='space-between' alignItems='stretch' className='cards-container'>
            <Section3Card
              image='/imgs/index3.svg'
              title='Meet Ups'
              body='Monthly sessions for members to fuel their passion for tech.'
              colorTheme={Section3CardThemes.green}
              url='/meet_ups'
            />
            <Section3Card
              image='/imgs/index4.svg'
              title='Mentorship program'
              body='A 3-month program for learners to be guided by seasoned professionals in chosen ICT tracks.'
              colorTheme={Section3CardThemes.red}
              url='/programs'
            />
            <Section3Card
              image='/imgs/index5.svg'
              title='Project Building'
              body='Gaining experience working in a team: Researching, designing, and building problem-solving ICT projects.'
              colorTheme={Section3CardThemes.orange}
              url='/projects'
            />
          </Grid>
        </Section3>

        <Section4>
          <Grid container alignItems='center'>
            <Grid item xs={12} md={6}>
              <Typography variant='h4' className='title'>About Us</Typography>

              <div className='container'>
                <Typography variant='body1' className='body'>       
                  Science, Technology, Engineering and Mathematics Coders, abbreviated as STEM Coders, was founded in 2019 with the interest 
                  of IT enthusiasts on campus at heart. It's purpose is to build a community for students from various disciplines to 
                  engage in peer-to-peer learning and gain practical experience in the fields of technology.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={6} className='col2'>
              <img src='/imgs/index6.png' alt='Club Session' className='image'/>
            </Grid>
          </Grid>
        </Section4>

        <Section5>
          <Grid container alignItems='center'>
            <Grid item xs={12} md={6}>
              <Typography variant='h4' className='title'>What Our Members Say</Typography>
              <Typography variant='body1' className='body'>       
                There is power in testimony. 
                Take a look at what our members are saying!
              </Typography>

              <CustomButton variant='contained' color='primary' className='btn' href='/register' 
                endIcon={<ChevronRightRounded className='icon'/>}>
                Join Us
              </CustomButton>
            </Grid>

            <Grid item xs={12} md={6} className='col2'>
              <Section5Card
                image='/imgs/index7.png'
                title='Sheriffdeen Yusuf'
                body={"STEMCoders has groomed me in becoming the frontend developer I am today and on a  path to becoming a better version of me now, as a result of the immense hands-on practical, peer-peer collaboration on projects, exposure to industry standards of software development, and tutoring from professionals in this field amongst others. It's been a wonderful experience."}
              />
              <Section5Card
                image='/imgs/index8.png'
                title='Asmau Abdullahi'
                isHighlighted
                body={"Stem coders offered me the opportunity to harness my leadership skills. This was achieved during my experience as a member of the executive committee in the capacity of financial secretary. In my time so far, teamwork and collaboration were an integral part of my learning process as the importance of these skills is very evident."}
              />
              <Section5Card
                image='/imgs/index9.png'
                title='Daniel Felix, Lawal'
                body={"SCC has proven to be the road guide that I need to always be on the right track. The community has helped me to be able to focus on my Tech career, and help me to achieve my set goals."}
              />
            </Grid>
          </Grid>
        </Section5>

        <Section6>
          <Typography variant='h4' className='title'>We let our works speak for us</Typography>
          <Typography variant='body1' className='sub-title'>
            We take on projects that would provide the best experience for our members and our community at large.
          </Typography>

          <img src='/imgs/index10.png' alt='Project Session' className='image'/>
        </Section6>
      </Root>
    </Layout>
  );
};

export default Index
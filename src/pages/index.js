import { Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";

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
      </Root>
    </Layout>
  );
};

export default Index
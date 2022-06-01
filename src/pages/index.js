import { Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Layout from "../components/Layout";

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

    '& .title': {
      color: theme.colors.textLight,
      fontWeight: 500,
    }
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
          <Grid container alignItems="stretch">
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
              
            </Grid>

            <Grid item xs={12} md={3}>
              <div className='col3'>
                <Grid container flexDirection="column" style={{ height: '100%', width: '100%', background: 'yellow' }}>
                  <Grid item md={6} style={{width: '100%', background: 'red'}}>
                    <div className="shopCard">
                      <img src="imgs/plant.svg" alt="Plant"/>
                      <Typography className='title' variant="h6" component="div">
                        Order a product even before it is harvested.
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item md={6}>
                    <div className="shopCard"></div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Section1>
      </Root>
    </Layout>
  );
};

export default Index
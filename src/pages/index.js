import { Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { styled } from '@mui/material/styles';
import Layout from "../components/Layout";

const Root = styled('div')(({ theme }) => ({
  
}));

const Section1 = styled('div')(({ theme }) => ({
  '& .categories': {
    height: '100%',
    background: theme.palette.primary.main,
    borderRadius: '12px',
    color: theme.colors.textLight,
    
    '& .list': {
      background: 'inherit',
      borderRadius: '12px',

      '& .header': {
        background: 'inherit',
        color: 'white',
        borderRadius: '12px',
      }
    }
  }
}));

const Index = () => {
  return (
    <Layout>
      <Root>
        <Section1>
          <Grid container alignItems="stretch">
            <Grid item xs={12} md={3}>
              <div className="categories">
                <List
                  component="nav"
                  className="list"
                  subheader={
                    <ListSubheader component="div" className='header'>
                      Product Categories
                    </ListSubheader>
                  }
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <img src="imgs/category_vegetables.svg" alt="Vegetables"/>
                    </ListItemIcon>
                    <ListItemText primary="Spices and Vegetables" />
                  </ListItemButton>
                </List>
              </div>
            </Grid>

            <Grid item xs={12} md={8}>
              
            </Grid>
          </Grid>
        </Section1>
      </Root>
    </Layout>
  );
};

export default Index
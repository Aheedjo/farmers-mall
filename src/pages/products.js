import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@mui/icons-material';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Layout from '../components/Layout';

const Root = styled('div')(({ theme }) => ({
  background: 'white',
  borderRadius: '12px'
}));

const Section1 = styled('div')(({ theme }) => ({
  '& .header': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 1rem',

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
        </Section1>
      </Root>
    </Layout>
  );
};

export default Products;
import React from 'react';
import { styled } from '@mui/material/styles';
import { useNotification } from './NotificationContext';
import { Typography } from '@mui/material';

const NotificationContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '20px',
  right: '20px',
  padding: '1rem 2rem',
  borderRadius: '8px',
  backgroundColor: '#333',
  color: 'white',
  zIndex: 1000,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  '&.success': {
    backgroundColor: theme.palette.success.main,
  },
  '&.error': {
    backgroundColor: theme.palette.error.main,
  },
}));

const Notification = () => {
  const { notification } = useNotification();

  if (!notification) return null;

  return (
    <NotificationContainer className={notification.type}>
      <Typography variant="body1">
        {notification.message}
      </Typography>
    </NotificationContainer>
  );
};

export default Notification;

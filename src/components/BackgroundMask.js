// BackgroundMask.js
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundMask = styled(Box)(({ theme }) => ({
  flex: 1,
  background: 'linear-gradient(to bottom, #E2ECDA 100%, #A28729 0%)',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',  
  height: '100vh',  
  borderRadius:'45px',
  overflowY: 'auto',  
  padding: '30px 20px', 
  marginTop:'5%',
}));

const BackgroundMaskComponent = ({ children }) => {
  return (
    <BackgroundMask>
      {children}
    </BackgroundMask>
  );
};

export default BackgroundMaskComponent;

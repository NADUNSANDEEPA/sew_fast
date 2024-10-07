import * as React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';


const GradientBackground = styled(Box)(({ height, width }) => ({
  background: 'linear-gradient(45deg, #EDE7B7 0%, #EDEECB 37%, #F7FDF5 100%)',
  height: height || '100px', 
  width: width || '100%',        
}));

export default GradientBackground;

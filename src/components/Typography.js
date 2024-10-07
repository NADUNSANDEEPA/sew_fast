import React from 'react';
import { Typography } from '@mui/material';


const FormTitle = ({ children, variant = 'h5', align = 'center', gutterBottom = true, sx = {} }) => {
  return (
    <Typography
      variant={variant}
      align={align}
      gutterBottom={gutterBottom}
      sx={{
        fontFamily: 'Inter, sans-serif', 
        fontSize: '27px',                
        fontWeight: 'bold',              
        textDecoration: 'underline',     
        letterSpacing: '1px',           
        ...sx, 
      }}
    >
      {children}
    </Typography>
  );
};

export default FormTitle;

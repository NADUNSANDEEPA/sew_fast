import * as React from 'react';
import { Box, Typography } from '@mui/material';


const Card = ({ children , sx }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width:'90%',
      margin: '0 auto',
      padding: '25px 20px',
      backgroundColor: '#FFFFFF',
      borderRadius: '20px',
      ...sx,
    }}
  >
    {children}
  </Box>
);


const CardTitle = ({ children, sx }) => (
  <Typography
    variant="h5"
    sx={{
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '10px',
      ...sx,
    }}
  >
    {children}
  </Typography>
);


const CardSubtitle = ({ children , sx }) => (
  <Typography
    variant="subtitle1"
    sx={{
      color: '#757575',
      marginBottom: '8px',
      fontSize: '18px',
      ...sx,
    }}
  >
    {children}
  </Typography>
);


const CardParagraph = ({ children , sx }) => (
  <Typography
    variant="body1"
    sx={{
      fontSize: '16px',
      color: '#4F4F4F',
      lineHeight: '1.5',
      ...sx,
    }}
  >
    {children}
  </Typography>
);


export { Card, CardTitle, CardSubtitle, CardParagraph };

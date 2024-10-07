import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material'; 

export default function ButtonComp({ fullWidth = false, variant = 'filled', size = 'md', type = 'button', icon = null, borderRadius = 'md' , onClick = () => {}, children }) {
  const commonStyles = {
    borderRadius: '8px',
    ...(fullWidth && { width: '100%' }),
  };

  const borderRadiusStyles = {
    sm: '4px',  
    md: '8px', 
    lg: '16px',
    xlg : '26px',
  };

  const variantStyles = {
    tblbtn: {
      background: '#F9F9E4',
      color: 'black',
      border:'1px solid #ABBBA4',
      '&:hover': {
        opacity: 0.9,
      },
    },
    filled: {
      background: 'linear-gradient(90deg, #A28729, #1C1B18)',
      color: 'white',
      '&:hover': {
        opacity: 0.9,
      },
    },
    outlined: {
      background: 'transparent',
      border: '3px solid #A28729',
      color: '#A28729',
      '&:hover': {
        background: 'linear-gradient(90deg, #A28729, #1C1B18)',
        color: 'white',
      },
    },
  };

  const sizeStyles = {
    xsm: {
      padding: '6px 12px 6px 12px',
      fontSize: '11px',
    },
    sm: {
      padding: '6px 12px 6px 12px',
      fontSize: '0.625rem',
    },
    md: {
      padding: '5px 15px 3px 15px',
      fontSize: '0.793rem',
    },
    lg: {
      padding: '10px 25px',
      fontSize: '0.900rem',
    },
  };

  return (
    <Button
      onClick={onClick}
      type={type}
      sx={{
        ...commonStyles,
        borderRadius: borderRadiusStyles[borderRadius],
        ...(variantStyles[variant] || variantStyles.filled),
        ...(sizeStyles[size] || sizeStyles.md),
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {children}
        {icon && <span style={{paddingTop:'5px'}}>{icon}</span>} 
      </Box>
    </Button>
  );
}

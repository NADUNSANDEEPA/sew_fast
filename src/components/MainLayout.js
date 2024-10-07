
import * as React from 'react';
import { Box } from '@mui/material';
import GradientBackground from './GradientBackground'; 

export default function MainLayout({ children }) {
  return (
    <GradientBackground height="100vh" width="100vw">
      <Box>
        {children}
      </Box>
    </GradientBackground>
  );
}

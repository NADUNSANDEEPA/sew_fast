import React from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <Box sx={{ padding: '16px' }}>
            <Grid container alignItems="center">
                {/* Left Side: Application Logo */}
                <Grid item xs={6}>
                    <img
                        src="/logo2.png"
                        alt="App Logo"
                        style={{ width: '100px', height: 'auto' }}
                    />
                </Grid>

                {/* Right Side: Menu Icon */}
                <Grid item xs={6} container justifyContent="flex-end">
                    <IconButton aria-label="menu" sx={{
                        backgroundColor: '#EBECBF',
                        borderRadius: '8px',
                        padding: '8px',
                        '&:hover': {
                            backgroundColor: '#d4d5a4'
                        }
                    }}>
                        <MenuIcon sx={{ fontSize: '25px', color: '#7A7B34' , fontWeight:'600'}} />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}

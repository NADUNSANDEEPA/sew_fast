import * as React from 'react';
import { Box, TextField, Button, Typography, FormControl, FormHelperText } from '@mui/material';
import { useState } from 'react';

export default function DataForm({children , onSubmit , isShadow = true}) {

    return (
        <>
            <Box
                onSubmit={onSubmit}
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    maxWidth: '400px',
                    margin: '0 auto',
                    padding: isShadow? '20px':'0px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    boxShadow: isShadow ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none', 
                }}
            >
                {children}
            </Box>
        </>
    );
}

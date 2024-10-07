import React from 'react';
import GradientBackground from '../components/GradientBackground';
import ButtonComp from '../components/Button';
import { Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function FlashScreen({navigation }) {
   
    return (
        <GradientBackground height={"100vh"}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '85vh',
                    padding: '20px',
                }}
            >
                
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={'/logo.png'}
                        alt="Logo"
                        style={{ width: '200px', height: 'auto' }}
                    />
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        paddingBottom: '20px',
                    }}
                >
                    <ButtonComp 
                        onClick={() => navigation.navigate('Login')}
                        fullWidth="true" 
                        size='md' 
                        icon={<ArrowRightAltIcon />} 
                        borderRadius={"xlg"}
                    >
                            Next
                    </ButtonComp>
                </Box>
            </Box>
        </GradientBackground>
    );
}

export default FlashScreen;

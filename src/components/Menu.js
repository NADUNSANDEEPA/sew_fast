import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { styled } from '@mui/system';


const CenterButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    bottom: '0%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#5D550D',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    transition: 'transform 0.3s',
    '&:hover': {
        backgroundColor: '#7A7B34',
    },
}));

const BottomMenu = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: '100%',
            position: 'fixed',
            bottom: 5,
            borderRadius: '31px',
            overflow: 'hidden',
        }}>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                showLabels
                sx={{
                    background: 'linear-gradient(to right, #A28729, #7A7B34)',
                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                    height: '56px',
                    borderRadius: '31px 31px 0 0',
                }}
            >
                <BottomNavigationAction
                    label="Alerts"
                    icon={<NotificationsActiveIcon sx={{ color: value === 0 ? '#efe5aa' : 'white', fontSize: '1.4rem' }} />} 
                    sx={{
                        color: value === 0 ? '#efe5aa' : 'white',
                        '& .Mui-selected': {
                            color: '#efe5aa', 
                        },
                        '& .MuiBottomNavigationAction-label': {
                            fontSize: '0.675rem',
                            color: value === 0 ? '#efe5aa' : 'white', 
                        },
                        typography: 'body2',
                    }}
                />
                <BottomNavigationAction
                    label="Hierarchy"
                    icon={<PeopleIcon sx={{ color: value === 1 ? '#efe5aa' : 'white', fontSize: '1.4rem' }} />} 
                    sx={{
                        color: value === 1 ? '#efe5aa' : 'white',
                        '& .Mui-selected': {
                            color: '#efe5aa', 
                        },
                        '& .MuiBottomNavigationAction-label': {
                            fontSize: '0.675rem',
                            color: value === 1 ? '#efe5aa' : 'white', 
                        },
                        typography: 'body2',
                        marginRight:'20px',
                    }}
                />
                <BottomNavigationAction
                    label="Deadlines"
                    icon={<RunningWithErrorsIcon sx={{ color: value === 2 ? '#efe5aa' : 'white', fontSize: '1.4rem' }} />} 
                    sx={{
                        color: value === 2 ? '#efe5aa' : 'white',
                        '& .Mui-selected': {
                            color: '#efe5aa', 
                        },
                        '& .MuiBottomNavigationAction-label': {
                            fontSize: '0.675rem',
                            color: value === 2 ? '#efe5aa' : 'white', 
                        },
                        typography: 'body2',
                        marginLeft:'22px',
                    }}
                />
                <BottomNavigationAction
                    label="About"
                    icon={<InfoIcon sx={{ color: value === 3 ? '#efe5aa' : 'white', fontSize: '1.4rem' }} />} 
                    sx={{
                        color: value === 3 ? '#efe5aa' : 'white',
                        '& .Mui-selected': {
                            color: '#efe5aa', 
                        },
                        '& .MuiBottomNavigationAction-label': {
                            fontSize: '0.675rem',
                            color: value === 3 ? '#efe5aa' : 'white', 
                        },
                        typography: 'body2',
                    }}
                />
            </BottomNavigation>

            <CenterButton>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFE500' }}>
                    SF
                </Typography>
            </CenterButton>
        </Box>
    );
};

export default BottomMenu;

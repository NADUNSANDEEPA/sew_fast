import React from 'react';
import Header from '../components/Header';
import { styled } from '@mui/material/styles';
import { Box, Divider, Typography, Grid } from '@mui/material';
import BackgroundMaskComponent from '../components/BackgroundMask';
import BottomMenu from '../components/Menu';

const Cell = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '20px',
  border: '1px solid rgba(162, 135, 41, 0.15)',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px 10px',
  minHeight: '170px',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const Dashboard = ({navigation }) => {

  const handleCellClick = (page) => {
    navigation.navigate(page);
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Header />
      <BackgroundMaskComponent>
        <Typography
          sx={{
            color: '#B10505',
            fontSize: '20px',
            fontWeight: '600',
            paddingBottom: '10px',
          }}
        >
          Welcome to Admin Dashboard....
        </Typography>

        <Divider sx={{ backgroundColor: '#CAD7B3', height: '1px' }} />

        <Box sx={{ marginY: '30px', paddingBottom: '40%' }}>
          <Grid container spacing={2}>

            {[
              { imgSrc: "/team.png", title: "Prod. Teams" , page : "TeamsView" },
              { imgSrc: "/dayplan.png", title: "Day Plans" , page : "TeamView" },
              { imgSrc: "/clothes.png", title: "Live Production" , page : "TeamView" },
              { imgSrc: "/reports.png", title: "Past Reports" , page : "TeamView" },
            ].map((item, index) => (
              <Grid item xs={6} key={index}>
                <Cell onClick={() => handleCellClick(item.page)}>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    style={{ width: '80px', height: 'auto' }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      marginTop: '10px',
                      fontSize: '16px',
                      fontWeight: '600',
                      textAlign: 'center',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Cell>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ paddingY: '15%' }}>
          <Typography>&nbsp;</Typography>
        </Box>
      </BackgroundMaskComponent>
      <BottomMenu />
    </Box>
  );
};

export default Dashboard;

import '../App.css';
import React, { useContext, useState } from 'react';
import { useWindowSize } from "../components/useWindowSize"
import Navbar from "../NavBar";
import Footer from '../Footer';
import Flags_Background from '../images/Flags_Background.jpg'
import { Box, Grid, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Information from '../components/Information';
import { useSelector } from 'react-redux';


function TitleHeader(){
  const destination = useSelector((state) => state.destination.destination);
  
  return (
    <Grid item>
      <p style={{ ...titleStyles, marginTop: '64px' }}>Travel Requirements</p>
          <p style={{ ...headingStyles,  marginTop: '18px', }}>Traveling to {destination} </p>
          <p style={{ ...descriptionStyles, marginTop: '32px',marginBottom: '64px' }}>
          Requirements for Philippines Passport Holder
          </p>
    </Grid>
  )
}

function GradientColor(){
  return (
    <Grid item>
      <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #ffffff00 1%, #F6F6F6)',
      }}
    />
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: '#F6F6F6',
      }}
    /> 
    </Grid>
  )
}

function VisaPassportInfo() {
  const [width, height] = useWindowSize()
  const countryname = useState('')
  const requirements = useSelector((state) => state.requirements.requirements);

  return (
    <div className="Requirements" >
  <React.Fragment> 
    <Grid container sx={{display:'flex',height:'100%',flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: `rgba(0, 0, 0, 0.24)`}}>
      <Box sx={{width: '100%',height: '100%',}}>
       <Grid item width={'100vw'}>
          <Paper elevation={3} square sx={{ backgroundColor: `rgba(0, 0, 0, 0.55)` ,}} > 
          <Navbar />
          </Paper>
      </Grid>
      <Grid item>
      <Grid container spacing={2} 
         direction="column"
         justifyContent="flex-start"
         alignItems="center">
    <TitleHeader />
    <Information />
        </Grid>
      </Grid> 
        <Stack item marginTop={'100vh'}>
          <Footer />
        </Stack>
      </Box>
    </Grid>
  </React.Fragment>
</div>
)
  
}

export default VisaPassportInfo;

const bgStyle = {
    position: 'fixed',
    backgroundSize: 'cover',
    zIndex: 3
  };

const titleStyles = {
  fontFamily: 'Mulish',
  fontWeight: 400,
  fontSize: '16px',
  color: '#FFFFFF',
  lineHeight: '30px',
  transition: 'font-size 0.8s ease-in-out', 
};

const headingStyles = {
  fontFamily: 'Mulish',
  fontWeight: 800,
  fontSize: '40px',
  color: '#FFFFFF',
  lineHeight: '46px',
  height: '46px',
  top: '150px',
  transition: 'font-size 0.8s ease-in-out, top 0.8s ease-in-out', 
};

const descriptionStyles = {
  fontFamily: 'Mulish',
  fontWeight: 400,
  fontSize: '18px',
  color: '#FFFFFF',
  lineHeight: '25px',
  textAlign: 'center',
  height: '50px',
  top: '200px',
  transition: 'font-size 0.8s ease-in-out, top 0.8s ease-in-out', 
};

const dropdownStyles = {
  fontFamily: 'Mulish',
  fontWeight: 500,
  fontSize: '24px',
  color: '#FFFFFF',
  lineHeight: '25px',
  textAlign: 'center',
  top: '20px'
}

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




function VisaPassportInfo() {
  const [width, height] = useWindowSize()
  const countryname = useState('')
  const requirements = useSelector((state) => state.requirements.requirements);
  const destination = useSelector((state) => state.destination.destination);

  return (
    <div className="App" style={{backgroundImage: `url(${Flags_Background})`, zIndex: 9}}>
  <React.Fragment>
    <Grid container sx={{display:'flex',height:'100%',flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      <Box sx={{
        width: '100%',
        height: '100%',
        opacity: [1, 1, 1],
      }}>
        <Grid item width={'100vw'}>
          <Navbar />
        </Grid>
        <Stack
  direction="column"
  justifyContent="flex-start"
  alignItems="center"
>
          <p style={{ ...titleStyles, marginTop: '64px', marginBottom: '1px' }}>Travel Requirements</p>
          <p style={{ ...headingStyles, }}>Traveling to {destination} </p>
          <p style={{ ...descriptionStyles, marginTop: '24px',marginBottom: '64px' }}>
          Requirements for Philippines Passport Holder
          </p>
        <Grid item >
          <Information />
        </Grid>
          </Stack>
        <Stack item marginTop={'-110vh'}>
        <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #ffffff00 1%, #F6F6F6)',
        zIndex: -1
      }}
    />
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: '#F6F6F6',
        zIndex: -1
      }}
    />
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

import '../App.css';
import React, {useState, useEffect} from 'react'
import Navbar from "../NavBar";
import Footer from '../Footer';
import Montenegro from '../images/Montenegro.png'
import Checkout from '../components/Checkout'
import { Box, Grid, Paper } from '@mui/material';


function Services() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 600px)').matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
const headingStyles = {
  fontFamily: 'Mulish',
  fontWeight: 800,
  fontSize: isSmallScreen ? '48px' : '56px',
  color: '#FFFFFF',
  lineHeight: isSmallScreen ? '40px' : '48px',
  textAlign: 'justify' ,
  height: '46px',
  transition: 'font-size 0.3s ease-in-out, lineHeight 0.8s ease-in-out', 
};

const descriptionStyles = {
  fontFamily: 'Mulish',
  fontWeight: 300,
  fontSize: isSmallScreen ? '20px' : '24px',
  color: '#FFFFFF',
  textAlign: 'justify',
  transition: 'font-size 0.3s ease-in-out', 

};

const dropdownStyles = {
  fontFamily: 'Mulish',
  fontWeight: 1000,
  fontSize: isSmallScreen ? '40px' : '48px',
  marginTop: '-20px',
  color: '#FFFFFF',
  textAlign: 'justify',
  transition: 'font-size 0.3s ease-in-out', 
}

  return (
    <div className="App">
      <React.Fragment>
        <Grid container sx={{display:'flex',height:'100%',flexDirection: 'column', justifyContent: 'space-between'}} >
          <Box sx={{
          width: '100%',
          height: '100vh',
          bgcolor: 'black',
          opacity: [1, 1, 1],
          marginBottom: '25vh',
          backgroundImage: `url(${Montenegro})`,
          backgroundSize: 'cover',
        }}
      >
          <Grid item width={'100vw'}>
            <Navbar />
          </Grid>
          <Grid item>
          <p style={{ ...headingStyles, marginTop: '64px', marginBottom: '1px' }}>Welcome to</p>
        <p style={{ ...descriptionStyles, marginTop: '24px' }}>FilipinoPassport.com</p>
        <p style={{ ...dropdownStyles, marginTop: '24px',marginBottom: '64px' }}>
          Visa Application Services and Travel Guides
          <br />
          for Philippines Passport Holders
        </p>
          </Grid>
          <Grid item>
            <Checkout />
          </Grid>
          </Box>
          <Grid item >
            <Footer />
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  )
}

export default Services;


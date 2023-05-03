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
      if (window.matchMedia('(max-width: 1024px)').matches) {
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
  fontSize: isSmallScreen ? '40px' : '56px',
  color: '#FFFFFF',
  textAlign: 'justify',
  transition: 'font-size 0.3s ease-in-out', 
}

  return (
    <div className="App">
      <React.Fragment>
      <Grid container >
        <Grid item width={'100vw'}>
            <Navbar />
       </Grid>
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
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Checkout />
          </Grid>
          <Grid item xs={6} >{!isSmallScreen && (
                <>
                  <p style={{ ...headingStyles, marginTop: '96px', lineHeight: '80px' }}>LET'S NOW BOOK YOUR <br />
                    RENTAL FLIGHT TICKET</p>
                  <p style={{ ...descriptionStyles, marginTop: '200px' }}>AT A VERY LOW PRICE OF</p>
                  <p style={{ ...dropdownStyles, marginTop: '1px' }}>
                    30€ EURO or 35$ USD
                  </p>
                </>
              )}</Grid>
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


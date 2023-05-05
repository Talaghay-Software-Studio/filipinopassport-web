import '../App.css';
import React, {useState, useEffect} from 'react'
import Navbar from "../NavBar";
import Footer from '../Footer';
import Montenegro from '../images/Montenegro.png'
import Checkout from '../components/Checkout'
import { Box, Grid, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
 


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
  fontSize: '40px',
  color: '#FFFFFF',
  lineHeight: isSmallScreen ? '40px' : '48px',
  minWidth: '20%' ,
  textAlign: 'left' ,
  height: '46px',
  transition: 'font-size 0.3s ease-in-out, lineHeight 0.8s ease-in-out', 
};

const descriptionStyles = {
  fontFamily: 'Mulish',
  fontWeight: 300,
  fontSize: '16px',
  color: '#FFFFFF',
  textAlign: 'left',
  transition: 'font-size 0.3s ease-in-out', 

};

const dropdownStyles = {
  fontFamily: 'Mulish',
  fontWeight: 1000,
  fontSize:  '40px',
  color: '#FFFFFF',
  textAlign: 'left',
  transition: 'font-size 0.3s ease-in-out', 
}

  return (
    <div className="App">
  <React.Fragment>
    <Grid container>
      <Box sx={{
        width: '100%',
        height: '100%',
        opacity: [1, 1, 1],
        marginBottom: '0%',
      }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          
        <Grid item xs={12} width={'100vw'}>
          <Navbar />
        </Grid>
          <Grid item xs={6} minWidth={'500px'}>
            <Checkout />
          </Grid>
          <Grid item xs={5}>
            {!isSmallScreen && (
              <>
                <p style={{ ...headingStyles, marginTop: '96px', lineHeight: '48px' }}>
                  LET'S NOW BOOK YOUR <br />
                  RENTAL FLIGHT TICKET
                </p>
                <p style={{ ...descriptionStyles, marginTop: '150px' }}>
                  AT A VERY LOW PRICE OF
                </p>
                <p style={{ ...dropdownStyles, marginTop: '10px' }}>
                  30€ EURO or 35$ USD
                </p>
              </>
            )}
          </Grid>
        </Grid>
        <Stack item marginTop={'80vh'}>
          <Footer />
        </Stack>
      </Box>
    </Grid>
  </React.Fragment>
</div>
)
}

export default Services;


import '../App.css';
import React from 'react'
import { useWindowSize } from "../components/useWindowSize"
import Navbar from "../NavBar";
import Dropdown from "../components/Dropdown"
import Footer from '../Footer';
import Flags_Background from '../images/Flags_Background.jpg'
import { Box, Grid, Paper } from '@mui/material';
import { positions } from '@mui/system';




function Home() {
  const [width, height] = useWindowSize()


  return (
    <div className="App" style={{backgroundImage: `url(${Flags_Background})`, zIndex: 9}}>
      <React.Fragment>
        <Grid container sx={{display:'flex',height:'100%',flexDirection: 'column', justifyContent: 'space-between'}} >
          <Box sx={{
          width: '100%',
          height: '100vh',
          bgcolor: 'black',
          opacity: [1, 1, 1],
          marginBottom: '25vh',
        }}
      >
          <Grid item width={'100vw'}>
            <Navbar />
          </Grid>
          <Grid item>
          <p style={{ ...titleStyles, marginTop: '64px', marginBottom: '1px' }}>Welcome to</p>
        <p style={{ ...headingStyles, marginTop: '24px' }}>FilipinoPassport.com</p>
        <p style={{ ...descriptionStyles, marginTop: '24px',marginBottom: '64px' }}>
          Visa Application Services and Travel Guides
          <br />
          for Philippines Passport Holders
        </p>
        <p style={{ ...dropdownStyles, fontSize: '14px', marginBottom: '8px' }}>Where are You Going?</p>
          </Grid>
          <Grid item>
            <Dropdown />
          </Grid>
          </Box>
          <Grid item width={'100vw'}>
            <Footer />
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  )
  
}

export default Home;

const bgStyle = {
    position: 'fixed',
    backgroundSize: 'cover',
    zIndex: 3
  };

const titleStyles = {
  fontFamily: 'Mulish',
  fontWeight: 400,
  fontSize: '20px',
  color: '#FFFFFF',
  lineHeight: '30px',
  transition: 'font-size 0.8s ease-in-out', 
};

const headingStyles = {
  fontFamily: 'Mulish',
  fontWeight: 700,
  fontSize: '32px',
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

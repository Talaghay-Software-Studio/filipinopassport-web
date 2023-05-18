import '../../App.css';
import React, {useState, useEffect} from 'react'
import Navbar from "../../NavBar";
import Footer from '../../Footer';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import letterwriting from '../../images/letterwriting.jpg'
import Checkout from './Checkout';

function RentFlight() {
  return (
    <div className="Page">
   <React.Fragment>
    <Grid container sx={{display:'flex',height:'100%',flexDirection: 'column', justifyContent: 'space-between'}}>
      <Box sx={{
        width: '100%',
        height: '100%',
      }}>
        <Grid item width={'100vw'}>
            <Paper elevation={3}  square sx={{ backgroundColor: '#006173'}} > 
            <Navbar />
            </Paper>
        </Grid>

        <Grid container mb={16} style={{backgroundImage: `url(${letterwriting})`, backgroundSize: 'cover',  backgroundPosition: 'center', minHeight: 300}} >
          <Grid container 
         direction="column"
         justifyContent="center"
         alignItems="center"
        style={{backgroundColor: `rgba(0, 0, 0, 0.42)`}}>
        <Typography variant='h3' color={'#fff'} mt={0}>
        <strong> RENT A FLIGHT SERVICE </strong></Typography>
        <Typography variant='h7' color={'#fff'} mb={3}> 
        For your visa applications in Canada, Europe, USA, Australia, Japan, South Korea and many more!</Typography>
        <Button variant="contained" textSizeSmall sx={{borderRadius: 4, backgroundColor: 'orangered'}}>
        AVAIL NOW </Button>
        </Grid>
        </Grid>

        
        {/* 1st display */}
        <Grid item mb={8} >
          <Typography variant='h4' color={'#136172'} gutterBottom> <strong>LET'S NOW BOOK YOUR RENTAL FLIGHT TICKET FOR ONLY €30 EURO OR $35 USD.</strong></Typography>
          <Typography variant='h6' align='left' mx={8} mb={2}> 
          I took steps to partner with an accredited travel agency in the Middle East catering to OFWs or Filipinos abroad. They don't normally do services like this with random people but only with their regular clients; most of the time, they'll only do it if the person will guarantee to pay the full amount of the ticket. BUT in our case, I explained to them that by partnering with me, we can help travelers with the visa requirements and for those longing to travel long-term and become Digital Nomads.
            <br />
            <br />
            The fee is only €30 EURO ($35 USD or Php 1,600) and the agency will provide a <strong>LEGITIMATE AND UNIQUE FLIGHT BOOKING RESERVATION /PNR NUMBER </strong> for you which can be verified. You can visit respective airlines website, plugin the airline reservation code and your name under manage my bookings.
            <br />
            <br />
            Remember, most of the embassies are only requiring a <strong>CONFIRMED FLIGHT RESERVATION</strong> which is where they based your VISA TRAVEL DATES. They actually discourage you to pay for the full amount of ticket before getting a visa approved! A lot of people are booking everything online and it will be really hard or rare to get a flight ticket that will give you a full refund after a hold period of 3 or 4 weeks which is usually the time frame of your visa application and approval so that’s why I’m offering this service for cheap! Extra Note: We charge €30 per round trip ticket (per person) and extra €30 for every additional leg.
          </Typography>
          {/* <Typography component="ul" variant="body1" align='left' mx={10}>
            <li><strong>PACKAGE A:</strong> 30 mins. Coaching Call + Cover Letter for Tourist Visa - 150 Euro</li>
            <li><strong>PACKAGE B:</strong> Invitation /Guarantor Letter for Tourist Visa (framework will be sent to you)- 70 Euro</li>
            <li><strong>PACKAGE C:</strong> 30 mins. Coaching Call + Study Plan and Letter of Intent for Canada and Australia Student Visa/ Study Permit - 200 Euro</li>
            <li><strong>PACKAGE D:</strong> Travel Insurance Claim Letter - 100 Euro</li>
          </Typography> */}
        </Grid>

        <Grid item mb={8}> 
        <Box sx={{width: '100%', height: 2, backgroundColor: 'white'}}/>
        </Grid>
       
        {/* 2nd display */}

        <Grid item mb={8}>
          <Typography variant='h4' color={'#136172'} gutterBottom mx={8}> <strong>WHY SHOULD YOU TRUST MY TIPS AND RENT-A-FLIGHT SERVICE? </strong></Typography>
          <Typography variant='h6' align='left' mx={8} gutterBottom>
          I am Kach Medina Umandap, a Proud Pinay traveler. I also went through the same hassle and nightmares like you especially when I was a newbie traveler. I was always anxious about getting a visa and passing through Immigration Officers (I know that exact feeling). It is absurd and I don’t want anyone to feel this way anymore, so I’m here to help!<br />
             </Typography>
        </Grid>



        <Grid item mb={8}> 
        <Box sx={{width: '100%', height: 2, backgroundColor: 'white'}}/>
        </Grid>
       
{/* 3rd */}
        <Grid item >
          <Typography variant='h4' color={'#136172'} gutterBottom mx={8}> <strong>HOW TO AVAIL OUR RENT A FLIGHT SERVICE?</strong></Typography>
        </Grid>
        <Grid item>
          <Checkout />
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

export default RentFlight;


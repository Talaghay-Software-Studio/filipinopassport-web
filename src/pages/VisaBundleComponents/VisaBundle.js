import '../../App.css';
import React, {useState, useEffect, useRef} from 'react'
import Navbar from "../../NavBar";
import Footer from '../../Footer';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import visabundle from '../../images/visabundle.jpg'
import Checkout from './Checkout';

function VisaBundle() {
  
  const checkoutRef = useRef(null);

  const handleAvailNowClick = () => {
    checkoutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
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

        <Grid container mb={16} style={{backgroundImage: `url(${visabundle})`, backgroundSize: 'cover',  backgroundPosition: 'center', minHeight: 300}} >
          <Grid container 
         direction="column"
         justifyContent="center"
         alignItems="center"
        style={{backgroundColor: `rgba(0, 0, 0, 0.42)`}}>
        <Typography variant='h3' color={'#fff'} mt={0}>
        <strong>VISA APPLICATION BUNDLE SERVICE </strong></Typography>
        <Typography variant='h7' color={'#fff'} mb={3}> 
        Applicable for tourist visa applications to USA, Canada, Europe, Australia, South Africa, China and other countries.</Typography>
        <Button variant="contained" textSizeSmall sx={{ borderRadius: 4, backgroundColor: 'orangered' }} onClick={handleAvailNowClick}>
                  AVAIL NOW
                </Button>
        </Grid>
        </Grid>

        
        {/* 1st display */}
        <Grid item mb={8} >
          <Typography variant='h4' color={'#136172'} gutterBottom> <strong>WHO IS THIS SERVICE FOR?</strong></Typography>
          <Typography variant='h6' align='left' mx={8}> This service is for anyone who is about 
          to go through the process of applying for a visa but does not have the time or 
          the experience to gather all of the correct documents, reservations, hotel 
          bookings, and other requirements.
          </Typography>
        </Grid>

        <Grid item mb={8}> 
        <Box sx={{width: '100%', height: 2, backgroundColor: 'white'}}/>
        </Grid>
       
        {/* 2nd display */}

        <Grid item mb={8}>
          <Typography variant='h4' color={'#136172'} gutterBottom mx={8}> <strong>WHAT IS INCLUDED IN OUR VISA APPLICATION BUNDLE SERVICE? </strong></Typography>
          <Typography variant='h6' align='left' mx={8} gutterBottom><strong>When you avail the Visa Application Bundle Service, we will provide you with the following:
           </strong> </Typography>
           <Typography component="ul" variant="body1" align='left' mx={10}>
        <li>20 mins Visa Consulting Call with my team - reviewing your documents, application form and answering all of your questions</li>
        <li>Personalized Cover Letter explaining your travel history, rootedness (why you have to return to your country) & Financial Capacity aside from the purpose of travel</li>
        <li>Form Fill up</li>
        <li>Appointment Scheduling</li>
        <li>Invitation Letter Writing</li>
        <li>Detailed Daily Itinerary</li>
        <li>Assistance in Hotel/Apartment Booking Reservation (confirmed under your name unless the trip is sponsored)</li>
        <li>Round Trip Flight Ticket Reservation</li>
        <li>List of Required Documents depending on your situation</li>
        <li>Assistance on How to organize Your Documents, Making Appointments with the Embassy / Visa Center for Biometrics, etc.</li>
      </Typography>
        </Grid>



        <Grid item mb={8}> 
        <Box sx={{width: '100%', height: 2, backgroundColor: 'white'}}/>
        </Grid>
       
{/* 3rd */}
        <Grid item mb={8} >
          <Typography variant='h4' color={'#136172'} gutterBottom mx={8}> <strong>WHAT ARE THE IMPORTANT DETAILS TO KNOW?</strong></Typography>
          <Typography variant='h6' align='left' mx={8} mb={2}> The Visa Application Bundle Service cost will depend on how many days you’d want to receive all the documents. It will take us up 2 weeks to prepare, process, and finalize documents from our side after you send the information and documents required from you.
          </Typography>
          <Typography component="ul" variant="body1" align='left' mx={10}>
            <li><strong>BUNDLE A:</strong> Form Fill up, Visa Appointment Request, Visa Coaching, Invitation Letter Writing, Cover Letter Writing, Assistance on Organizing/Uploading Documents for Submission, Flight ticket reservation, assistance in hotel/apartment booking reservation, travel itinerary - 450 Euro (Php 26,000 or 460 USD)</li>
            <li><strong>BUNDLE B:</strong> Form Fill up, Visa Appointment Request, Visa Coaching, Cover Letter Writing, Flight ticket reservation, assistance in hotel/apartment booking reservation, travel itinerary - 385 Euro (Php 22,000 or 400 USD)</li>
            <li><strong>BUNDLE C:</strong> (For USA visa) Fill up DS160 Form, Visa Appointment Request, Interview Practice, Assistance on Organizing Documents for Submission, Flight ticket reservation, assistance in hotel/apartment booking reservation, travel itinerary - 315 Euro (Php 18,000 or 320 USD)</li>
            <li><strong>BUNDLE D:</strong> Please choose if you’ll want Bundle A or Bundle B then pay the Additional Person Fee for Group Travel - 150 Euro (Php 8,500 or 150 USD)</li>

          
          </Typography>
        </Grid>

        <Grid item mb={8}> 
        <Box sx={{width: '100%', height: 2, backgroundColor: 'white'}}/>
        </Grid>
       
{/* 4th */}
      <Grid item ref={checkoutRef}>
        <Typography variant='h4' color={'#136172'} gutterBottom mb={4} mx={8}> <strong>HOW TO AVAIL OUR VISA APPLICATION BUNDLE SERVICES?</strong></Typography>
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

export default VisaBundle;


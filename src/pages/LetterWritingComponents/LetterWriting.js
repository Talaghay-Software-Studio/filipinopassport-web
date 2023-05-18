import '../../App.css';
import React, {useState, useEffect, useRef, } from 'react'
import Navbar from "../../NavBar";
import Footer from '../../Footer';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import letterwriting from '../../images/letterwriting.jpg'
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

        <Grid container mb={16} style={{backgroundImage: `url(${letterwriting})`, backgroundSize: 'cover',  backgroundPosition: 'center', minHeight: 300}} >
          <Grid container 
         direction="column"
         justifyContent="center"
         alignItems="center"
        style={{backgroundColor: `rgba(0, 0, 0, 0.42)`}}>
        <Typography variant='h3' color={'#fff'} mt={0}>
        <strong> PERSONALIZED COVER LETTER AND INVITATION LETTER WRITING SERVICE </strong></Typography>
        <Typography variant='h7' color={'#fff'} mb={3}> 
        for visa applications</Typography>
        <Button variant="contained" textSizeSmall sx={{ borderRadius: 4, backgroundColor: 'orangered' }} onClick={handleAvailNowClick}>
                  AVAIL NOW
                </Button>
        </Grid>
        </Grid>

        
        {/* 1st display */}
        <Grid item mb={8} >
          <Typography variant='h4' color={'#136172'} gutterBottom> <strong>WHO IS THIS SERVICE FOR?</strong></Typography>
          <Typography variant='h6' align='left' mx={8} mb={2}> 
          If you are applying for a Visa to any country which requires you to submit an application form 
          and supporting documents, either through email or by mail, then your visa application should be
           accompanied by a Visa Application Cover Letter. We know that you are looking at a blank sheet 
           of paper, trying to figure out what information to give and how to phrase it, and that's perfectly
            normal. We have been there too, many times! Some people would even copy a format online thinking 
            that it’s enough for them to use. 
            <br />
            <br />
            If this all sounds familiar, then this service is for you! We have the experience 
            to know the best way to describe your situation to the consul, to improve your chances of 
            a positive result from your visa application. 
            <br />
            <br />
            In short, we can do the following that is personalized on your situation:
          </Typography>
          <Typography component="ul" variant="body1" align='left' mx={10}>
            <li><strong>PACKAGE A:</strong> 30 mins. Coaching Call + Cover Letter for Tourist Visa - 150 Euro</li>
            <li><strong>PACKAGE B:</strong> Invitation /Guarantor Letter for Tourist Visa (framework will be sent to you)- 70 Euro</li>
            <li><strong>PACKAGE C:</strong> 30 mins. Coaching Call + Study Plan and Letter of Intent for Canada and Australia Student Visa/ Study Permit - 200 Euro</li>
            <li><strong>PACKAGE D:</strong> Travel Insurance Claim Letter - 100 Euro</li>
          </Typography>
        </Grid>

        <Grid item mb={8}> 
        <Box sx={{width: '100%', height: 2, backgroundColor: 'white'}}/>
        </Grid>
       
        {/* 2nd display */}

        <Grid item mb={8}>
          <Typography variant='h4' color={'#136172'} gutterBottom mx={8}> <strong>WHY YOU SHOULD AVAIL OF THIS SERVICE? </strong></Typography>
          <Typography variant='h6' align='left' mx={8} gutterBottom>
          We provide a professional visa application service to help alleviate the time-consuming and stressful process of applying for a visa. Our service ensures that your application has a professionally-written cover letter, tailored specifically to your personal situation. By having a well-written letter, you can focus on other aspects of your application, such as gathering documents and preparing for interviews.
<br />
<br />
          Our service guarantees to deliver the drafted letter within 7 days, and we offer up to 2 rounds of edits after sending the initial draft. With our assistance, you can streamline your visa application process and increase the chances of a successful outcome.
             </Typography>
        </Grid>



        <Grid item mb={8}> 
        <Box sx={{width: '100%', height: 2, backgroundColor: 'white'}}/>
        </Grid>
       
{/* 3rd */}
        <Grid item ref={checkoutRef}>
        <Typography variant='h4' color={'#136172'} gutterBottom mx={8}> <strong>WHAT ARE THE IMPORTANT DETAILS TO KNOW?</strong></Typography>
          <Typography variant='h6' align='left' mx={8} mb={2}> The Visa Application Bundle Service cost will depend on how many days you’d want to receive all the documents. It will take us up 2 weeks to prepare, process, and finalize documents from our side after you send the information and documents required from you.
          </Typography>
          <Typography component="ul" variant="body1" align='left' mx={10}>
            <li><strong>BUNDLE A:</strong> Form Fill up, Visa Appointment Request, Visa Coaching, Invitation Letter Writing, Cover Letter Writing, Assistance on Organizing/Uploading Documents for Submission, Flight ticket reservation, assistance in hotel/apartment booking reservation, travel itinerary - 450 Euro (Php 26,000 or 460 USD)</li>
            <li><strong>BUNDLE B:</strong> Form Fill up, Visa Appointment Request, Visa Coaching, Cover Letter Writing, Flight ticket reservation, assistance in hotel/apartment booking reservation, travel itinerary - 385 Euro (Php 22,000 or 400 USD)</li>
            <li><strong>BUNDLE C:</strong> (For USA visa) Fill up DS160 Form, Visa Appointment Request, Interview Practice, Assistance on Organizing Documents for Submission, Flight ticket reservation, assistance in hotel/apartment booking reservation, travel itinerary - 315 Euro (Php 18,000 or 320 USD)</li>
            <li><strong>BUNDLE D:</strong> Please choose if you’ll want Bundle A or Bundle B then pay the Additional Person Fee for Group Travel - 150 Euro (Php 8,500 or 150 USD)</li>

          
          </Typography>
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


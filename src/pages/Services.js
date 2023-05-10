import '../App.css';
import React, {useState, useEffect} from 'react'
import Navbar from "../NavBar";
import Footer from '../Footer';
import { Box, Grid, Paper, Typography, CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import RFService from '../images/RFService.png'
import CLWService from '../images/CLWService.png'
import VABService from '../images/VABService.png'

function RentflightService() {

    return (
        <Grid item>
        <Card sx={{ maxWidth: 345, minWidth: 300, minHeight: 300 }}>
            <CardActionArea href='./rentflight'>
             <CardMedia
                 component="img"
                 height="300"
                 image={RFService}
                 alt="Rent a flight Service"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          For your visa applications in Canada, Europe, USA, Australia, Japan, South Korea etc.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
    )
}

function VisabundleService() {
    return (
        <Grid item>
        <Card sx={{ maxWidth: 345, minWidth: 300, minHeight: 300 }}>
            <CardActionArea>
             <CardMedia
          component="img"
          height="300"
          image={VABService}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Applicable for tourist visa applications to USA, Canada, Australia, Europe, and other countries.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
    )
}

function CoverletterService() {
    return (
        <Grid item>
        <Card sx={{ maxWidth: 345, minWidth: 300, minHeight: 300 }}>
            <CardActionArea>
             <CardMedia
          component="img"
          height="300"
          image={CLWService}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Personalized cover letter and invitation letter writing service
for visa applications
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
    )
}

function Services() {
  return (
    <div className="Page">
   <React.Fragment>
    <Grid container sx={{display:'flex',height:'100%',flexDirection: 'column', justifyContent: 'space-between'}}>
      <Box sx={{
        width: '100%',
        height: '100%',
      }}>
        <Grid item width={'100vw'}>
          <Navbar />
        </Grid>
        <Grid item mt={10} mb={18} >
        <Typography variant='h2'>
            Our Services
        </Typography>
        </Grid>
        <Grid container spacing={3} 
  direction="row"
  justifyContent="center"
  alignItems="center" >
            <RentflightService />
            <VisabundleService />
            <CoverletterService />
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

export default Services;


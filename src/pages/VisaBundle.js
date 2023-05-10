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

function VisaBundle() {
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
        <Grid item mt={10} mb={18} >
        <Typography variant='h2'>
            Under Construction
        </Typography>
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


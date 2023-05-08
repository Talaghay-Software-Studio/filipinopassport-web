import { useState } from 'react';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';
import { visainfo, destination } from './Dropdown';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

export default function Information() {
	const navigate = useNavigate()
    const requirements = useSelector((state) => state.requirements.requirements);
    const destination = useSelector((state) => state.destination.destination);

    function renderText(requirements) {
        let textToRender;
    
        if (typeof requirements === "number") {
            textToRender = `The Philippines passport holders can visit ${destination} visa-free for a maximum stay of ${requirements} days`;
        } else if (requirements === "e-Visa") {
          textToRender = "Electronic visas are filled out online on an official government website or through a travel agency.";
        } else if (requirements === "Visa Required") {
            textToRender = "You must apply for a visa prior to entry. This likely means you'll have to file documents, pay a fee, and visit an embassy.";
        } else if (requirements === "Visa on Arrival") {
            textToRender = "You don't need a visa if you have a Philippines passport. Before going through customs, you'll have to fill out a form and possibly pay an entry-fee at the airport.";
        } else {
            textToRender = "We can't find the visa requirement you were looking for ";
        }
    
        return textToRender 
      } 

      function renderRequirements(requirements) {
        let visaRequirements;
    
        if (typeof requirements === "number") {
            visaRequirements = `Visa Free for ${requirements} days`;
        } else {
            visaRequirements = `${requirements}`
        }
    
        return visaRequirements 
      } 

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Container component="main"  >
        <Paper elevation={24} variant="outlined" align="center"  sx={{ p: 2, 
    marginTop: 8, width: '80vw', borderRadius: 4, minWidth: 450  }}>
        <Box sx={{
    width: 400,
    height: 60,
    backgroundColor: 'orangered',
    marginTop: -5,
    paddingTop: 2,
    borderRadius: 4,
  }} 
  > 
  <Typography component="h3" variant="h5" align="center" color={'white'} >
  Here are the things you need  </Typography>
  </Box>
  <Grid
  container
  direction="column"
  justifyContent="flex-start"
  alignItems="flex-start"
 >
  
  <Typography variant='h4' mt={8} sx={{marginLeft: 8, marginRight: 8}} textAlign={'left'} > Visa</Typography>
  <Box sx={{marginLeft: 8 ,marginTop: 3, width: 100, height: 2, backgroundColor: 'orangered',}} align={'left'}></Box>
  <Typography variant='h5' mt={3} sx={{marginLeft: 8, marginRight: 8}} textAlign={'left'}> {renderRequirements(requirements)} </Typography>
  <Typography variant='h7' mt={1} sx={{marginLeft: 8, marginRight: 8}} color="GrayText" textAlign={'left'} > {renderText(requirements)} </Typography>
  <Box sx={{marginLeft: 8 ,marginTop: 3, width: 100, height: 2, backgroundColor: 'whitesmoke',}} align={'left'}></Box>
  <Typography variant='h4' mt={3} sx={{marginLeft: 8, marginRight: 8}} textAlign={'left'}> Passport</Typography>
  <Box sx={{marginLeft: 8 ,marginTop: 3, width: 100, height: 2, backgroundColor: 'orangered',}} align={'left'}></Box>
  <Typography variant='h5' mt={3} sx={{marginLeft: 8, marginRight: 8}} textAlign={'left'} > Passport is required</Typography>
  <Typography variant='h7' mt={1} sx={{marginLeft: 8, marginRight: 8, marginBottom: 8}} color="GrayText" textAlign={'left'} > Passports and other documents accepted for entry must be valid on arrival. <br/>
  <br/>
  Passport has at least 2 blank visa pages.</Typography>
  </Grid>
  </Paper>
      </Container>
<Container component="main" align="center"  >
        <Paper elevation={24} variant="outlined" align="center"  sx={{ p: 2, 
    marginTop: 3, width: '80vw', borderRadius: 4, minWidth: 450 }}>
  <Grid
  container
  direction="column"
  justifyContent="flex-start"
  alignItems="flex-start"
 >
  
  <Typography variant='h4' mt={4} sx={{marginLeft: 8, marginRight: 8}} textAlign={'left'} > 
    Do you Need a flight reservation for your visa application?</Typography>
  <Box sx={{marginLeft: 8 ,marginTop: 3, width: 100, height: 2, backgroundColor: 'orangered', }} Align={'left'}></Box>
  <Typography variant='h5' mt={2} sx={{marginLeft: 8, marginRight: 8}} textAlign={'left'}> Avail our Rent-a-Flight service for your Visa application</Typography>
  <Typography variant='h7' mt={1} sx={{marginLeft: 8, marginRight: 8}} color="GrayText" textAlign={'left'} > We offer legitimate and unique flight booking reservation for a fee of €30 EURO ($35 USD or Php 1,600) which can be verified by visiting the respective airline's website. Embassies only require a confirmed flight reservation for visa travel dates, and discourage paying for the full amount of the ticket before getting a visa approved. The service is offered at a low cost because it can be hard to get a refund after the hold period of 3 or 4 weeks, which is usually the timeframe for visa application and approval. The agency charges €30 per round trip ticket per person and an additional €30 for every additional leg.</Typography>
  <Box sx={{marginLeft: 8 ,marginTop: 3, width: 100, height: 2, backgroundColor: 'whitesmoke',}}></Box>
  </Grid>
  <Button variant="contained" textSizeSmall sx={{borderRadius: 4, backgroundColor: 'orangered'}}
  onClick={() => {
    navigate("/services")
  }}
>
  RESERVE NOW
</Button>
  </Paper>
      </Container>
    </ThemeProvider>
  );
}


const theme = createTheme({
  typography: {
    fontSize: 14,
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '0.875rem',
    },
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#36ADA8',
        darker: '#36ADA8',
      },
      neutral: {
        main: '#36ADA8',
        contrastText: '#fff',
      },
    },
  },
});

import { useState } from 'react';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useSelector } from 'react-redux';

const steps = ['Traveler Information', 'Payment Methods', 'Order Confirmation'];


function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() { 
  const [paymentDetails, setPaymentDetails] = useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const deliveryEmailAddress = useSelector((state) => state.deliveryEmailAddress.deliveryEmailAddress);
  const travelerName = useSelector((state) => state.travelerName.travelerName);
  const travelerFlightDetails = useSelector((state) => state.travelerFlightDetails.travelerFlightDetails);

  // {deliveryEmailAddress} {travelerName} {travelerFlightDetails}
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Container component="main" maxWidth="xs"  >
        <Paper elevation={12} variant="outlined" align="center" sx={{ p: 2, 
    marginTop: 8, }}>
        <Box
  sx={{
    width: 350,
    height: 50,
    backgroundColor: 'orangered',
    marginTop: -5,
    borderRadius: 4,
    paddingTop: 1
  }}> 
  <Typography component="h3" variant="h5" align="center" color={'white'} >
  Flight Rental Reservation
  </Typography>
  </Box>
          
          <Stepper activeStep={activeStep} sx={{ pt: 2 }} gutter>
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom marginTop={2}>
                Thank you for your order.
              </Typography>
              <Typography variant="body2" gutterBottom>
              You will receive an email confirmation from our team member or the travel agency,if not please send a follow up email to help@filipinopassport.com to assist you.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ ml: 2, color: '#36ADA8',}}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ ml: 2, color: '#fff', bgcolor: '#36ADA8' }}
                >
                  {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
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

import * as React from 'react';
import emailjs from '@emailjs/browser';
import dayjs from 'dayjs';
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
import { updateTotalAmountVisaBundle } from '../../components/store';


const steps = ['Shipping address', 'Payment details', 'Review your order'];

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

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const deliveryEmailAddress = useSelector((state) => state.deliveryEmailAddress.deliveryEmailAddress);
  const travelerName = useSelector((state) => state.travelerName.travelerName);
  const sponsorBackground = useSelector((state) => state.sponsorBackground.sponsorBackground);
  const companion = useSelector((state) => state.companion.companion);
  const visitingCountry = useSelector((state) => state.visitingCountry.visitingCountry);
  const dailyBudget = useSelector((state) => state.dailyBudget.dailyBudget);
  const entireBudget = useSelector((state) => state.entireBudget.entireBudget);
  const whatsappInfo = useSelector((state) => state.whatsappInfo.whatsappInfo);
  const facebookInfo = useSelector((state) => state.facebookInfo.facebookInfo);
  const backgroundInfo = useSelector((state) => state.backgroundInfo.backgroundInfo);
  const selectedVisa = useSelector((state) => state.selectedVisa);
  const selectedSponsor = useSelector((state) => state.selectedSponsor)
  const startDate = useSelector((state) => state.startDate.startDate);
  const formattedStartDate = dayjs(startDate).format('MMMM D, YYYY');
  const endDate = useSelector((state) => state.endDate.endDate);
  const formattedEndDate = dayjs(endDate).format('MMMM D, YYYY');
  const selectedAdditional = useSelector((state) => state.selectedAdditional);
  const selectedBundle = useSelector((state) => state.selectedBundle);
  const referenceNumber = useSelector((state) => state.referenceNumber.referenceNumber);
  const TotalAmountVisaBundle = useSelector((state) => state.totalAmountVisaBundle);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    // alert(TotalAmountVisaBundle)
    // alert(`Selected Bundle: ${selectedBundle}`)
    // alert(`Additional: ${selectedAdditional}`)
    // alert(`Start Date: ${formattedStartDate}`)
    // alert(`End Date: ${formattedEndDate}`)
    // alert(`Selected Sponsor: ${selectedSponsor}`)
    // alert(`Selected Visa: ${selectedVisa}`)
    // alert(`deliveryEmailAddress: ${deliveryEmailAddress}`)
    // alert(`travelerName: ${travelerName}`)
    // alert(`Sponsor Background: ${sponsorBackground}`);
    // alert(`Companion: ${companion}`);
    // alert(`Visiting Country: ${visitingCountry}`);
    // alert(`Daily Budget: ${dailyBudget}`);
    // alert(`Entire Budget: ${entireBudget}`);
    // alert(`WhatsApp Info: ${whatsappInfo}`);
    // alert(`Facebook Info: ${facebookInfo}`);
    // alert(`Background Info: ${backgroundInfo}`);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleEmailSend = () => {
    const emailParams = {
      to_email: 'help@filipinopassport.com',
      name: `${travelerName}`,
      subject: 'VISA APPLICATION BUNDLE',
      body: `
      delivery Email Address: ${deliveryEmailAddress}
      Traveler Name: ${travelerName}
      Selected Visa: ${selectedVisa}
      Sponsorship: ${selectedSponsor}
      Sponsor Background: ${sponsorBackground}
      Companion: ${companion}
      Visiting Country: ${visitingCountry}
      Start Date: ${formattedStartDate}
      End Date: ${formattedEndDate}
      Daily Budget: ${dailyBudget}
      Budget for the Entire Trip: ${entireBudget}
      WhatsApp Info: ${whatsappInfo}
      Facebook Info: ${facebookInfo}
      Background Info: ${backgroundInfo}
      Selected Bundle: ${selectedBundle}
      Additional Leg: ${selectedAdditional}
      Total Amount: $${TotalAmountVisaBundle}
      Reference Number: ${referenceNumber}
      `,
    };
  
    emailjs.send(
      'service_w2q2tu7',
      'template_xrapxu8',
      {
        to_email: emailParams.to_email,
        subject: emailParams.subject,
        body: emailParams.body,
        name: emailParams.name
      },
      'Ng4VM8Cb1b78fOxtA'
    ).then((result) => {
      console.log(result.text);
      // alert('Email sent successfully!');
      setActiveStep(activeStep + 1)
    }, (error) => {
      console.log(error.text);
      alert('An error occurred, please try again later.');
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" align="center" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            width: 350,
            height: 50,
            backgroundColor: 'orangered',
            marginTop: -5,
            borderRadius: 4,
            paddingTop: 1
          }}> 
          <Typography component="h3" variant="h6" align="center" color={'white'} >
            Visa Application Bundle
          </Typography>
          </Box>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
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
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                   <Button
                      variant="contained"
                      onClick={activeStep === steps.length - 1 ? handleEmailSend : handleNext}
                      sx={{ ml: 2, color: '#fff', bgcolor: '#36ADA8' }}
                    >
                      {activeStep === steps.length - 1 ? 'Send Email' : 'Next'}
                    </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

import * as React from 'react';
import emailjs from '@emailjs/browser';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
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
  const deliveryEmailAddress = useSelector((state) => state.deliveryEmailAddress.deliveryEmailAddress);
  const situationInfo = useSelector((state) => state.situationInfo.situationInfo)
  const firstName = useSelector((state) => state.firstName.firstName)
  const lastName = useSelector((state) => state.lastName.lastName)
  const personName = useSelector((state) => state.personName.personName)
  const selectedVisa = useSelector((state) => state.selectedVisa);
  const selectedService = useSelector((state) => state.selectedService.selectedService)
  const submitDate = useSelector((state) => state.submitDate.submitDate);
  const formattedsubmitDate = dayjs(submitDate).format('MMMM D, YYYY');
  const TotalAmountVisaBundle = useSelector((state) => state.totalAmountVisaBundle);
  const referenceNumber = useSelector((state) => state.referenceNumber.referenceNumber);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    // alert(deliveryEmailAddress)
    // alert(situationInfo)
    // alert(firstName)
    // alert(lastName)
    // alert(personName)
    // alert(selectedVisa)
    // alert(selectedService)
    // alert(formattedsubmitDate)
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleEmailSend = () => {
    const emailParams = {
      to_email: 'jayroldsoriano@yahoo.com',
      name: `${lastName} ${firstName}`,
      subject: 'Personalized Letter Writing',
      body: `
      Full Name: ${lastName}, ${firstName}
      delivery Email Address: ${deliveryEmailAddress}
      Letter Need: ${personName}
      Visa Applying: ${selectedVisa}
      Service Type: ${selectedService}
      Total Amount: €${TotalAmountVisaBundle}
      Reference Number: ${referenceNumber}
      Visa Application Appointment: ${formattedsubmitDate}
      More details about their situation: ${situationInfo}
      `,
    };
  
    emailjs.send(
      'service_p7hl1se',
      'template_q1ywn0p',
      {
        to_email: emailParams.to_email,
        subject: emailParams.subject,
        body: emailParams.body,
        name: emailParams.name
      },
      'jeroc5YzX9FkgzqUm'
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
            Personalized Letter Writing 
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

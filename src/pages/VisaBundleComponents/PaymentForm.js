import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SelectBundle, SelectAdditional } from './Selections';


export default function PaymentForm() {
  const dispatch = useDispatch();
  const selectedAdditional = useSelector((state) => state.selectedAdditional);
  const selectedBundle = useSelector((state) => state.selectedBundle);
  
  const [totalAmountVisaBundle, setTotalAmountVisaBundle] = useState(0);

  useEffect(() => {
    if (selectedBundle === 'Bundle A') {
      setTotalAmountVisaBundle(selectedAdditional * 150 + 460);
    } else if (selectedBundle === 'Bundle B') {
      setTotalAmountVisaBundle(selectedAdditional * 150 + 400);
    } else if (selectedBundle === 'Bundle C') {
      setTotalAmountVisaBundle(selectedAdditional * 150 + 315);
    }
  }, [selectedBundle, selectedAdditional]);

  return (
    
    <React.Fragment>
      <Typography variant="h6" mb={2} gutterBottom>
      <strong>Step 2:</strong> Proceed to Checkout
      </Typography>
      <Typography variant="body1" align='left' mb={2} gutterBottom>
     <strong>BUNDLE A:</strong> Form Fill up, Visa Appointment Request, Visa Coaching, Invitation Letter Writing, Cover Letter Writing, Assistance on Organizing/Uploading Documents for Submission, Flight ticket reservation, assistance in hotel/apartment booking reservation, travel itinerary - 450 Euro (Php 26,000 or 460 USD)
      </Typography>
      <Typography variant="body1" align='left' mb={2} gutterBottom> 
      <strong>BUNDLE B:</strong> Form Fill up, Visa Appointment Request, Visa Coaching, Cover Letter Writing, Flight ticket reservation, assistance in hotel/apartment booking reservation, travel itinerary - 385 Euro (Php 22,000 or 400 USD)
      </Typography>
      <Typography variant="body1" align='left' mb={2} gutterBottom> 
      <strong>BUNDLE C:</strong> (For USA visa) Fill up DS160 Form, Visa Appointment Request, Interview Practice, Assistance on Organizing Documents for Submission, Flight ticket reservation, assistance in hotel/apartment booking reservation, travel itinerary - 315 Euro (Php 18,000 or 320 USD)
      </Typography>
      <Typography variant="body1" align='left' mb={2} gutterBottom> 
      <strong>Additional Leg:</strong> Please choose if you’ll want Bundle A or Bundle B then pay the Additional Person Fee for Group Travel - 150 Euro (Php 8,500 or 150 USD)
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
         <SelectBundle />
        </Grid>
        <Grid item xs={12} sm={6}>
         <SelectAdditional />
        </Grid>
      </Grid>
      <Grid >
      <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'white' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs >
            <Typography gutterBottom variant="h6" component="div">
              Total: <strong>${totalAmountVisaBundle}</strong> 
            </Typography>
          </Grid>
          <Box
  sx={{
    width: 350,
    height: 3,
    backgroundColor: 'darkgray',
  }}
/>
        </Grid>
        <Typography color="text.secondary" variant="body2" marginTop={1}>
        Kindly ensure that you pay the correct amount of <strong>${totalAmountVisaBundle}</strong>  using the payment partners on the next step. Thank you!  
        </Typography>
      </Box>
    </Box>
      </Grid>
    </React.Fragment>
  );
}

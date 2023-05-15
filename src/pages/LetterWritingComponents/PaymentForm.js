import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SelectPackage, } from './Selections';
import { updateTotalAmountVisaBundle } from '../../components/store';


export default function PaymentForm() {
  const dispatch = useDispatch();
  const selectedAdditional = useSelector((state) => state.selectedAdditional);
  const selectedBundle = useSelector((state) => state.selectedBundle);
  const TotalAmountVisaBundle = useSelector((state) => state.totalAmountVisaBundle);

  useEffect(() => {
    let updatedTotalAmountVisaBundle = 0;
  
    if (selectedBundle === 'Package A') {
      updatedTotalAmountVisaBundle = 150 
    } else if (selectedBundle === 'Package B') {
      updatedTotalAmountVisaBundle = 70
    } else if (selectedBundle === 'Package C') {
      updatedTotalAmountVisaBundle = 200
    }
    else if (selectedBundle === 'Package D') {
      updatedTotalAmountVisaBundle = 200
    }
  
    dispatch(updateTotalAmountVisaBundle(updatedTotalAmountVisaBundle));
  }, [selectedBundle, selectedAdditional, dispatch]);

  return (
    
    <React.Fragment>
      <Typography variant="h6" mb={2} gutterBottom>
      <strong>Step 2:</strong> Proceed to Checkout
      </Typography>
      <Typography variant="body1" align='left' mb={2} gutterBottom>
     <strong>PACKAGE A:</strong> 30 mins. Coaching Call + Cover Letter for Tourist Visa - 150 Euro
     </Typography>
      <Typography variant="body1" align='left' mb={2} gutterBottom> 
      <strong>PACKAGE B:</strong>  Invitation /Guarantor Letter for Tourist Visa <br /> (framework will be sent to you) - 70 Euro
      </Typography>
      <Typography variant="body1" align='left' mb={2} gutterBottom> 
      <strong>PACKAGE C:</strong> 30 mins. Coaching Call + Study Plan and Letter of Intent for Canada and Australia Student Visa/ Study Permit - 200 Euro
      </Typography>
      <Typography variant="body1" align='left' mb={2} gutterBottom> 
      <strong>PACKAGE D:</strong> Travel Insurance Claim Letter - 100 Euro
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
         <SelectPackage />
        </Grid>
      </Grid>
      <Grid >
      <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'white' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs >
            <Typography gutterBottom variant="h6" component="div">
              Total: <strong>€{TotalAmountVisaBundle.toString()}</strong> 
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
        Kindly ensure that you pay the correct amount of <strong>€{TotalAmountVisaBundle.toString()}</strong>  using the payment partners on the next step. Thank you!  
        </Typography>
      </Box>
    </Box>
      </Grid>
    </React.Fragment>
  );
}

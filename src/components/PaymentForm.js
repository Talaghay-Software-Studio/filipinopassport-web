import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SelectQuantity from './SelectQuantity';
import SelectType from './SelectType';
import Box from '@mui/material/Box';
import { updatetotalAmount } from './store';
import { useDispatch } from 'react-redux';




export default function PaymentForm() {
  const [quantity, setQuantity] = React.useState('');
  const totalAmount = quantity * 30;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatetotalAmount(totalAmount));
  }, [totalAmount, dispatch]);
  
  return (
    
    <React.Fragment>
      <Typography variant="h4" gutterBottom marginTop={2}>
      Pay via Bank Transfer
      </Typography>
      <Typography variant="body1" align='left' gutterBottom>
      Per Person: €30 ($30 or PHP 1,600 Pesos) for One Way or Return Flight Ticket
      </Typography>
      <Typography variant="body1" align='left' gutterBottom> 
      Expedite Service (within 8 hours): €40 ($40 or Php 2,100) currently sold out
      </Typography>
      <Typography variant="body1" align='left' gutterBottom> 
Additional Leg: €30 ($30 or PHP 1,600 Pesos)
      </Typography>
      <Grid container spacing={3}>
        <Grid item wrap-xs-nowrap xs={12} md={6}>
      <SelectQuantity quantity={quantity} setQuantity={setQuantity}/>
        </Grid>
        <Grid item wrap-xs-nowrap xs={12} md={6}>
      <SelectType />
        </Grid>
      </Grid>
      <Grid >
      <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'white' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs >
            <Typography gutterBottom variant="h6" component="div">
              Total
            </Typography>
          </Grid>
          <Grid item xs  >
            <Typography gutterBottom variant="h4" component="div">
            {`$${totalAmount}`}
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
        Kindly ensure that you pay the correct amount of {`$${totalAmount}`} using the payment partners on the next step. Thank you!  
        </Typography>
      </Box>
    </Box>
      </Grid>
    </React.Fragment>
  );
}

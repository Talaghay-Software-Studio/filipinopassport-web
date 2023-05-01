import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Datepicker from './Datepicker';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h4" marginTop={2} gutterBottom>
      Fill up the Form below
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Delivery Email Address"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="travelername"
            name="travelername"
            label="Traveler's Name"
            helperText="Follow this format:                                                              
            Mr or Ms or Mrs/LASTNAME/FIRSTNAME/MIDDLENAME
            (Separate names using comma if traveling with someone)"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="flightdetails"
            name="flightdetails"
            label="Traveler Flight Details"
            helperText="Example: (December 1, 2020) Manila - Heathrow                (January 3, 2021) Heathrow - Manila"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} fullWidth>
          <Datepicker fullWidth/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

{/* <TextField
            required
            id="flightdate"
            name="flightdate"
            label="When Is Your Appointment or Flight Date? "
            helperText="Tell us when the ticket will be used as we recommend sending your ticket 3 days before for longer reservation period."
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          /> */}
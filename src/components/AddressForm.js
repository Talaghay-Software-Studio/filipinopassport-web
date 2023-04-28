import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
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
            id="address1"
            name="address1"
            label="Traveler's Name"
            helperText="Kindly indicate in this Format: 
            Mr or Ms or Mrs/LAST NAME/FIRST NAME/MIDDLE NAME
            (Include companion's name if traveling with someone)"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Traveler Flight Details"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

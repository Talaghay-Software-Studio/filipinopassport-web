import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { updatedeliveryEmailAddress, updatetravelerName, updatetravelerFlightDetails, updateflightDate} from '../../components/store';
import DatePickerValue from './Datepicker';

export default function AddressForm() {
  const [deliveryEmailAddress, setDeliveryEmailAddress] = useState(null);
  const [travelerName, setTravelerName] = useState(null);
  const [travelerFlightDetails, setTravelerFlightDetails] = useState(null);
  const [flightDate, setFlightDate] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatedeliveryEmailAddress(deliveryEmailAddress));
    dispatch(updatetravelerName(travelerName));
    dispatch(updatetravelerFlightDetails(travelerFlightDetails));
    dispatch(updateflightDate(flightDate));
  }, [deliveryEmailAddress, travelerName, travelerFlightDetails, flightDate, dispatch]);


  return (
    <React.Fragment>
      <Typography variant="h4" marginTop={2} gutterBottom>
      Fill up the Form below
      </Typography>
      <form>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              required
              id="deliveryEmailAddress"
              name="deliveryEmailAddress"
              label="Delivery Email Address"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
              value={deliveryEmailAddress}
              onChange={(e) => {
                setDeliveryEmailAddress(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="travelerName"
              name="travelerName"
              label="Traveler's Name"
              helperText="Follow this format: Mr or Ms or Mrs/LASTNAME/FIRSTNAME/MIDDLENAME (Separate names using comma if traveling with someone)"
              fullWidth
              autoComplete="shipping address-line1"
              variant="outlined"
              value={travelerName}
              onChange={(e) => {
                setTravelerName(e.target.value);
              }}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="travelerFlightDetails"
              name="travelerFlightDetails"
              label="Traveler Flight Details"
              helperText="Example: (December 1, 2020) Manila - Heathrow (January 3, 2021) Heathrow - Manila"
              fullWidth
              autoComplete="shipping address-line2"
              variant="outlined"
              value={travelerFlightDetails}
              onChange={(e) => {
                setTravelerFlightDetails(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} >
            <DatePickerValue fullWidth/>
          </Grid>
          <Grid item xs={12}>
            {/* <button type="submit" href="mailto:jayroldsoriano@yahoo.com?subject=Rent-a-flight%20Reservation&body=%28Delivery%20Email%20Address%3A%20${formData.deliveryEmailAddress}%5CnTraveler%27s%20Name%3A%20${formData.travelerName}%5CnTraveler%20Flight%20Details%3A%20${formData.travelerFlightDetails}%5CnFlight%20Date%3A%20${formData.flightDate}%29">Send Reservation</button> */}
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}

import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import MultipleSelect, {SelectVisa, SelectedService} from './Selections';
import SubmitDatePickerValue from './SubmitDatePickerValue';
import {updatedeliveryEmailAddress, updateSituationInfo, updatefirstName, updatelastName, } from '../../components/store';


export default function AddressForm() {
  const [deliveryEmailAddress, setDeliveryEmailAddress] = useState(null);
  const [situationInfo, setSituationInfo] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatedeliveryEmailAddress(deliveryEmailAddress));
    dispatch(updatefirstName(firstName));
    dispatch(updatelastName(lastName));
    dispatch(updateSituationInfo(situationInfo));
  }, [deliveryEmailAddress, firstName, lastName, situationInfo, dispatch]);
  

  return (
    <React.Fragment>
      <Typography variant="h6" mb={2} gutterBottom>
      <strong>Step 1:</strong> Fill up the Form below
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="deliveryEmailAddress"
            name="deliveryEmailAddress"
            label="Delivery Email Address"
            fullWidth
            variant="outlined"
            value={deliveryEmailAddress}
            onChange={(e) => {
                setDeliveryEmailAddress(e.target.value);
              }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              variant="outlined"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              variant="outlined"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
        </Grid>
        <Grid item xs={12} fullWidth>
         <MultipleSelect />
        </Grid>
        <Grid item xs={12} sm={6}>
        <SelectVisa />
        </Grid>
        <Grid item xs={12} sm={6}>
        <SelectedService />
        </Grid>
        
        <Grid item xs={12} fullWidth>
            <SubmitDatePickerValue fullWidth/>
          </Grid>
        <Grid item xs={12}>
        <TextField
              required
              id="situationInfo"
              name="situationInfo"
              label="Tell us more about your situation."
              fullWidth
              helperText="Write down here all the details about your work, source of income,rootedness, job, the purpose of travel, etc."
              variant="outlined"
              value={situationInfo}
              onChange={(e) => {
                setSituationInfo(e.target.value);
              }}
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

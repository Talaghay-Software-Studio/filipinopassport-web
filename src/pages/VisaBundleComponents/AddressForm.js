import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import {SelectVisa, SelectSponsor} from './Selections';
import StartDatePickerValue from './StartDatePickerValue';
import EndDatePickerValue from './EndDatePickerValue';
import { updateSponsorBackground, updateCompanion, updateVisitingCountry, updateDailyBudget, updateEntireBudget, updateWhatsappInfo, updateFacebookInfo, updateBackgroundInfo, updatedeliveryEmailAddress, updatetravelerName,  } from '../../components/store';


export default function AddressForm() {
  const [deliveryEmailAddress, setDeliveryEmailAddress] = useState(null);
  const [travelerName, setTravelerName] = useState(null);
  const [sponsorBackground ,setSponsorBackground] = useState(null)
  const [companion, setCompanion] = useState(null)
  const [visitingCountry, setVisitingCountry] = useState(null)
  const [dailyBudget, setDailyBudget] = useState(null)
  const [entireBudget, setEntireBudget] = useState(null)
  const [whatsappInfo, setWhatsappInfo] = useState(null)
  const [facebookInfo, setFacebookInfo] = useState(null)
  const [backgroundInfo, setBackgroundInfo] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatedeliveryEmailAddress(deliveryEmailAddress));
    dispatch(updatetravelerName(travelerName));
    dispatch(updateSponsorBackground(sponsorBackground));
    dispatch(updateCompanion(companion));
    dispatch(updateVisitingCountry(visitingCountry));
    dispatch(updateDailyBudget(dailyBudget));
    dispatch(updateEntireBudget(entireBudget));
    dispatch(updateWhatsappInfo(whatsappInfo));
    dispatch(updateFacebookInfo(facebookInfo));
    dispatch(updateBackgroundInfo(backgroundInfo));
  }, [deliveryEmailAddress, travelerName, sponsorBackground, companion, visitingCountry, dailyBudget, entireBudget, whatsappInfo, facebookInfo, backgroundInfo, dispatch]);
  

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
        <Grid item xs={12}>
        <TextField
              required
              id="travelerName"
              name="travelerName"
              label="Traveler's Name"
              helperText="Follow this format: Mr or Ms or Mrs/LASTNAME/FIRSTNAME/MIDDLENAME (Separate names using comma if traveling with someone)"
              fullWidth
              variant="outlined"
              value={travelerName}
              onChange={(e) => {
                setTravelerName(e.target.value);
              }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
         <SelectVisa />
        </Grid>
        <Grid item xs={12} sm={6}>
         <SelectSponsor />
        </Grid>
        <Grid item xs={12}>
        <TextField
              required
              id="sponsorBackground"
              name="sponsorBackground"
              label="If the trip is sponsored, who is paying for this?"
              helperText="If not, tell me about your work background/ source of income."
              fullWidth
              variant="outlined"
              value={sponsorBackground}
              onChange={(e) => {
                setSponsorBackground(e.target.value);
              }}
            />
        </Grid>
        <Grid item xs={12}>
        <TextField
              required
              id="companion"
              name="companion"
              label="Are you traveling with someone else?"
              helperText="Separate each with comma. e.g Name Relationship, Name Relationship"
              fullWidth
              variant="outlined"
              value={companion}
              onChange={(e) => {
                setCompanion(e.target.value);
              }}
            />
        </Grid>
        <Grid item xs={12}>
        <TextField
              required
              id="visitingCountry"
              name="visitingCountry"
              label="Cities or Countries You Plan to Visit"
              helperText="Separate each with comma."
              fullWidth
              variant="outlined"
              value={visitingCountry}
              onChange={(e) => {
                setVisitingCountry(e.target.value);
              }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <StartDatePickerValue fullWidth/>
          </Grid>
        <Grid item xs={12} sm={6}>
            <EndDatePickerValue fullWidth/>
          </Grid>
        <Grid item xs={12}>
        <TextField
              required
              id="dailyBudget"
              name="dailyBudget"
              label="How much is your Daily Budget?"
              fullWidth
              variant="outlined"
              value={dailyBudget}
              onChange={(e) => {
                setDailyBudget(e.target.value);
              }}
            />
        </Grid>
        <Grid item xs={12}>
        <TextField
              required
              id="entireBudget"
              name="entireBudget"
              label="How much is your Budget for the Entire Trip?"
              fullWidth
              helperText="We need to make sure the cost of the entire trip will match your financial capacity proof."
              variant="outlined"
              value={entireBudget}
              onChange={(e) => {
                setEntireBudget(e.target.value);
              }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
              required
              id="whatsappInfo"
              name="whatsappInfo"
              label="WhatsApp Number"
              fullWidth
              variant="outlined"
              value={whatsappInfo}
              onChange={(e) => {
                setWhatsappInfo(e.target.value);
              }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
              required
              id="facebookInfo"
              name="facebookInfo"
              label="Facebook Account"
              fullWidth
              variant="outlined"
              value={facebookInfo}
              onChange={(e) => {
                setFacebookInfo(e.target.value);
              }}
            />
        </Grid>
        <Grid item xs={12}>
        <TextField
              required
              id="backgroundInfo"
              name="backgroundInfo"
              label="Please tell me more about your background"
              fullWidth
              helperText="Write down here all the details about your work, source of income,rootedness, job, the purpose of travel, etc."
              variant="outlined"
              value={backgroundInfo}
              onChange={(e) => {
                setBackgroundInfo(e.target.value);
              }}
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

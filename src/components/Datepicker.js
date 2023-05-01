import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid } from '@mui/material';

export default function Datepicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="When Is Your Appointment or Flight Date?"
        disablePast
        slotProps={{
          textField: {
            helperText: 'Tell us when the ticket will be used as we recommend sending your ticket 3 days before for longer reservation period.',
          },
        }}
      />
    </LocalizationProvider>
  );
}